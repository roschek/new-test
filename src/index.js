import "./css/style.css"
import Netmask from "inputmask";
//маска телефона
const telMask = document.querySelectorAll('.phone')
telMask.forEach(elem => {
  Netmask({"mask": "+7 (999) 999-99-99"}).mask(elem);
})
//бургер и отркрытие меню
const burger = document.querySelector('.burger')
const burgerMenu = document.querySelector('.header__nav-list')
burger.addEventListener('click',()=>{
  burger.classList.toggle('burger_active')
  burgerMenu.classList.toggle('active')
})

//переключение формы
const openForm = document.querySelector('.header__button')
const closeForm = document.querySelector('.popup__close')
const inputs = document.querySelectorAll('input')
const handleFrom = () => {
  document.querySelector('.popup').classList.toggle('active')
  clearForm()
}
openForm.addEventListener('click', handleFrom)
closeForm.addEventListener('click', handleFrom)

const clearForm = ()=>{
  inputs.forEach(elem=>{elem.value = ''})
}
//валидация

const mainForm = document.forms.main
const popupForm = document.forms.popupForm
const errors = {
  empty: '!Это обязательное поле',
 }
const isValid = (input)=>{
  input.setCustomValidity('')
  if (input.value.trim().length === 0) {
    input.setCustomValidity(errors.empty);
    input.nextElementSibling.textContent = input.validationMessage
    input.style.border = '1px solid red'
  }
  else{
    input.nextElementSibling.textContent = ''
    input.style.border = '1px solid black'
  }
}
 mainForm.addEventListener('submit',(evt)=>{
   evt.preventDefault()
   const formInputs = mainForm.querySelectorAll('.form__input')
   formInputs.forEach(elt=>{
     isValid(elt)
   })
})

popupForm.addEventListener('submit',(evt)=>{
  evt.preventDefault()
  const formInputs = popupForm.querySelectorAll('.form__input')
  formInputs.forEach(elt=>{
    isValid(elt)
  })
})

const allInputs = document.querySelectorAll('.form__input')

allInputs.forEach((elt)=>{
  elt.addEventListener('keydown',()=>{
    elt.style.border = "1px solid black"
    elt.nextElementSibling.textContent = ''
  })
})
