let name = prompt("מה שמך?");
let gender = prompt("האם זכר או נקבה")
if (gender == "זכר") {
    alert("ברוך הבא " + name)
} else if (gender == "נקבה") {
    alert("ברוכה הבאה " + name)
} else {
    alert("לא ציינת זכר או נקבה")
}

let email = prompt("מה המייל שלך?")
let subscribe = confirm("האם רוצה להירשם לניוזלטר שלנו?")
if (subscribe == true) {
    alert("תודה שנרשמת, המייל שלך: " + email + " נשמר במערכת")
} else {
    alert("הפסד שלך...")
}
let age = prompt("מה גילך?")
if (age >= 0 & age < 30) {
    alert("כל החיים עוד לפניך")
} else if (age >= 30 & age < 60) {
    alert("הגעת לעשור השלישי של חייך")
} else if (age >= 60 & age < 90) {
    alert("החיים קצרים זה הזמן לנצל כל רגע")
} else if (age >= 90 & age < 120) {
    alert("יאללה זה הזמן להתחיל לסגור את הבסטה")
} else if (age >= 120) {
    alert("😇")
}