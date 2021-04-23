let blockPopup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_profession');

function togglePopup(){
blockPopup.classList.toggle('popup_open');
nameInput.value = nameFromePage.textContent;
jobInput.value = jobFromPage.textContent;
}

function closePopup(){
    blockPopup.classList.remove("popup_open")
}
function savePopup(){
    Event.preventDefault();
    nameInput.textContent = nameInput.value;
    jobInput.textContent = jobInput.value;
    closePopup()
}

blockPopup.addEventListener('submit', togglePopup);
closeBlockPopup.addEventListener('click', togglePopup);
closePopup.addEventListener('click',togglePopup);
