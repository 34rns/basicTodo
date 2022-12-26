// main function for variable scoping
(function () {
     
    window.addEventListener('load', () =>{
       const form = document.getElementById('new-task-form');
       const input = document.getElementById('new-task-input');
       const taskList = document.getElementById('tasks');
     
    
       form.addEventListener('submit', (e) => {
           e.preventDefault();
          
           const inputTxt = input.value;
           
           if (!inputTxt) {
            alert('No task was written !!');
            return;
           }
           const taskDiv = document.createElement('div');
           taskDiv.classList.add('task');
           
           const contentDiv = document.createElement('div');
           contentDiv.classList.add('content');
           
           taskDiv.appendChild(contentDiv);
           
           const taskShowInput = document.createElement('input');
           taskShowInput.classList.add('text');
           taskShowInput.type = 'text';
           taskShowInput.setAttribute('readonly','readonly');
           taskShowInput.value = inputTxt;
           contentDiv.appendChild(taskShowInput); 
           
           const actionDiv = document.createElement('div');
           actionDiv.classList.add('actions');
           
           const editButton = document.createElement('button');
           editButton.classList.add('edit');
           editButton.innerHTML = 'Edit';
           
           const delButton = document.createElement('button');
           delButton.classList.add('delete');       
           delButton.innerHTML = 'Delete';
           
           actionDiv.appendChild(editButton);
           actionDiv.appendChild(delButton);
           taskDiv.appendChild(actionDiv);
           
           
           taskList.appendChild(taskDiv);
           
           
           input.value = '';
    
           editButton.addEventListener('click', () => {
                 if (editButton.innerText.toLowerCase() === 'edit') {
                    taskShowInput.removeAttribute('readonly');
                    taskShowInput.focus();
                    editButton.innerText = 'save';
                 } else {
                    taskShowInput.setAttribute('readonly','readonly');
                    editButton.innerText = 'Edit';
                 }
           });
    
    
           delButton.addEventListener('click',() =>{
           taskList.removeChild(taskDiv);
           });
    
    
       }); 
    
    
    })
    

    
    })(); 