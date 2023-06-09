let linkedin = document.getElementById('linkedin');
linkedin.addEventListener('click',function(){
    window.open('https://www.linkedin.com/in/yasinhalebi/', '_blank');
});
let myimg = document.querySelector('header .container .linkedin img');
let calculator = document.getElementById('calculator');
let parent = document.getElementById('parent');
let dark = document.getElementById('dark');
let sun = document.getElementById('sun');
let mood = document.getElementById('children');
parent.addEventListener('click',function(){
    if(mood.classList.contains('light')){
        mood.classList.remove('light');
        mood.classList.add('dark');
        dark.classList.remove('hidden');
        sun.classList.add('hidden');
        parent.style.backgroundColor='rgb(71, 71, 71)';
        parent.style.outlineColor='rgb(117, 117, 117)';
        mood.style.borderColor='rgb(117, 117, 117)';
        calculator.style.backgroundImage='url(imgs/gray1.jpg)';
        myimg.style.outlineColor='#1c1c1c';
    }
    else{
        mood.classList.remove('dark');
        mood.classList.add('light');
        sun.classList.remove('hidden');
        dark.classList.add('hidden');
        parent.style.backgroundColor='rgba(255, 255, 255, 0.2)';
        parent.style.outlineColor='bisque';
        mood.style.borderColor='bisque';
        calculator.style.backgroundImage='url(imgs/backk.png)';
        myimg.style.outlineColor='aqua';
        }
});
var resultFinal;
var firstop=0;
var numbersArray = [];
var opArray= [];
var tempArray=[];
var input = document.getElementById('empty-area');
var number = Array.from(document.getElementsByClassName('number'));
var op = Array.from(document.getElementsByClassName('op'));

number.forEach(element => {
    element.addEventListener('click',function(){
        if(element.classList.contains('delete')){
            opArray.pop();
            var i=0;
            input.value='';
            for(i; i<opArray.length;i++){
                input.value=input.value +opArray[i];
                console.log(opArray);
            }
            var audio = document.getElementById('others').play();
        }
        else if(element.classList.contains('dot')){
            if(opArray[opArray.length-1] === '-' || opArray[opArray.length-1] === '+' || opArray[opArray.length-1] === '/' ||opArray[opArray.length-1] === '*' || opArray[opArray.length-1] === '.'){
                var i=0;
                input.value='';
                for(i; i<opArray.length;i++){
                input.value=input.value +opArray[i];
            
                }
            }
            else{
            var audio = document.getElementById('others').play();
                opArray[opArray.length]='.';
                var i=0;
                input.value='';
                for(i; i<opArray.length;i++){
                    input.value=input.value +opArray[i];
                
                }
            }
        }

        else if(element.classList.contains('numbers')){
            var numberUsed = parseFloat(element.innerHTML);
            opArray.push(numberUsed);
                resultFinal = opArray.join('');
            var i=0;
            var audio = document.getElementById('others').play();
            input.value='';
            for(i; i<opArray.length;i++){
                input.value=input.value +opArray[i];
                }
            }

        else if(element.classList.contains('multiply')){
            if(opArray[opArray.length-1] === '-' || opArray[opArray.length-1] === '+' || opArray[opArray.length-1] === '/' ||opArray[opArray.length-1] === '*' || opArray[opArray.length-1] === '.'){
                var i=0;
                input.value='';
                for(i; i<opArray.length;i++){
                    input.value=input.value +opArray[i];
                }
            }
            else{
            var audio = document.getElementById('others').play();
                firstop = firstop + intArray(opArray);
                opArray.push('*');
                resultFinal = opArray.join('');
                var i=0;
                input.value='';
                for(i; i<opArray.length;i++){
                    input.value=input.value +opArray[i];
                }
            }
        }

        else if(element.classList.contains('devide')){
            if(opArray[opArray.length-1] === '-' || opArray[opArray.length-1] === '+' || opArray[opArray.length-1] === '/' ||opArray[opArray.length-1] === '*' || opArray[opArray.length-1] === '.'){
                var i=0;
                input.value='';
                for(i; i<opArray.length;i++){
                    input.value=input.value +opArray[i];
                }
            }
            else{
            var audio = document.getElementById('others').play();
                firstop = firstop + intArray(opArray);
                opArray.push('/');
                resultFinal = opArray.join('');
                var i=0;
                input.value='';
                for(i; i<opArray.length;i++){
                    input.value=input.value +opArray[i];
                }
            }
        }
        else if(element.classList.contains('plus')){
            if(opArray[opArray.length-1] === '-' || opArray[opArray.length-1] === '+' || opArray[opArray.length-1] === '/' ||opArray[opArray.length-1] === '*' || opArray[opArray.length-1] === '.'){
                var i=0;
                input.value='';
                for(i; i<opArray.length;i++){
                    input.value=input.value +opArray[i];
                }
            }
            else{
            var audio = document.getElementById('others').play();
                firstop = firstop + intArray(opArray);
                opArray.push('+');
                resultFinal = opArray.join('');
                var i=0;
                input.value='';
                for(i; i<opArray.length;i++){
                    input.value=input.value +opArray[i];
                }
            }
        }
        else if(element.classList.contains('minus')){
            if(opArray[opArray.length-1] === '-' || opArray[opArray.length-1] === '+' || opArray[opArray.length-1] === '/' ||opArray[opArray.length-1] === '*' || opArray[opArray.length-1] === '.'){
                var i=0;
                input.value='';
                for(i; i<opArray.length;i++){
                    input.value=input.value +opArray[i];
                }
            }
            else{
            var audio = document.getElementById('others').play();
                firstop = firstop + intArray(opArray);
                opArray.push('-');
                resultFinal = opArray.join('');
                var i=0;
                input.value='';
                for(i; i<opArray.length;i++){
                    input.value=input.value +opArray[i];
                }
            }
        }
        else if(element.classList.contains('equal')){
            var audio = document.getElementById('audio').play();
            resultFinal= eval(resultFinal);
            console.log(resultFinal);
            input.value = "";
            input.value = parseFloat(resultFinal);
            opArray=[];
        }
        else if(element.classList.contains('one-devide')){
            var audio = document.getElementById('audio').play();
            console.log(resultFinal);
            input.value = "";
            input.value = parseFloat(1/eval(resultFinal));
            opArray=[];
        }
        else if(element.classList.contains('square')){
            var audio = document.getElementById('audio').play();
            console.log(resultFinal);
            input.value = "";
            input.value = parseFloat(eval(resultFinal) * eval(resultFinal));
            opArray=[];
        }
        else if(element.classList.contains('root')){
            var audio = document.getElementById('audio').play();
            console.log(resultFinal);
            input.value = "";
            input.value = parseFloat(Math.sqrt(eval(resultFinal)));
            opArray=[];
        }
        else if(element.classList.contains('c')){
            var audio = document.getElementById('others').play();
            opArray = [];
            input.value = "";
            input.value = "0";
        }
     });
});
function intArray(arr){
    n="";
    arr.forEach(element => {
        n=n +element;
    });
    return parseInt(n);
}
var result = "";


var equal = document.getElementById('equal');
