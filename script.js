  function changeMessage () {
      // Change the text inside the div
      box.textContent = " You clicked! I have been changed by JavaScript!";

      // Change the background color using inline CSS
      box.style.backgroundColor = "lightgreen";

      //Add a CSS class (defined in style.css)
      box.classList.add("success-box");
  }   
