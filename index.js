// function checkKeyboardCode(){
// document.addEventListener('keydown', (event) => {
//     var name = event.key;
//     var code = event.code;
//     alert(`A tecla pressionada foi: ${name} \r\n O valor da tecla é: ${code}`);
// }, false);
// }


// function Checking(){

//     document.addEventListener('keydown', (event) => {
//         var code = event.code;
//         var frontEnd = document.getElementById('frontEnd')
//         var backEnd = document.getElementById('backEnd')
//         var bancoDados = document.getElementById('bancoDados')

//         if (code == 'Digit1'){
//             frontEnd.classList.toggle('red');
//             backEnd.classList.remove('red');
//             bancoDados.classList.remove('red');
//         }

//         if (code == 'Digit2'){
//             frontEnd.classList.remove('red');
//             backEnd.classList.toggle('red');
//             bancoDados.classList.remove('red');
//         }

//         if (code == 'Digit3'){
//             frontEnd.classList.remove('red');
//             backEnd.classList.remove('red');
//             bancoDados.classList.toggle('red');
//         }
//     }, false);
// }

// Checking();

const array = [];

document.addEventListener("keydown", function(event) {
    if (event.key === "1") {
        var firstCheck = document.getElementById("firstCheck");
        firstCheck.checked = !firstCheck.checked;
        array[0] = document.getElementById('frontEnd').innerHTML
    }
    if (event.key === "2") {
        var secCheck = document.getElementById("secCheck");
        secCheck.checked = !secCheck.checked;
        array[1] = document.getElementById('backEnd').innerHTML
    }
    if (event.key === "3") {
        var thirdCheck = document.getElementById("thirdCheck");  
        thirdCheck.checked = !thirdCheck.checked;
        array[2] = document.getElementById('bancoDados').innerHTML
    }
});

   console.log(array)
