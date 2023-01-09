
const relaBlockPolandFlag = document.querySelectorAll('a.rela-block.flag.poland');
let attr = document.querySelectorAll('a[language]');
let tytul = document.querySelector("p.rela-block.caps.side-header.languages");



fetch('localisation/translations.json')
  .then(response => response.json())
  .then(data => {
    let localisationData = data;

    // default values
    tytul.innerHTML = localisationData.en.title;


    relaBlockPolandFlag.forEach(flag => {

        // Add a click event listener to each flag
        flag.addEventListener('click', function() {
        // Get the active flag from the document.querySelector
        // ficzer pozwalający na zmianę flagi w zależności od tej która została kliknięta
        document.querySelector('.active').classList.remove("active");
        flag.classList.add("active");

        //podepnij pod konkretny obrazek (flag) i kliknięcie, konkretne zachowanie
        // zrobimy to na podstawie atrybutu <img language="en">
        let attr = document.querySelector('.active').getAttribute("language");
        tytul.textContent = localisationData[attr].title;
        //tutaj dodawaj dalszy content typu
        });
    });
});