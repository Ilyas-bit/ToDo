
const form = document.querySelector('.add-things-todo');
const form2 = document.querySelector('.add-things-todo-2');
let delButton = document.querySelectorAll('.form-summary__img-2')


const toDoList = [ 
    // {name: 'погулять', status: 'Done', priority: 'low', id: '1'}, 
    // {name: 'сходить на рыбалку', status: 'Done', priority: 'high', id: '2'},
    // {name: 'почитать', status: 'In progress', priority: 'high', id: '3'}
];

import data from './task.json' assert {type: "json"};

const taskJson = data.toDoList
console.log(taskJson);

taskJson.forEach(task => {
    toDoList.push(task)
})
console.log(toDoList);

render()

const STATUSES = [ "To Do", "In progress", "Done" ]
const PRIORITY = [ 'low', 'high' ]

function checkName(name) {
    let checkName = toDoList.find(designation => designation.name === name)
    return checkName
};
function checkStatuses(status) {
    let checkStatuses = STATUSES.find(state => state === status)
    return checkStatuses
};
function checkPriority(priority) {
    let checkPriority = PRIORITY.find(importance => importance === priority)
    return checkPriority
}


function cleaningDom () {
    let obj=document.querySelectorAll('.form-summary__shell-task');
    let n = obj.length;
	// for(let i = 0; i < obj.length; i++) {
	// 	obj[i].remove();
	// }
    if (n === 0) {
        return
    } else {
        n--;
        obj[n].remove();
        cleaningDom ();
    }
}
let newDiv;
let newCheckBox;
let newTask;
let newIcon;



function createElement (name, id, status) { 
    const newDiv = document.createElement('div'); 
    const newTask = document.createElement('div'); 
    const newCheckBox = document.createElement('input'); 
    const newIcon = document.createElement('img'); 
    newCheckBox.setAttribute('type', 'checkbox');
    newIcon.setAttribute('src', 'image/close-icon.svg')
    newDiv.className = 'form-summary__shell-task';
    newCheckBox.className = 'inputt';
    newTask.className = 'form-summary__task';
    newIcon.className = 'form-summary__img-2';

    newTask.textContent = name;
    newTask.id = id; 
    if (status === "Done") {
        newCheckBox.checked = 'checked';
    }
    console.log(id)

    newDiv.appendChild(newCheckBox);
    newDiv.appendChild(newTask);
    newDiv.appendChild(newIcon);
    
    newIcon.addEventListener('click', function del () {
        let taskForm = newIcon.parentElement;
        console.log(taskForm)
        const text = taskForm.querySelector('.form-summary__task').textContent;
        console.log(text)
        const name = text;
        if (checkName(name)) {
            const numberDeleteTask = toDoList.findIndex(task => task.name === name)
            toDoList.splice(numberDeleteTask, 1)
        } else {
            console.log(MASSGES.ADDING_ERROR)
        };
        cleaningDom () 
        render ()

    });
    newCheckBox.addEventListener('change', function check () {
        console.log(newCheckBox)
        let taskForm = newIcon.parentElement;
        const text = taskForm.querySelector('.form-summary__task').textContent;
        console.log(text)
        const name = text;
        if (newCheckBox.checked) {
            const numbercheckedTask = toDoList.findIndex(task => task.name === name)
            console.log(numbercheckedTask)
            toDoList[numbercheckedTask].status = "Done"
            console.log(toDoList)
        } else {
            const numbercheckedTask = toDoList.findIndex(task => task.name === name)
            console.log(numbercheckedTask)
            toDoList[numbercheckedTask].status = "In progress"
            console.log(toDoList)
        }
    });
    return newDiv;
  }
console.log(createElement('lol', 'fffdvj'))


function render () {
    toDoList.forEach(task => {
        if (task.priority === 'high') {
            form.append(createElement(task.name, task.id, task.status))
        }else if (task.priority === 'low') {
            form2.append(createElement(task.name, task.id, task.status))
        }
      });
    
}



function del () {
    let taskForm = button.parentElement;
    console.log(taskForm)
    const text = taskForm.querySelector('.form-summary__task').textContent;
    console.log(text)
    const name = text;
    button.addEventListener("click", () => {
        if (checkName(name)) {
            const numberDeleteTask = toDoList.findIndex(task => task.name === name)
            toDoList.splice(numberDeleteTask, 1)
        } else {
            console.log(MASSGES.ADDING_ERROR)
        };
        });
        render () 
 

}



// function cleaningDom () {
//     let obj=document.querySelectorAll('.form-summary__shell-task')
// 	for(let i = 0; i < obj.length; i++) {
// 		obj[i].remove();
// 	}
// }





const MASSGES = {
    REPEAT_ERROR: "Эта задача уже есть в списке",
    STATUS_ERROR: "Введите верный статус",
    PRIORITY_ERROR: "Введите верный приоритет",
    ADDING_ERROR: "Нельзя удалить того чего нет",
    STATUS_CHANGE_ERROR: "Нельзя поменять статус того чего нет",
}



let id = 4;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('form1').value;
    const status = 'In progress';
    const priority = 'high';

    function addTask(name, status, priority) {
        if (checkName(name)) {
            console.log(MASSGES.REPEAT_ERROR);
        } else if (!checkStatuses(status)) {
            console.log(MASSGES.STATUS_ERROR);
        } else if (!checkPriority(priority)) {
            console.log(MASSGES.PRIORITY_ERROR);
        } else if (name === "") {
            console.log(MASSGES.PRIORITY_ERROR);
        } else {
            toDoList.push({name, status, priority, id});
            id++
        };
    }
    addTask(name, status, priority);
    console.log(toDoList);
    cleaningDom()
    render()
    document.getElementById('form1').value = "";
});



form2.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('form2').value;
    const status = 'In progress';
    const priority = 'low';

    function addTask(name, status, priority) {
        if (checkName(name)) {
            console.log(MASSGES.REPEAT_ERROR);
        } else if (!checkStatuses(status)) {
            console.log(MASSGES.STATUS_ERROR);
        } else if (!checkPriority(priority)) {
            console.log(MASSGES.PRIORITY_ERROR);
        } else if (name === "") {
            console.log(MASSGES.PRIORITY_ERROR);
        } else {
            toDoList.push({name, status, priority, id});
            id++
        };
    }
    addTask(name, status, priority);
    console.log(toDoList);
    cleaningDom()
    render()
    document.getElementById('form2').value = "";
});
