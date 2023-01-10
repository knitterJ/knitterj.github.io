
const relaBlockFlag = document.querySelectorAll('.languages img');
let attr = document.querySelectorAll('a[language]');
let languages = document.querySelector("p.rela-block.caps.side-header.languages-top-bar");
let unis = document.querySelector("p.rela-block.caps.side-header.languages");

// let profile = document.querySelector("rela-block.caps.greyed.profile");
// let longmargin = document.querySelector("p.rela-block.caps.side-header.languages-top-bar");
// let profiledescr = document.querySelector("long-margin");


fetch('localisation/translations.json')
  .then(response => response.json())
  .then(data => {
    let localisationData = data;

    // default values
    languages.innerHTML = localisationData.en.sidebar.languages;
    
    relaBlockFlag.forEach(flag => {
        // Add a click event listener to each flag
        flag.addEventListener('click', function() {
        // Get the active flag from the document.querySelector
        // ficzer pozwalający na zmianę flagi w zależności od tej która została kliknięta
        document.querySelector('.active').classList.remove("active");
        flag.classList.add("active");

        //podepnij pod konkretny obrazek (flag) i kliknięcie, konkretne zachowanie
        // zrobimy to na podstawie atrybutu <img language="en">
        let attr = document.querySelector('.active').getAttribute("language");
        languages.textContent = localisationData[attr].sidebar.languages;
        //tutaj dodawaj dalszy content typu
        });
    });
});