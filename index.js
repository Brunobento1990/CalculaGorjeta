var btn5 = document.getElementById('btn5');
var btn10 = document.getElementById('btn10');
var btn15 = document.getElementById('btn15');
var btn25 = document.getElementById('btn25');
var btn50 = document.getElementById('btn50');
var custom = document.getElementById('custom');
var resulttip = document.getElementById('result-tip');
var total = document.getElementById('total');
var reset = document.getElementById('reset');
var numpeople = document.getElementById('numpeople');
var conta = document.getElementById('conta');
var error = document.getElementById('error');

calculo(btn5);
calculo(btn10);
calculo(btn15);
calculo(btn25);
calculo(btn50);

btn5.setAttribute('value',5)
btn10.setAttribute('value',10)
btn15.setAttribute('value',15)
btn25.setAttribute('value',25)
btn50.setAttribute('value',50)
//validação do numero de pessoas
numpeople.addEventListener('keyup',function () {
    if (!numpeople.value || numpeople.value == 0 || numpeople.value.length > 2) {
        error.innerHTML = "Can't be zero"
        numpeople.classList.add("erro-input")
    }else{
        error.innerHTML = ""
        numpeople.classList.remove("erro-input")
    }
})

//validação do valor da conta
conta.addEventListener('blur',function () {
    if (!conta.value || conta.value == 0 || conta.value.length > 7) {
        alert('Enter a valid value')
    }
})

//adciona classe no botao reset para grantir 3 efeitos de cores
function addclass() {
    reset.classList.remove("numb22")
    reset.classList.add("resetbtn")
}
function calculo(element) {
    
    
    element.addEventListener('click', function () {
        if (!conta.value || conta.value == 0 || conta.value.length > 7) {
            
            return
        }
        if (!numpeople.value || numpeople.value == 0 || numpeople.value.length > 2) {
            
            return
        }else{
            error.innerHTML = ""
            numpeople.classList.remove("erro-input")
        }
      porcentagemconta = (conta.value * element.value)/100;
      valorconta = conta.value / numpeople.value;
      
      fecharconta = valorconta + porcentagemconta
      resulttip.innerHTML = ""
      resulttip.innerHTML = "$" + porcentagemconta.toFixed(2)
      total.innerHTML = ""
      total.innerHTML = "$" + fecharconta.toFixed(2) 
      addclass()

    });

}

// evento que calcula gorjeta a partir do input custom

custom.addEventListener('blur',function () {
    if (!custom || custom.value <= 0 || custom.value.length >= 7) {
        alert('Enter a valid value custom')
        return
    }
    valorconta = conta.value / numpeople.value;
    porcentagemconta = (conta.value * custom.value)/100;
    fecharconta = valorconta + porcentagemconta
    resulttip.innerHTML = "";
    resulttip.innerHTML = "$" + porcentagemconta.toFixed(2) ;
    total.innerHTML = "";
    total.innerHTML = "$" + fecharconta.toFixed(2) ;
    addclass()
})

//reseta os valores da caulculadora
reset.addEventListener('click',function reset1() {
    resulttip.innerHTML = "$ 0,00" 
    total.innerHTML = "$ 0,00" 
    reset.classList.remove("resetbtn")
    reset.classList.add("numb22")
})

