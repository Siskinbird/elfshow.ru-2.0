/**DRIADA MODAL VARIABLES*/
let modalDriada = document.getElementById("myModalDriada");
let btnDriada = document.getElementById("openModalDriada");
let span = document.getElementsByClassName("close");

btnDriada.onclick = function() {
    modalDriada.style.display = "block";
}

span[3].onclick = function() {
    modalDriada.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modalDriada) {
        modalDriada.style.display = "none";
    }
}


/**ELFI MODAL VARIABLES*/
let modalElfi = document.getElementById("myModalElfi");
let btnElfi = document.getElementById("openModalElfi");

btnElfi.onclick = function() {
    modalElfi.style.display = "block";
}

span[0].onclick = function() {
    modalElfi.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modalElfi) {
        modalElfi.style.display = "none";
    }
}

/**TRIO MODAL VARIABLES*/
let modalTrio = document.getElementById("myModalTrio");
let btnTrio = document.getElementById("openModalTrio");

btnTrio.onclick = function() {
    modalTrio.style.display = "block";
}

span[1].onclick = function() {
    modalTrio.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modalTrio) {
        modalTrio.style.display = "none";
    }
}

/**DUO MODAL VARIABLES*/
let modalDuo = document.getElementById("myModalDuo");
let btnDuo = document.getElementById("openModalDuo");


btnDuo.onclick = function() {
    modalDuo.style.display = "block";
}

span[2].onclick = function() {
    modalDuo.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modalDuo) {
        modalDuo.style.display = "none";
    }
}

/**SOLO MODAL VARIABLES*/
let modalSolo = document.getElementById("myModalSolo");
let btnSolo = document.getElementById("openModalSolo");


btnSolo.onclick = function() {
    modalSolo.style.display = "block";
}

span[4].onclick = function() {
    modalSolo.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modalSolo) {
        modalSolo.style.display = "none";
    }
}
/**QUIZ MODAL VARIABLES*/

let modalQuiz = document.getElementById("myModalQuiz");
let btnQuiz = document.getElementById("openModalQuiz");

btnQuiz.onclick = function() {
    modalQuiz.style.display = "block";
}

span[5].onclick = function() {
    modalQuiz.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modalQuiz) {
        modalQuiz.style.display = "none";
    }
}