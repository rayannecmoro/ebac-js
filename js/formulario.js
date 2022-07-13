function numericValidation(element) {

    element.addEventListener('focusout', function(event){
        event.preventDefault();
  
        let number = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value;
  
        if( number != "" && number.match(/[0-9]*/) && number >= 0 && number <= 10) {
          document.querySelector('menssager').innerHTML = "";
          this.classList.remove('erro');
          this.parentNode.classList.remove('erro');
  
        } else {
          document.querySelector('menssager').innerHTML = "Verifique o preenchimento dos campos em destaque";
          this.classList.add('erro');
          this.parentNode.classList.add('erro');
          return false;
        }
    });
}

function fieldValidation(element) {

    element.addEventListener('focusout', function(event){
  
      event.preventDefault();
    
      if(this.value == ""){
        document.querySelector('.mensagem').innerHTML = 'Verifique o preenchimento dos campos';
        this.classList.add('erro');
        this.parentNode.classList.add('erro');
        return false;
      } else {
        document.querySelector('menssager').innerHTML = "";
          this.classList.remove('erro');
          this.parentNode.classList.remove('erro');
      }
    })
}
function mailValidation(element) {
    element.addEventListener('focusout', function(event){
      event.preventDefault();
  
      const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
      if( this.value.match(emailValido) ) {
        document.querySelector('menssager').innerHTML = "";
        this.classList.remove('erro');
        this.parentNode.classList.remove('erro');
  
      } else {
        document.querySelector('menssager').innerHTML = "Verifique o preenchimento dos campos em destaque";
        this.classList.add('erro');
        this.parentNode.classList.add('erro');
        return false;
      }
    });
}

// 
const formulario02 = document.getElementById("#form02");
console.log(formulario02);
console.log(document.getElementById('formulario-01'));
if (formulario02) {
    document.getElementById('form02').addEventListener('submit', function() {
        // document.getElementById("formulario-02").addEventListener("submit", function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        console.log('form2')
        if( this.getAttribute('class').match(/erro/)) {
            return false;
        }
    
        let dados = new FormData(this);
        let notas = [];
    
        for (let key of dados.keys()) {
            let number = Number(dados.get(key));
        
            if (!isNaN(number)){
                notas.push( number );
            }
        }
    
        texto = aprovacao(notas);
        this.documentElementById('resultado').innerHTML = texto;
    
    });
}
  
let camposObrigatorios = document.querySelectorAll('input.required');
let camposNumericos = document.querySelectorAll('input.number');
console.log( document.querySelectorAll('input.number'));
console.log( document.querySelectorAll('input.required'));
let camposEmail = document.querySelectorAll('input.email');

for (let emFoco of camposObrigatorios) {
  fieldValidation(emFoco);
}
for (let emFoco of camposNumericos) {
  numericValidation(emFoco);
}
for (let emFoco of camposEmail) {
  mailValidation(emFoco);
}