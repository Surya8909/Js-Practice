const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height1 = parseInt(document.querySelector("#height1").value);
  const weight1 = parseInt(document.querySelector("#weight1").value);
  const results = document.querySelector("#results");

  if (isNaN(height1) || height1 <= 0) {
    results.innerHTML = `Please provide a valid height`;
  } else if (isNaN(weight1) || weight1 <= 0) {
    results.innerHTML = `Please provide a valid weight`;
  } else {
    const bmi = (weight1 / ((height1 / 100) ** 2)).toFixed(1);

    if (bmi <= 18.5) {
      results.innerHTML = `Your BMI is ${bmi} and you are underweight`;
    } else if (bmi > 18.5 && bmi <= 24.9) {
      results.innerHTML = `Your BMI is ${bmi} and you are normal`;
    } else {
      results.innerHTML = `Your BMI is ${bmi} and you are overweight`;
    }
  }
});