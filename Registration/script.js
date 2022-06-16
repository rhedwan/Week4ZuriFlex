let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
const email = id("email"),
  password = id("password"),
  firstName = id("firstName"),
  lastName = id("lastName"),
  errorMsg = classes("error"),
  failureIcon = classes("failure-icon");

console.log(email, password, firstName, lastName, errorMsg);

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
    failureIcon[serial].style.opacity = "1";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid #eee";
    failureIcon[serial].style.opacity = "0";
  }
};
// id("form");
document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  engine(firstName, 0, "First Name cannot be blank");
  engine(lastName, 1, "Last Name cannot be blank");
  engine(email, 2, "Email cannot be blank");
  engine(password, 3, "Password cannot be blank");
});
