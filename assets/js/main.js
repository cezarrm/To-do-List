const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-add');
const tasks = document.querySelector('.tasks');

function createLi() {
   const li = document.createElement('li'); //cria um li e retorna li
   return li;
}

inputTask.addEventListener('keypress', function(e){
    if(e.keyCode === 13) { //pega valor da tecla e aciona a função.
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }

});

function cleanInput() {
    inputTask.value = ''; //zera o campo de input
    inputTask.focus();//evento de click no campo

}


function createTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    tasks.appendChild(li);
    cleanInput()
    createBtnErase(li)
    createBtnComplete(li)
    saveTasks()
}


btnTask.addEventListener('click', function(){
    if (!inputTask.value) return;
    createTask(inputTask.value);
});

function createBtnErase(li) {
    
    const btnErase = document.createElement('button');
    btnErase.innerText = 'Delete';
    // btnErase.classList.add('erase');
    btnErase.setAttribute('class', 'erase');
    li.appendChild(btnErase);
    
    return li;

}

function createBtnComplete(li) {
    
    const btnComplete = document.createElement('button')
    btnComplete.innerText = 'Complete';
    btnComplete.setAttribute('class','btn-complete')
    li.appendChild(btnComplete)
    
    return li;
}


document.addEventListener('click' , function(e){
    const el = e.target;
    if (el.classList.contains('erase')){
        el.parentElement.remove(); //REMOVE O PAI
        saveTasks()
    }

    if (el.classList.contains('btn-complete')){
        const taxar = el.parentElement
        taxar.classList.add('taxar');
        saveTasks()


    }
});

function saveTasks() {
    const liTasks = tasks.querySelectorAll('li');
    const taskList = [];

    for (let task of liTasks) {
        let taskText = task.innerText;
        taskText = taskText.replace('Delete', '');
        taskText = taskText.replace('Complete', '').trim();
        taskList.push(taskText);
    }
    const tasksJSON = JSON.stringify(taskList); //transforma em string
    localStorage.setItem('tasks', tasksJSON);//qual nome pra recuperar o valor

}

function readTasks(){
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);
    
    for (let task of taskList) {

        createTask(task);

    }
}

readTasks();