document.addEventListener("DOMContentLoaded", function () {
  const decrementButton = document.getElementById("decrement");
  const incrementButton = document.getElementById("increment");
  const clearButton = document.getElementById("clear");
  const middleDiv = document.getElementById("middle");
  const errorMessage = document.getElementById("error-message");

  let count = 0;

  // Function to update UI based on count
  function updateUI() {
    middleDiv.innerHTML = count;

    // Show/hide clear button based on count
    if (count === 0) {
      clearButton.style.display = "none";
    } else {
      clearButton.style.display = "block";
    }

    // Show/hide decrement button based on count
    // if (count > 0) {
    //   decrementButton.style.display = "inline-block";
    // } else {
    //   decrementButton.style.display = "none";
    // }
  }

  // Initial UI update
  updateUI();

  // Event listener for increment button
  incrementButton.addEventListener("click", function () {
    count++;
    updateUI();
  });

  // Event listener for decrement button
  decrementButton.addEventListener("click", function () {
    if (count > 0) {
      count--;
      updateUI();
    } else {
      // Show error message
      errorMessage.style.display = "block";
      setTimeout(function () {
        errorMessage.style.display = "none";
      }, 5000); // Hide error message after 2 seconds
    }
  });

  // Event listener for clear button
  clearButton.addEventListener("click", function () {
    count = 0;
    updateUI();
  });
});
