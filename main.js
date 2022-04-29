
//Co je za úkol v tomto projektu:

let receptFoto = document.querySelector('#recept-foto');
let receptKategorie = document.querySelector('#recept-kategorie');
let receptHodnoceni = document.querySelector('#recept-hodnoceni');
let receptNazev = document.querySelector('#recept-nazev');
let receptPopis = document.querySelector('#recept-popis');
let kategorie = new Set();
let receptyInHTML = document.querySelector('#recepty');
let kategorieInHTML = document.querySelector('#kategorie');
let hladatInHTML = document.querySelector('#hledat')
let radenieInHtml = document.querySelector('#razeni');
let inputy = [kategorieInHTML, hladatInHTML, radenieInHtml];

function upravPole(recepty = [...receptyItems]) {
  recepty = filtruj(recepty, kategorieInHTML.value);
  recepty = hladaj(recepty, hladatInHTML.value);
  recepty = zorad(recepty, radenieInHtml.value);

  receptyInHTML.innerHTML = '';
  recepty.forEach((elm) => {
    nacitajZoznam(elm);
    kategorie.add(elm.kategorie);
  })

  ukazRecept();
};

upravPole();

function nastavKategorie() {
  kategorie.forEach((jednaKategoria) => {
    let option = document.createElement('option');
    option.innerText = jednaKategoria;
    kategorieInHTML.append(option);
  });
};

nastavKategorie();

function nastavInputy() {
  inputy.forEach((input) => {
    input.oninput = () => {
      upravPole();
    };
  });
};

nastavInputy();
/*1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.*/

function nacitajZoznam(elm) {
  let receptDiv = document.createElement('div');
  receptDiv.classList.add('recept');

  receptDiv.innerHTML = `
  <div class="recept-obrazek">
    <img src="${elm.img}" alt="Obrazek" />
  </div>
  <div class="recept-info">
    <h3>${elm.nadpis}</h3>
  </div>`;

  receptDiv.onclick = () => {
  ukazRecept(elm.id);
}

  receptyInHTML.appendChild(receptDiv);

};

/*2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.*/

function hladaj(receptyZoznam, vyraz) {
  if (!receptyZoznam || !vyraz) return receptyZoznam;

  vyraz = vyraz.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return receptyZoznam.filter((recept) => {
      return recept.nadpis
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .match(new RegExp(vyraz, 'i'))
    });
};


// 3) Doplň filtrovanání receptů podle kategorie.

function filtruj(receptyZoznam, vybrane) {
  if (!receptyZoznam || !vybrane) return receptyZoznam;

  return receptyZoznam.filter((recept) => {
    return recept.kategorie === vybrane;
  });
};

// 4) Doplň řazení receptů podle hodnocení.

function zorad(receptyZoznam, vybrane) {
  if (!receptyZoznam || !vybrane) return receptyZoznam;

  return receptyZoznam.sort((a, b) => {
    if (a.hodnoceni < b.hodnoceni) {
      //[Podmienka] ? [What if true] : [what if false]
      return vybrane == 1 ? 1 : -1
    } else if (a.hodnoceni > b.hodnoceni) {
      return vybrane == 1 ? -1 : 1
    };
    return 0;
  });
};

/*5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis. */

function ukazRecept(id = 0) {
  let elm = receptyItems.find((elm) => {
    return elm.id == id;
  });
  console.log('Klik na recept');
  if (elm) {
    receptFoto.src = elm.img;
    receptKategorie.innerText = elm.kategorie;
    receptHodnoceni.innerText = elm.hodnoceni;
    receptNazev.innerText = elm.nadpis;
    receptPopis.innerText = elm.popis;
  }
};

// 6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.