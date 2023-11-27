document.addEventListener("DOMContentLoaded", () => {
  console.log(document.querySelector('#create-task-form'))
  // your code here
// we will add x button to remove
  // add text and submit ( submit event)
  document.querySelector('#create-task-form').addEventListener('submit' ,(e) => { console.log('task')
    e.preventDefault() // prevents default action
    console.log(e.target["new-task-description"].value)
    handleTaskLister(e.target["new-task-description"].value) //the value you type in will be handled by handleTaskLister function
    
  })

});

function handleTaskLister (task) {
  let p = document.createElement('li')
  let btn = document.createElement('button') 
  btn.addEventListener('click' , deleter) // should I add eventlistener in tihs scope ? 

  btn.textContent = ' x'
  p.textContent = task
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}


function deleter (e) { 
  e.target.parentNode.remove() // we grabbed the target of event = button , why we grab the parent node ?

}

