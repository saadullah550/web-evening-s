 let name ='saad';
 let age=20;
 let city= 'Lahore'
 let marks=99.9;
 const cnic='123-456-789'
 let status ='fasle'

console.log(name)
console.log(age)
console.log(city)
console.log(status)

// function greet(name)

// console.log('Hello',+ name)
// greet('saad')
// document.getElementById('text').innerText='Hello saad';
// document.querySelector('h1').innerText='Hello saad'

// let txt=document.getElementById('text')
// let btn=document.getElementById('btn')
//   let cities =['Lahore ', 'Karachi ', 'multan']
//   console.log(cities)

//   })



// let btn =document.getElementById('btn')
// let txt=document.getElementById('text')
// btn.addEventListener('click', ()=>{
//     let color=document.getElementById('color').value 
//     txt.style.color=color
// })







// function addvalues(a,b){
    // console.log(a+b)
// }
// addvalues(10 ,15)


// let  sum = (a,b) =>{
    // console.log(a+b)
// }
// sum(20,15)


// let cities=[ 'Lahore', 'Multan', 'Karachi']
// console.log(cities)

// console.log[0]


//Calculator

function calculator(operator){
    let n1=parseFloat(document.getElementById('num1').value)
    let n2=parseFloat(document.getElementById('num2').value)
    let result=0

if( n1 ===""||n2 ===""){
    alert('Input Should Not Be Empty')
}
 if(isNaN (n1)|| isNaN(n2)){
    alert=('Only Numbers Are Allowed')

}

if(operator==='+') result=n1+n2
 else if(operator==='-') result=n1-n2
 else  if(operator==='*') result=n1*n2
 else if(operator==='/') result=n1/n2
 else "Operator not Valid"
document.getElementById('result').innerText= result
 

}

 