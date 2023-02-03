const relaBlockFlag = document.querySelectorAll('.languages img');
let attr = document.querySelectorAll('a[language]');

const expertise = document.querySelector("p.rela-block.caps.side-header.expertise-top-bar");
const education = document.querySelector("p.rela-block.caps.side-header.education-top-bar");
const languages = document.querySelector("p.rela-block.caps.side-header.languages-top-bar");
const interests = document.querySelector("p.rela-block.caps.side-header.interests-top-bar");
const teaching = document.querySelector("p.rela-block.list-thing.teaching");
const economy = document.querySelector("p.rela-block.list-thing.economy");


function insertTeachingText(text) {
  text = text.replace(/\n/g, '<br>');
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
    languages.innerHTML = localisationData.en.sidebar.languages;
    expertise.innerHTML = localisationData.en.sidebar.expertise;
    education.innerHTML = localisationData.en.sidebar.education;
    interests.innerHTML = localisationData.en.sidebar.interests;
    teaching.innerHTML = localisationData.en.sidebar.teaching;
    economy.innerHTML = localisationData.en.sidebar.economy;



    
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
        expertise.textContent = localisationData[attr].sidebar.expertise;
        education.textContent = localisationData[attr].sidebar.education;
        interests.textContent = localisationData[attr].sidebar.interests;
        teaching.textContent = localisationData[attr].sidebar.teaching;
        economy.textContent = localisationData[attr].sidebar.economy;
        //tutaj dodawaj dalszy content typu
        });
    });
})
.catch(error => console.error(error));