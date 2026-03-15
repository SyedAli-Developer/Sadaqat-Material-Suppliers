const language = document.getElementById("language-btn")
const brandName = document.getElementById("BrandName")
language.textContent = "ENG"
function changeLanguage() {

    if(language.textContent == "ENG")
    {
        language.innerHTML = "Urdu"
        brandName.src = "./assets/images/Brand-Name-ENG.png";
    }else{
        language.innerHTML = "ENG"
        brandName.src = "./assets/images/Brand-Name.png";
    }
}
language.addEventListener('click' , changeLanguage)