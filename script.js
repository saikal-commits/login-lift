const form = document.querySelector(".form");
const inputEmail = document.querySelector(".email");
const inputPass = document.querySelector(".pass");
const addBtn = document.querySelector(".btn");
const info = document.querySelector("h4");

let count = 4;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    inputEmail.value === "motionweb@gmail.com" &&
    inputPass.value === "12345"
  ) {
    info.innerHTML = "доступ открыт!";
    info.style.color = "green";
    inputEmail.style.border = "none";
    inputPass.style.border = "none";
  } else if (inputEmail.value === "" && inputPass.value === "") {
    info.innerHTML = "заполните пустые поля!";
    info.style.color = "red";
    inputEmail.style.border = "2px solid red";
    inputPass.style.border = "2px solid red";
  } else if (inputEmail.value !== "" && inputPass.value === "") {
    info.innerHTML = "заполните пустое поле в password!";
    info.style.color = "red";
    inputPass.style.border = "2px solid red";
  } else if (inputEmail.value === "" && inputPass.value !== "") {
    info.innerHTML = "заполните пустое поле в login!";
    info.style.color = "red";
    inputEmail.style.border = "2px solid red";
  } else {
    count--;
    if (count === 3) {
      info.innerHTML = `у вас остались ${count} попытки!`;
      info.style.color = "red";
    }
    if (count === 2) {
      info.innerHTML = `у вас остались ${count} попытки!`;
      info.style.color = "red";
    }
    if (count === 1) {
      info.innerHTML = `у вас остались ${count} попытки!`;
      info.style.color = "red";
    }
    if (count === 0) {
      info.innerHTML = "доступ закрыт!";
      addBtn.setAttribute("disabled", "");
    }
    info.style.color = "red";
    inputEmail.style.border = "2px solid red";
    inputPass.style.border = "2px solid red";
  }
  //   inputEmail.value = "";
  //   inputPass.value = "";
});
