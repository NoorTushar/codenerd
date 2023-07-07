// JavaScript Codes -----------------------

// AOS

AOS.init();

//Form Validation Codes Start ---------
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".checkout_validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
//Form Validation Codes End ---------

// ==== pop up

const popup = document.querySelector(".popup-section");
const close = document.querySelector(".close");

window.onload = function () {
  setTimeout(function () {
    popup.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling
    // add more code here if needed
  }, 6000);
};

close.addEventListener("click", () => {
  popup.style.display = "none";
  document.body.style.overflow = "auto"; // Restore scrolling
});

// pop up ends
