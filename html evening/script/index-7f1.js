 let btn= document.getElementById('btn')
 let txt= document.getElementById('text')
 btn.addEventListener('click', ()=> {
    let color=document.getElementById('color').value 
    txt.style.color=color

 })

 function calculator ( operator ){
   let n1=parseFloat(document.getElementById('num1').value)
   let n2=parseFloat(document.getElementById('num2').value)
   let result= 0
 
 if(n1===""||n2===""){
   alert('Input should not be empty')
 }
 if(isNaN(n1)||isNaN(n2)){
   alert('Only Numbers are Allowed ')
 }
if(operator==='+') result=n1+n2
else   if(operator==='-') result=n1- n2
 else if(operator==='*') result=n1 * n2
 else if(operator==='/' )result=n1 / n2
 else "operator is not valid"
 document.getElementById('result').innerText=result
}

// function todoList(){
//   let input =document.getElementById('task-input').value
//   let taskText=input.trim()
   
//   if( tasktext===''){
//     alert('Please enter something!')
//   }
//   let li=document.createElement('li')
//   li.className='bg-gray-200 p-2 flex justify-between  items-center my-1'
//   let span=document.createElement('span')
//   span.innerText=taskText
//   span.className='cursor-pointer'
//   span.onclick=function(){
//     span.className='line-through decoration-red-600'
//   }
//   let del=document.createElement('button')
//   del.innerText='Delete Task'
//   del.className='bg-sky-300 text-sm px-2 py-1 border border-black rounded-md'

//   del.onclick =() => {
//     li.remove()
//   }
     
//     li.appendChild(span) 
//     li.appendChild(del)
//     document.getElementById(task-list).appendChild(li) 
// }
// document.getElementById('Add-task').addEventListener('click',todoList)
// document.getElementById('task-input').addEventListener('keypress',(e) =>{

//   if(e.key==='Enter') todoList()
// })






function todoList(){
  let input =document.getElementById('task-input').value
  let taskText=input.trim()
  if(taskText===''){
    alert('Please Enter Something!!')
  }
  let li=document.createElement('li')
  li.className='bg-gray-200 p-2 flex justify-between items-center my-1 rounded-md'
  let span =document.createElement('span')
  span.innerText =taskText
  span.className='cursor-pointer'
  span.onclick= function(){
    span.className='line-through decoration-red-600'
  }
  let dlt = document.createElement('button')  
    dlt.innerText='Delete Task'
    dlt.className='border-2 border-black p-1 rounded-md bg-gray-400'

    dlt.onclick =() => {
      li.remove()
    }
    
    li.appendChild(span)
    li.appendChild(dlt)
    
    document.getElementById('task-list').appendChild(li)
    
  
   
}
document.getElementById('Add-task').addEventListener('click',todoList)
document.getElementById('task-input').addEventListener('keypress', (e) => {
  if(e.key==='Enter') todoList()
})
