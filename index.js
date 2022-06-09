function reset(){    sum = ''    
document.getElementById("output").innerHTML = sum
}

let sum ="";
function buildSum(char){   
  sum += char   
  document.getElementById("output").innerHTML = sum  }
  function check(){
  sum = eval(sum)    
  document.getElementById("output").innerHTML = sum  }
  document.addEventListener('DOMContentLoaded', function(){      
  document.querySelector('.button').onclick = function() {          
  document.querySelector('#output').style.color = 'red';      
} 
 })