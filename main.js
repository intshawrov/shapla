"use strict";

const body = document.getElementById('body');
const button = document.querySelectorAll('li');
const lorem = document.querySelector('p');

// const redColor = document.querySelector('.red');
// redColor.addEventListener('click', function(){
//       body.style.backgroundColor = '#e84118';
// });

// const greenColor = document.querySelector('.green');
// greenColor.addEventListener('click', function(){
//       body.style.backgroundColor = '#4cd137';
// });

// const blueColor = document.querySelector('.blue');
// blueColor.addEventListener('click', function(){
//       body.style.backgroundColor = '#487eb0';
// });
// const orange = document.querySelector('.orange');
// orange.addEventListener('click', function(){
//       body.style.backgroundColor = '#c56cf0';
// });

// button.forEach(function(value){
//       value.addEventListener('click', function(){
//             let className = this.classList.value;
//             body.style.backgroundColor = className;
//             console.log(className);
//       })
// })

button.forEach(function(value){
      value.addEventListener('click', function(){
            let className = this.classList[0];
            let color = '';
            if(className === 'white'){
                  color = '#fff';
            }
            if(className === 'red'){
                  color= '#e84118';
            }
            if(className === 'green'){
                  color = '#4cd137';
            }
            if(className === 'blue'){
                  color = '#487eb0'
            }
            if(className === 'orange'){
                  color = '#c56cf0'
            }
            body.style.backgroundColor = color;

      })
})





























// document.querySelector('h1').innerText = "Shawrov";

// const box = document.querySelector('#box');
// box.style.backgroundColor = 'green';
// box.style.width = '100px';
// box.style.height = '100px';

// document.getElementById('tom').style.background = 'blue';
// document.getElementById('tom').style.padding = '20px 10px';
// document.getElementById('tom').style.width = '200px'
// document.getElementById('tom').style.color = '#ffff';
// document.getElementById('tom').style.margin = '0 0 5px 0';

// const menuItem = document.querySelectorAll('a');
// menuItem.forEach(function(i){
//       i.style.color = 'red';
//       i.style.fontSize = '20px';
//       // i.style.background = 'black';
// });

// const cusClass = document.getElementsByClassName('nav-link');

// const convertedClass = Array.from(cusClass);

// convertedClass.forEach(function(i){
//       i.style.backgroundColor = '#1f923cff';
//       i.style.padding = '10px';
      
// })


