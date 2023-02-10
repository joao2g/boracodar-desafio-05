const buttons = document.querySelectorAll("button");
  const display = document.querySelector("#conta");
  const resultDisplay = document.querySelector("#resposta p");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const value = e.target.innerText;

      if (value === "C") {
        display.innerText = "";
        resultDisplay.innerText = "";
      } else if (value === "=") {
        resultDisplay.innerText = eval(display.innerText);
      } else {
        display.innerText += value;
      }
    });
  });