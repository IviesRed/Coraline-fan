function goToSite() {
  alert("Hey, I have a few questions before you become a fan!");
  let name = prompt("What is your name?");
  alert("Ah, hello, " + name + "!");
  let response = prompt("Have you read the book as well? (Answer Y or N)");
  response.toLocaleUpperCase();
  if (response === "Y") {
    alert("Wonderful!");
  } else if (response == "N") {
    alert(
      "I recommend the books. They were written by Neil Gaiman, a fantastic writer."
    );
  } else {
    alert("I'm sorry, you've entered an invalid response.");
  }
  let email = prompt("Enter your email here please, " + name + ".");
  alert("Thank you, you should recieve an email from us soon!");
}
let fan = document.querySelector("Button");
fan.addEventListener("click", goToSite);
