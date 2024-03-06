const relaBlockFlag = document.querySelectorAll('.languages img');
let attr = document.querySelectorAll('a[language]');

// const intro = document.querySelector("p.rela-block.intro");
const expertise = document.querySelector("p.rela-block.caps.side-header.expertise-top-bar");
const education = document.querySelector("p.rela-block.caps.side-header.education-top-bar");
const put = document.querySelector("p.rela-block.list-thing.put");
const lpa = document.querySelector("p.rela-block.list-thing.lpa");
const gdansk = document.querySelector("p.rela-block.list-thing.gdansk");
const languages = document.querySelector("p.rela-block.caps.side-header.languages-top-bar");
const interests = document.querySelector("p.rela-block.caps.side-header.interests-top-bar");
const teaching = document.querySelector("p.rela-block.list-thing.teaching");
const economy = document.querySelector("p.rela-block.list-thing.economy");

const title = document.querySelector("h2.rela-block.caps.title");
const profile = document.querySelector("p.long-margin");
const accpos = document.querySelector("p.light-acc");
const accdescr = document.querySelector("p.justified-acc");
const atospos = document.querySelector("p.light-atos");
const atosdescr = document.querySelector("p.justified-atos");
const laureatepos = document.querySelector("p.light-laureate");
const laureatedescr = document.querySelector("p.justified-laureate");

function insertTeachingText(text) {
  text = text.replace(/\\n/g, '<br>');
  document.getElementById("teaching").innerHTML = text;
}

let unis = document.querySelector("p.rela-block.caps.side-header.languages");

// let profile = document.querySelector("rela-block.caps.greyed.profile");
// let longmargin = document.querySelector("p.rela-block.caps.side-header.languages-top-bar");
// let profiledescr = document.querySelector("long-margin");



fetch('localisation/translations.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const localisationData = data;


    
    // default values
    // intro.innerHTML = localisationData.en.sidebar.intro;
    languages.innerHTML = localisationData.en.sidebar.languages;
    expertise.innerHTML = localisationData.en.sidebar.expertise;
    education.innerHTML = localisationData.en.sidebar.education;
    put.innerHTML = localisationData.en.sidebar.put;
    lpa.innerHTML = localisationData.en.sidebar.lpa;
    gdansk.innerHTML = localisationData.en.sidebar.gdansk;
    interests.innerHTML = localisationData.en.sidebar.interests;
    teaching.innerHTML = localisationData.en.sidebar.teaching;
    economy.innerHTML = localisationData.en.sidebar.economy;

    title.innerHTML = localisationData.en.main.title;
    profile.innerHTML = localisationData.en.main.profile;
    accpos.innerHTML = localisationData.en.main.accpos;
    accdescr.innerHTML = localisationData.en.main.accdescr;
    atospos.innerHTML = localisationData.en.main.atospos;
    atosdescr.innerHTML = localisationData.en.main.atosdescr;
    laureatepos.innerHTML = localisationData.en.main.laureatepos;
    laureatedescr.innerHTML = localisationData.en.main.laureatedescr;


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
        // intro.innerHTML = localisationData[attr].sidebar.intro;
        languages.innerHTML = localisationData[attr].sidebar.languages;
        expertise.innerHTML = localisationData[attr].sidebar.expertise;
        education.innerHTML = localisationData[attr].sidebar.education;
        put.innerHTML = localisationData[attr].sidebar.put;
        lpa.innerHTML = localisationData[attr].sidebar.lpa;
        gdansk.innerHTML = localisationData[attr].sidebar.gdansk;
        interests.innerHTML = localisationData[attr].sidebar.interests;
        teaching.innerHTML = localisationData[attr].sidebar.teaching;
        economy.innerHTML = localisationData[attr].sidebar.economy;
        //tutaj dodawaj dalszy content typu
        title.innerHTML = localisationData[attr].main.title;
        profile.innerHTML = localisationData[attr].main.profile;
        accpos.innerHTML = localisationData[attr].main.accpos;
        accdescr.innerHTML = localisationData[attr].main.accdescr;
        atospos.innerHTML = localisationData[attr].main.atospos;
        atosdescr.innerHTML = localisationData[attr].main.atosdescr;
        laureatepos.innerHTML = localisationData[attr].main.laureatepos;
        laureatedescr.innerHTML = localisationData[attr].main.laureatedescr;
        });
    });
})
.catch(error => console.error(error));