const FullName = document.getElementById("FullName");
const email = document.getElementById("email");
const password = document.getElementById("password");

const btnSignup = document.getElementById("login");

function signUp() {
  // when mouse click "signup" button
  const full_name = FullName.value;
  const e_mail = email.value;
  const pass_word = password.value;

  // if the fields are empty
  if (!full_name || !e_mail || !pass_word) {
    return alert("you need to fill up all the forms.");
  }
  //set user input into JSON
  let user_data = {
    fullname: full_name,
    email: e_mail,
    password: pass_word,
  };
  //convert to string
  let user_data_str = JSON.stringify(user_data);

  //get to localstorage if there is existing user ||or make empty array[]
  let clientsArr = JSON.parse(localStorage.getItem("users")) || [];

  // search the list if
  const userExists = clientsArr.find(
    (user) => JSON.stringify(user) === user_data_str
  );
  if (userExists) {
    return alert("User already Exists");
  }

  //push new user to array
  clientsArr.push(user_data);

  //save to localStorage
  localStorage.setItem("users", JSON.stringify(clientsArr));
  return alert("Account Created!");
}
// attach listener
btnSignup.addEventListener("click", signUp);

function save() {
  localStorage.setItem("fullname", FullName.value);
}

// lanage section


let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let sign = document.getElementById("sign");
let forget = document.getElementById("forget");
let need = document.getElementById("need");
let title = document.getElementById("title");
let remmberme = document.getElementById("remmberme");
let so = document.getElementById("so");
let login = document.getElementById("login");

arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang","arabic");
};

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
};

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};
function setLanugage(getLanuage){
if(getLanuage === "arabic"){
  sign.innerHTML = " تسجيل الدخول";
  forget.innerHTML = "هل نسيت كلمة السر؟";
  need.innerHTML="تحتاج مساعدة؟";
  title.innerHTML = "الرجاء تسجيل الدخول للمتابعة";
  so.innerHTML = " :تسجيل الدخول باستخدام ";
  login.value = " تسجيل الدخول";

}else if(getLanuage ==="english"){
  sign.innerHTML = "signup";
  forget.innerHTML = "forget password?";
   need.innerHTML="need help? ";
    title.innerHTML = " please login to proceed";
    so.innerHTML = " login using soical media";
    login.value = " login";

}


}

