/*
//Co je za úkol v tomto projektu:

/*1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.*/

//!!! STARÝ KÓD !!!

schovajDiv();
let recepty = document.querySelector('.recepty');
let i = 0;
receptyItems.forEach(nacitajZoznam);
ukazRecept();

function nacitajZoznam() {
  let recept = document.createElement('div');
  recept.className = 'recept';
  recept.setAttribute('dataI', i);
  recepty.appendChild(recept);

  recept.addEventListener('click', ukazRecept);

  let receptObrazek = document.createElement('div');
  receptObrazek.className = 'recept-obrazek';
  receptObrazek.setAttribute('dataI', i);
  recept.appendChild(receptObrazek);

  let obrazokReceptu = document.createElement('img');
  obrazokReceptu.src = receptyItems[i].img;
  obrazokReceptu.setAttribute('dataI', i);
  receptObrazek.appendChild(obrazokReceptu);

  let receptInfo = document.createElement('div');
  receptInfo.className = 'recept-info';
  receptInfo.setAttribute('dataI', i);
  recept.appendChild(receptInfo);

  let menoReceptu = document.createElement('h3');
  menoReceptu.innerHTML = receptyItems[i].nadpis;
  menoReceptu.setAttribute('dataI', i);
  receptInfo.appendChild(menoReceptu);

  i++;

};

function schovajDiv() {
  document.getElementById('recept-detail').style.display = 'none';
};

/*2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.*/


// 3) Doplň filtrovanání receptů podle kategorie.

// 4) Doplň řazení receptů podle hodnocení.

/*5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis. */

function ukazRecept(vybranyRecept) {
  if (vybranyRecept === undefined) {
    return
  };
  let index = vybranyRecept.target.getAttribute('dataI');
  document.getElementById('recept-detail').style.display = 'block';
  console.log('Klik na recept');

  document.querySelector('#recept-foto').src = receptyItems[index].img;
  document.querySelector('#recept-kategorie').innerHTML = receptyItems[index].kategorie;
  document.querySelector('#recept-hodnoceni').innerHTML = receptyItems[index].hodnoceni;
  document.querySelector('#recept-nazev').innerHTML = receptyItems[index].nadpis;
  document.querySelector('#recept-popis').innerHTML = receptyItems[index].popis;
};

// 6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.