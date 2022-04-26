/*
//Co je za úkol v tomto projektu:

/*1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.*/

let recepty = document.querySelector('.recepty');
let receptyHTML = [];


receptyItems.forEach((elm) => {
  nacitajZoznam(elm);
});

function nacitajZoznam() {
  let recept = document.createElement('div');
  recept.className = 'recept';
  recept.innerHTML = `
  <div class="recept-obrazek">
    <img src="${elm.img}" alt="Obrazek">
  </div>

  <div class="recept-info">
    <h3>${elm.nadpis}</h3>
  </div>`;
  recept.addEventListener('click', () => {
  ukazRecept(elm);
});

  receptyHTML.push({
  recept,
  nadpis: elm.nadpis,
  hodnoceni: elm.hodnoceni,
  kategorie: elm.kategorie
});

};

/*2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.*/


// 3) Doplň filtrovanání receptů podle kategorie.

// 4) Doplň řazení receptů podle hodnocení.

/*5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis. */

function ukazRecept(elm = receptyItems[0]) {
  document.querySelector('#recept-foto').src = elm.img;
  document.querySelector('#recept-kategorie').innerHTML = elm.kategorie;
  document.querySelector('#recept-hodnoceni').innerHTML = elm.hodnoceni;
  document.querySelector('#recept-nazev').innerHTML = elm.nadpis;
  document.querySelector('#recept-popis').innerHTML = elm.popis;
};

// 6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.