"use strict";
let URLJson = "./assets/Abbigliamento.json";
// let card = document.querySelector("#container") as HTMLElement;
// console.log(card);
// let promise = fetch(URLJson).then((response) => response.json());
class WebFetch {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.diffSaldo = 0;
        this.card = document.querySelector("#container");
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    renderHtml() {
        this.card.innerHTML += `
            <div class="card">
            <img src="./assets/img/images.jpeg" alt="">
            <h3>ID: ${this.id} ${this.capo}</h3>
            <ul>
                <li>Codice di produzione: ${this.codprod}</li>
                <li>Tipo di collezione: ${this.collezione}</li>
                <li>Quantitá: ${this.quantita}</li>
                <li>${this.colore}</li>
                <li>Prezzo IVA esclusa: ${this.prezzoivaesclusa}</li>
                <li>Prezzo IVA inclusa: ${this.prezzoivainclusa}</li>
                <li>Disponibilitá: ${this.disponibile}</li>
                <li>Saldo applicabile: ${this.saldo}</li>
            </ul>
            <div class="show-costo"></div>
          
            </div>
        </div>
    `;
    }
    getSaldoAcquisto() {
        let calcDiffSaldo = (this.prezzoivainclusa * this.saldo) / 100;
        this.diffSaldo = calcDiffSaldo;
        console.log(this.diffSaldo);
    }
    getAcquistoCapo() {
        // this.getSaldoAcquisto();
        console.log("Si é attivato il metodo getAcquistoCapos");
        let costoTotale;
        costoTotale = this.prezzoivainclusa - this.diffSaldo;
        console.log(costoTotale);
        let costoTotaleHtml = document.querySelector(".show-costo");
        costoTotaleHtml.innerHTML = `<p>Costo totale: ${costoTotale}</p>`;
    }
}
// console.log(promise);
let promise = fetch(URLJson).then((response) => response.json());
promise.then((responseJson) => {
    console.log(responseJson);
    responseJson.map((element) => {
        let elementFetch = new WebFetch(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
        elementFetch.renderHtml();
        elementFetch.getSaldoAcquisto();
        elementFetch.getAcquistoCapo();
    });
});
