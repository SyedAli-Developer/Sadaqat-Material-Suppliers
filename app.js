const language1 = document.getElementById("language-btn")
const language2 = document.getElementById("language-item")
const brandName = document.getElementById("BrandName")
language1.innerHTML = "ENG"
language2.innerHTML = "ENG"

function changeLanguage() {

    if(language1.innerHTML == "ENG" && language2.innerHTML == "ENG")
    {
        language1.innerHTML = "Urdu"
        language2.innerHTML = "Urdu"
        
        brandName.src = "./assets/images/Brand-Name-ENG.png";
        
    }
    else{
        language1.innerHTML = "ENG"
        language2.innerHTML = "ENG"
        brandName.src = "./assets/images/Brand-Name.png";
        
    }
}
language1.addEventListener('click' , changeLanguage)
language2.addEventListener('click' , changeLanguage)