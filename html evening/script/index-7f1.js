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

function todoList(){
  let input =document.getElementById('task-input').value
  let tasktext=input.trim()
   
  if( tasktext===""){
    alert('Please enter something!')
  }
  
}