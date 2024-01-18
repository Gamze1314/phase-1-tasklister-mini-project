const form = document.querySelector('#create-task-form');
const taskContainer = document.getElementById('tasks');
const colors = ["red", "yellow", "green"];

form.addEventListener('submit' ,(e) => { 
    e.preventDefault();
    const inputValue = document.querySelector('#new-task-description').value
    console.log(inputValue)

    const li = document.createElement('li');
    li.innerHTML = inputValue

    const btn = document.createElement('button');
    btn.innerHTML = "X";
   
    const btn2 = document.createElement('button');
    btn2.innerHTML = "Choose priority";

    btn2.addEventListener('mouseover', () => {
    btn2.style.background = colors[0];
    btn2.innerHTML = "High"
   });

   btn2.addEventListener('click', () => { 
    btn2.style.background = colors[1]
    btn2.innerHTML = "Medium"
   })

    btn.addEventListener('click', () => {
      li.remove();
    })

    taskContainer.appendChild(li);
    li.append(btn,btn2);

  });





