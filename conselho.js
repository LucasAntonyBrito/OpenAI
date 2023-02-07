const restDiv = document.querySelector('#inserir')
const restBtn = document.querySelector('#getData')

fetch('https://api.adviceslip.com/advice').then(arrowfunction=>{
    return arrowfunction .json();
}).then(adviceData => {
    const Adviceobj = adviceData.slip;
    restDiv.innerHTML = `<p>${Adviceobj.advice}<p>`;
})