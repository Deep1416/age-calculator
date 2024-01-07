let date = document.getElementById("date-one");
let button = document.getElementById("submit");
let number =  document.getElementById("number");


button.addEventListener("click" ,() =>{
let d = new Date(date.value);
let birth = d.getTime();
let currentdate = new Date();
let countyear = currentdate.getTime();
let yeardifference =  countyear - birth;
let mile = 365 * 24 * 60 * 60 * 1000;
let year = parseInt(yeardifference / mile);
number.innerText = `${year}`;
});