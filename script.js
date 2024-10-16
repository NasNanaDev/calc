let result = document.querySelector('.result');




function toDisplay(input){
    result.value += input;
}

function clearNum(){
    result.value = '';
}

function equal(){
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error'
    }
}
''