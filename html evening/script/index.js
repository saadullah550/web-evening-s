 // runs inside the browesr 

 // variables and data types 
 let name ='saad' ;  //string
 let age =20  ;     //integer
 let city ='Lahore' ;
 let marks =90.7 ;  //float
 const cnic = '123-456-789'; //string
 //every thing written in string can show as it is
 let status =false;  //boolien

 //output
 console.log(name)
 console.log(age)
 console.log(city)
 console.log(status)

 // operators: arthmatic assignment comprasion
 // function
 //defining a function 
  function greet(name) //paramaters
  {
    //function block
    // console.log('Hello,Guest')
    console.log('Hello,' +name)
  }
  //function calling
  greet('saad')

  //HTML DOM( document object model)

  //writing text using js
  // document.getElementById('text').innerText='Hello js';
  // document.querySelector('h1').innerText='Hello js';


  //stlying with js
  // function changecolor(){
            // document.querySelector('h1').style.color ='red';
            // document.querySelector('h1').style.backgrouncolor'='black;
  // }
  
  

  //using event listners with a named function 

  // document.getElementById('btn').addEventListener('click',changecolor)

  // Eventlinstner with anonymous function

  // document.getElementById('btn').addEventListener(
    // 'click ', function(){
      // document.querySelector('h1').style.color='red'
    // }
  // )
  // let box=document.getElementById('box')
  // document.getElementById('btn').addEventListener('click',function()
// 
// {
  // box.style.backgroundColor='blue';
  // box.style.color='white';
  // box.style.border='2px solid gray';
  // box.style.padding='10px';
// })

// let btn=document.getElementById('btn')
// let input=document.getElementById('input')
// let txt = document.getElementById('text')

// btn.addEventListener('click', function(){

  // let val = input.value 
  // if(val.length >= 5 ){
    //  txt.innerText= val

  // }
  // else{
    // txt.innerText ='Number of chars should be equal to 5 or greater than 5'
  // }
 

// })

//  change color with user input

// let btn =document.getElementById('btn')
//   let txt =document.getElementById('text')
// btn.addEventListener('click' , function(){
//     let color =document.getElementById('color').value 
//     txt.style.color =color
//   } )

//regular function 
function addvalues(a,b){
  console.log(a+b)
}
addvalues(5,7)
    // Arrow  function
let sum =(a,b) =>{
  console.log(a+b)
}
sum(2,5)


// let btn =document.getElementById('btn')
//   let txt =document.getElementById('text')
// btn.addEventListener('click' , ()=>{
//     let color =document.getElementById('color').value 
//     txt.style.color =color
//   } )
  //Arrays : is a collection of values stored in a single variable
  // let city='lahore'
  let cities =[ 'Lahore', 'Karachi', 'Qutta']
  console.log(cities)

  // Accessing a single value with indexing 
  console.log[0]
  let x =cities[1]
  console.log(x)

  cities[2]='Multan' //assigning a new value to index
  cities[3]='Quetta' //creates a new index

  // Methods and Properties 
  cities.lenght //properties
  cities.push('sailkot') //Methods 
 let val = cities.pop() //removes and return the value 
 console.log(cities)  
 console.log(val) //returned value



 //loops 
 //For loop 
//  for ( let=i=0; i<10; i++){
//   console.log(i)
//  }
 // multipication table
 let result 
 for(let i=1; i<=10; i++){
  result= 2* i 
console.log(2 + 'x' + i + '=' + result)

 }
// btn2.addEventListener('click', () =>{


//   let num =document.getElementById('num').value 
//   let result 
//   for( let i=1; i <= 10; i++ ){
//     result=num*i ;
//   console.log(`  ${num} x ${i} = ${result} `)
//   }
// })



// // CALCULATOR
// function calculator(operator){
//   let n1 =parseFloat(document.getElementById('num1').value)
//   let n2 =parseFloat(document.getElementById('num2').value)
//   let result =0

//   if(n1==="" || n2=== ""){
//     alert('Inputs sould not be empty')
//   }
//   if(isNaN(n1)||isNaN(n2)){
//     alert('Only Numbers Are allowed')
//   }
//   //Operations 
//   if(operator=== '+')result =n1+n2 
//   else if(operator==='-') result =n1-n2 
//   else if(operator==='*') result =n1*n2
//   else if(operator==='/') result =n1/n2
//   else "operator Not valid" 
//   document.getElementById('result').innerText = result

// function clearValues(){
// document.getElementById('num1').value= ""
// document.getElementById('num2').value= ""
// document.getElementById('result').innerText= ""



// }





// }






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
