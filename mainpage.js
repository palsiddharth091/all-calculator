let select_calculator = document.querySelector('#dropdownMenu1');
let go_1=document.querySelector('#go-1');
console.log(select_calculator);
go_1.addEventListener('click',function Select_cal(e) {
    e.preventDefault();
    if (select_calculator.value =='P_s')
    {
        location.href = "Probability.html";
    }
    else if(select_calculator.value=='s-q-s')
    {
        location.href="sequence_and_series.html";
    }
    else if (select_calculator.value == 'Trigo') {
        location.href = "Trigonometry.html";
    }
    else if (select_calculator.value == 'Currency') {
        location.href = "Currency.html";
    }
    else if (select_calculator.value == 'Shape') {
        location.href = "Mensuration.html";
    }
    else if (select_calculator.value == 'N-check') {
        location.href = "NumCheck.html";
    }
    else if (select_calculator.value == 'Mtrx') {
        location.href = "Matrix.html";
    }
    else
    {
        alert('Please Select a Valid Calculator');
    }
})