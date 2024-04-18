var code;

function createCaptcha() {
  //clear the contents of captcha div first
  document.getElementById('captcha').innerHTML = "";
  var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captchaCanvas";
  canv.width = 100;
  canv.height = 50;
  var ctx = canv[5].getContext("2d");
  console.log(object);
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}

function validateCaptcha() {
  event.preventDefault();
  var captchaInput = document.getElementById("captchaTextBox").value;
  var submitBtn = document.getElementById("submitBtn");

  if (captchaInput == code) {
    alert("Valid Captcha");
    submitBtn.classList.add("valid"); // Add class to apply valid style
    submitBtn.disabled = true; // Disable the button after validation
    // Animate the valid state
    submitBtn.style.animation = "validAnimation 1s ease-in-out";
    setTimeout(function() {
      submitBtn.style.animation = ""; // Reset animation after it finishes
    }, 1000);
  } else {
    alert("Invalid Captcha. try Again");
    createCaptcha();
  }

  var code;

function createCaptcha() {
  //clear the contents of captcha div first
  document.getElementById('captcha').innerHTML = "";
  var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captchaCanvas";
  canv.width = 100;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}

function validateCaptcha() {
  event.preventDefault();
  var captchaInput = document.getElementById("captchaTextBox").value;
  var submitBtn = document.getElementById("submitBtn");

  if (captchaInput == code) {
    alert("Valid Captcha");
    submitBtn.classList.add("valid"); // Add class to apply valid style
    submitBtn.disabled = true; // Disable the button after validation
    // Animate the valid state
    submitBtn.style.animation = "validAnimation 1s ease-in-out";
    setTimeout(function() {
      submitBtn.style.animation = ""; // Reset animation after it finishes
    }, 1000);
  } else {
    alert("Invalid Captcha. try Again");
    createCaptcha();
  }
}

// Call the createCaptcha function on page load
