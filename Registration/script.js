let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
const email = id("email"),
  password = id("password"),
  firstName = id("firstName"),
  lastName = id("lastName"),
  errorMsg = classes("error"),
  failureIcon = classes("failure-icon");

const validateEmail = (email) => {
  return Boolean(
    String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  );
};
// console.log(validateEmail("afaf"));
// console.log(validateEmail("afaf@daa.com"));
// console.log(validateEmail("afaf @daa.com"));
// console.log(validateEmail("afaf @daa/com"));

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

let emailChecker = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message[0];
    id.style.border = "2px solid red";
    failureIcon[serial].style.opacity = "1";
    return;
  } else if (!validateEmail(id.value)) {
    errorMsg[serial].innerHTML = message[1];
    id.style.border = "2px solid red";
    failureIcon[serial].style.opacity = "1";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid #eee";
    failureIcon[serial].style.opacity = "0";
  }
};
document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  engine(firstName, 0, "First Name cannot be blank");
  engine(lastName, 1, "Last Name cannot be blank");
  emailChecker(email, 2, ["Email cannot be blank", "Email is not valid"]);
  engine(password, 3, "Password cannot be blank");
});
