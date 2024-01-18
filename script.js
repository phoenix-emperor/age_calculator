let dateInput = document.getElementById("dateInput");
let year = document.getElementById("year");
let month = document.getElementById("month");
let days = document.getElementById("days");

function calculateAge() {
  if(dateInput.value === "") {
    alert("Please select a Birth Date");
  } else {
      let birthDate = new Date(dateInput.value);
      let currentDate = new Date();

      let newDate = new Date(currentDate - birthDate);

      let y = newDate.getFullYear() - 1970;
      let m = newDate.getMonth();
      let d = newDate.getDate()-1;

      year.textContent = `${y}`;
      month.textContent = `${m}`;
      days.textContent = `${d}`;
  }
}