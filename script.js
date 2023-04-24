let birthdate = document.getElementById('birthdate')
function getAge(){
let today_date = new Date()
let birth = new Date(birthdate.value)
 
let years = today_date.getFullYear() - birth.getFullYear()
let month_diff = today_date.getMonth() - birth.getMonth()// 6 - 4 = 2
let date_diff = today_date.getDate() - birth.getDate()// 24 - 23 = 1
// if(month_diff < 0 || (month_diff == 0 && date_diff < 0 )){
//     years--
// }
// let month = 0
// let date = 0
// if(month_diff<0){
// month = 12 + month_diff
// }
// if(month_diff > 0){
//     month = month_diff
// }
// if(month_diff == 0 && date_diff>0){

// }
let month = 0
let date = 0
if(month_diff > 0){
month = month_diff
}
if(month_diff <0){
    years--
    month = 12 + month_diff
}
if(month_diff == 0){
if(date_diff>0){
    date = date_diff
}
if(date_diff<0){
month = 11
date = 30 - birth.getDate() +  today_date.getDate()
}
}
let result = document.getElementById("result")
result.innerText = `Your Age is ${years} years ${month} months ${date} days`
console.log("year"+years,"month"+month, "date"+ days)
}