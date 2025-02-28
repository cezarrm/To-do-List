const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-add');
const tasks = document.querySelector('.tasks');

function createLi() {
   const li = document.createElement('li');
   return li;
}


function createTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    tasks.appendChild(li);
}


btnTask.addEventListener('click', function(){
    if (!inputTask.value) return;
    createTask(inputTask.value);
});

