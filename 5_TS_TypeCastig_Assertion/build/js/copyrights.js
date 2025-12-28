"use strict";
// const year = document.getElementById("year") as HTMLTextAreaElement
// const thisYear = new Date().getFullYear() as any
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear
///////////////////////////////////////////////////////////////////////////
//lst variation
let year;
year = document.getElementById("year");
let thisYear;
thisYear = new Date().getFullYear().toString();
//IF THE ELEMENT NOT EXITS IN HML, it needs to be handled
if (year) {
    year.setAttribute("datetime", thisYear);
    year.textContent = thisYear;
}
////////////////////////////////////////////////////////////////////////
//2nd variation
const year2 = document.getElementById("year");
const thisYear2 = new Date().getFullYear().toString(); //converting to string
year2.setAttribute("datetime", thisYear);
year2.textContent = thisYear;
