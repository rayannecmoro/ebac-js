function CEPValidation(element) {
    element.addEventListener('focusout', function(event){
        event.preventDefault();

        let number = this.value.replace(/-/, '');
        number = number.match(/[^\d]+/g) ? this.value = '' : number;
        console.log(number);

        if (number.length !== 8 || !!number.match(/(\d)\1{7}/)) {
            document.querySelector('.msg-number').innerHTML = "Campo inválido, digite o campo CEP corretamente.";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
            
        } else {
            document.querySelector('.msg-number').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            return true;
        }
    });
}

function phoneValidation(element) {
    element.addEventListener('focusout', function(event){
        event.preventDefault();

        let number = this.value.replace(/[^\d]+/g, '');
        console.log(number); 

        if ( number.length < 10 || number.length > 11 || !!number.match(/(\d)\1{10}/)) {
            // this.value = '';
            document.querySelector('.msg-phone').innerHTML = "Campo inválido, digite o telefone com DDD + Número.";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
            
        } else {
            document.querySelector('.msg-phone').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            return true;
        }
    });
}
  
function fieldValidation(element) {
  
    element.addEventListener('focusout', function(event){
        event.preventDefault();
      
        if(this.value == ""){
          document.querySelector('.menssager').innerHTML = 'Verifique o preenchimento dos campos em destaque.';
          this.classList.add('erro');
          this.parentNode.classList.add('erro');
          return false;
        } else {
          document.querySelector('.menssager').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
      });
}
  
function mailValidation(element) {
    element.addEventListener('focusout', function(event){
      event.preventDefault();
  
      const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i; 
      if( this.value.match(emailValido) ) {
        document.querySelector('.msg-mail').innerHTML = "";
        this.classList.remove('erro');
        this.parentNode.classList.remove('erro');
  
      } else {
        document.querySelector('.msg-mail').innerHTML = "E-mail inválido.";
        this.classList.add('erro');
        this.parentNode.classList.add('erro');
        return false;
      }
    });
}

function stateValidation(element) {
    element.addEventListener('focusout', function(event){
        event.preventDefault();

        let state = this.value;
        // console.log(state);

        if (state.length !== 2 || !!state.match(/[\a-z.]+/)) {
            document.querySelector('.msg-state').innerHTML = "Digite apenas a sigla do estado.";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
            
        } else {
            document.querySelector('.msg-state').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            return true;
        }
    });
}

document.getElementById('form02').addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();
    
    // if (this.getAttribute('class').match(/erro/)) {
    //   return false;
    // } 

    let dados = new FormData(this);
    let dadosForm = [];
  
    for (let key of dados.keys()) {
      let dado = dados.get(key);
  
      if (dado !== ""){
        dadosForm.push(dado);  
        document.querySelector('.menssager').innerHTML = '';
        this.parentNode.classList.remove('erro');
      } else {
        document.querySelector('.menssager').innerHTML = 'Verifique o preenchimento dos campos em destaque.';
        this.parentNode.classList.add('erro');
        return false; 
      }
    }
    dados = dadosForm;
    console.log(dados);
    // console.log(dadosForm);

    // document.documentElementById('resultado').innerHTML = dados;
    
});

let camposObrigatorios = document.querySelectorAll('input.required');
let campoCEP = document.querySelectorAll('input.number');
let campoMail = document.querySelectorAll('input.email');
let campoPhone = document.querySelectorAll('input.phone');
let campoState = document.querySelectorAll('input.state');


for (let emFoco of camposObrigatorios) {
    fieldValidation(emFoco);
}
for (let emFoco of campoCEP) {
    CEPValidation(emFoco);
}
for (let emFoco of campoMail) {
    mailValidation(emFoco);
}
for (let emFoco of campoPhone) {
    phoneValidation(emFoco);
}
for (let emFoco of campoState) {
    stateValidation(emFoco);
}