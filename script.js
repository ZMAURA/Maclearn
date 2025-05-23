const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

let months = ["January", "February", "March", "April", "May","June","July","August","September","October","November", "December"];

const monthText = document.getElementById("month");
monthText.innerHTML = months[currentMonth];