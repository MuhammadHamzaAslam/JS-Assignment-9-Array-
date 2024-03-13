// var studentName = []
// var studentName1 = []
// var stringArray = ["Hamza"]
// var number = [1]
// var boolean = [true]
// var mixed = ["Hamza",1,true] 
// var qualification = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M.Phil" , "PhD"]

// document.write("<h2>Qualifications</h2>")

// for(var i = 0 ;i<qualification.length;i++){
//     document.write( "<h3>",i,") " ,qualification[i],"<br>","</h3>")
// }
// document.write("<h1>Task 2</h1>")
// var name1 = ["Hamza","Michael","John"]
// var score = [480, 320, 400];
// var total = 500;
// for (var i = 0; i < score.length; i++) {
//     var percentage = (score[i] / total) * 100;
//     // console.log(percentage);
//     document.write("<h3>","Score of ",name1[i] ," is ",score[i] ," Percentage:",percentage,"<br>","</h3>")
// }
var colorName = ["Red","Green","Blue"]
for(var i = 0; i<colorName.length;i++){
    document.write("<h4>",colorName[i],"</h4>")
}
var ask = prompt("Enter Color Name You Want Start Of Array")
document.write("<h3>After Update Start</h3>")
colorName.unshift(ask)
for(var i = 0; i<colorName.length;i++){
    document.write("<h5>",colorName[i],"</h5>")
}
var ask = prompt("Enter Color Name You Want End Of Array")
document.write("<h3>After Update End</h3>")
colorName.push(ask)
for(var i = 0; i<colorName.length;i++){
    document.write("<h5>",colorName[i],"</h5>")
}
// var ask = prompt("Enter Color Name You Want Start Of Array")
document.write("<h3>After Update Start Both</h3>")
colorName.unshift("Golden","Silver")
for(var i = 0; i<colorName.length;i++){
    document.write("<h5>",colorName[i],"</h5>")
}
document.write("<h3>After Update First Color Delete</h3>")
colorName.shift()
for(var i = 0; i<colorName.length;i++){
    document.write("<h5>",colorName[i],"</h5>")
}
document.write("<h3>After Update Last Color Delete</h3>")
colorName.pop()
for(var i = 0; i<colorName.length;i++){
    document.write("<h5>",colorName[i],"</h5>")
}
