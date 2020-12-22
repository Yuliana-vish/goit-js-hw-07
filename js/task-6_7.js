//Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
//Для добавления стилей, используй CSS - классы valid и invalid.
/*
#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}

*/
const input = document.querySelector("#validation-input");
input.addEventListener("blur", validation);

function validation(text) {
  const value = text.currentTarget.value;
  if (value.length === 6) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
