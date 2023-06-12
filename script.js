


var posti = [];
const file = 10;
const postiPerFila = 15;

function generaPosti() {

let html = "";
for (let fila = 1; fila <= file; fila++) {

    html += "<div>";

    for (let posto = 1; posto <= postiPerFila; posto++) 
    {
        let idx = (posto - 1) + (fila - 1) * postiPerFila;
        console.log(posti[idx])
        console.log(idx)
        if(posti[idx].prenotato == false)
        html += `<div><button class="posto"  onclick="pulsantePrenota(${fila}, ${posto})"></button></div>`; 
        else 
        html += `<div><button id="prenotato"  onclick="pulsantePrenota(${fila}, ${posto})"></button></div>`;  

        

    }

    html += "</div>";
}
      zzz.innerHTML = html;
}


function prenota() {
    fila =parseInt(txtnfila.value);
    posto =parseInt(txtnumero.value);
    nome = txtnome.value;
    cognome = txtcognome.value;


    idx = (posto - 1) + (fila - 1) * postiPerFila;


    posti[idx].nome = nome;
    posti[idx].cognome = cognome;
    posti[idx].prenotato = true;

    generaPosti();
}

function cambiaIcona() {
    
    
    generaPosti();
}

function cancella() {
    

    generaPosti();
}

function esci() {
    prenotazione.style.display = "none";

    generaPosti();
}


function creaCinema() {
    for (let fila = 1; fila <= file; fila++) {
        for (let posto = 1; posto <= postiPerFila; posto++) {
            let p = {
                fila: fila,
                posto: posto,
                nome: "",
                cognome: "",
                prenotato: false,
            };
            posti.push(p);
        }
    }
}

function pulsantePrenota(fila, posto) {
    prenotazione.style.display = "block";
    let idx = (posto - 1) + (fila - 1) * postiPerFila;
    txtnfila.value = fila;
    txtnumero.value = posto;
}

function pulsanteModificaPrenotazione(fila, posto) {

}


function salva() {

}



function carica() {

}
creaCinema();

generaPosti();
prenota();
