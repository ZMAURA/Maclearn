const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
//adding + 1 because the months index by 0 so we add to make sure its the next.

let months = ["January", "February", "March", "April", "May","June","July","August","September","October","November", "December"];

const monthText = document.getElementById("month");
const daysText = document.getElementById("day");
const daysInMonthText = document.getElementById("daysInMonth");

monthText.innerHTML = months[currentMonth];
daysText.innerHTML = currentDay;
daysInMonthText.innerHTML = daysInMonth;
