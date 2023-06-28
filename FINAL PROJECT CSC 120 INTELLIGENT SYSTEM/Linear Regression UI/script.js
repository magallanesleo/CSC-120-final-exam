// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent form submission and page refresh
    
    // Get form values
    var gender = document.getElementById("gender").value;
    var race = document.getElementById("race").value;
    var parentEducation = document.getElementById("parent-education").value;
    var lunch = document.getElementById("lunch").value;
    var testPrep = document.getElementById("test-prep").value;
    var mathScore = parseInt(document.getElementById("math-score").value);
    var readingScore = parseInt(document.getElementById("reading-score").value);
    var writingScore = parseInt(document.getElementById("writing-score").value);
    
    // Perform prediction calculations (example calculation)
    var averageScore = (mathScore + readingScore + writingScore) / 3;
    
    // Display prediction result
    var predictionResult = document.getElementById("prediction-result");
    predictionResult.textContent = "Average Score: " + averageScore.toFixed(2);
  }
  
  // Attach form submission event listener
  var predictionForm = document.getElementById("prediction-form");
  predictionForm.addEventListener("submit", submitForm);
  