const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("pnumber");
const feedback = document.getElementById("feedback");
form.addEventListener("submit", (event)=>{
event.preventDefault();
if(fname.value.trim()===""){
    feedback.textContent = "Please enter your first name!";
      feedback.style.color = "red";
    return;
}
if(lname.value.trim()===""){
    feedback.textContent = "Please enter your last name!";
      feedback.style.color = "red";
    return;
}
if(email.value.trim()===""){
    feedback.textContent = "Please enter your email address!"
      feedback.style.color = "red";
    return;
}
if(phone.value.trim()===""){
    feedback.textContent = "please enter your phone number";
      feedback.style.color = "red";
    return;
}
feedback.textContent = "Form submitted successfully!"
  feedback.style.color = "green";
});