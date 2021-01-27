const contactarme = document.getElementById("submit")

function hizoClick() {
    var nombre = document.getElementById("name").value;
    var correo = document.getElementById("email").value;
    var msj = document.getElementById("message").value;
    if (nombre == "" || correo == "" || msj == "") {
        alert("Debes compeltar todos los campos"); 
    } else {
    alert("Gracias por contactarme");
    }
  }

  contactarme.addEventListener('click',() => hizoClick())