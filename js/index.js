// function obterMedia() {
// 	var a = parseInt(document.getElementById("a").value);
// 	var b = parseInt(document.getElementById("b").value);
// 	var c = parseInt(document.getElementById("c").value);
//   var media = (a + b + c) / 3;
  
//   document.getElementById("resultado").innerHTML = "Resultado: " + media;
//   console.log(a + b + c);
// }

let media;
function aprovacao(notas) {
  let media = calcularMedia(notas);
  let condicao = media >= 8 ? "aprovado" : "reprovado";
  return 'Média: ' + media + ' - Resultado: ' + condicao;
}

const formulario1 = document.getElementById('formulario-01');
if (formulario1) {
  // document.getElementById('form1').addEventListener('submit', function(){
  formulario1.addEventListener('submit', function() {
    event.preventDefault();
    event.stopPropagation();
  
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

    const emailValido = "" ; ///^[a-z0-9.]+@[a-z0-9]+\.[a-z]+)/i;
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

let camposObrigatorios = document.querySelectorAll('input.required');
let camposNumericos = document.querySelectorAll('input.number');
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