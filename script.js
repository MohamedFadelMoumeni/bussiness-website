const sites = document.querySelectorAll('#sites');
const partenaires = document.querySelectorAll('#partenaires');
const affiliation = document.querySelectorAll('#affiliation');
const tous = document.getElementById('tous');
const partenairesElement = document.getElementById('partenairesElement');
const affiliationElement = document.getElementById('affiliationElement');
const sitesElement = document.getElementById('sitesElement');
const backToTop = document.querySelector('.back-to-top');
//Show & Hide Cards
function showHideCards(arrayToShow, arrayToHide = []) {
    arrayToShow.forEach(element => {
        element.hidden = false
    });
    arrayToHide.forEach(element => {
        element.hidden = true
    })
};

//Event Listener
tous.addEventListener('click', () => {
    showHideCards([].concat(...sites, ...partenaires, ...affiliation));
});
partenairesElement.addEventListener('click', () => {
    showHideCards([].concat(...partenaires), [].concat(...sites, ...affiliation));
});
affiliationElement.addEventListener('click', () => {
    showHideCards([].concat(...affiliation), [].concat(...sites, ...partenaires));
});
sitesElement.addEventListener('click', () => {
    showHideCards([].concat(...sites), [].concat(...affiliation, ...partenaires));
});
backToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTop.classList.remove('hidden');
    } else {
        backToTop.classList.add('hidden');
    }
});

