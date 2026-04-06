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
  let box=document.getElementById('box')
  document.getElementById('btn').addEventListener('click',function()

{
  box.style.backgroundColor='blue';
  box.style.color='white';
  box.style.border='2px solid gray';
  box.style.padding='10px';
})




