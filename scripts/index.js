// Get references to the form and button elements in the HTML document
const form = document.querySelector("form");
const startButton = document.querySelector("button");

// Define a function to handle the form submission event
function handleFormSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get references to the selected checkboxes
  const checkboxes = form.querySelectorAll("input[type=checkbox]:checked");

  // Build an array of selected operations
  const selectedOperations = [];
  checkboxes.forEach((checkbox) => {
    selectedOperations.push(checkbox.value);
  });

  // Redirect the user to the practice page, passing the selected operations as a query parameter
  window.location.href = `./pages/practice.html?operations=${selectedOperations.join(
    ","
  )}`;
}

// Add a click event listener to the start button
startButton.addEventListener("click", handleFormSubmit);
