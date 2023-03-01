const form = document.querySelector("form");
const startButton = document.querySelector("button");

function handleFormSubmit(event) {
  event.preventDefault();

  const checkboxes = form.querySelectorAll("input[type=checkbox]:checked");

  const selectedOperations = [];
  checkboxes.forEach((checkbox) => {
    selectedOperations.push(checkbox.value);
  });

  window.location.href = `./pages/practice.html?operations=${selectedOperations.join(
    ","
  )}`;
}

startButton.addEventListener("click", handleFormSubmit);
