var studentName = []
var studentName1 = []
var stringArray = ["Hamza"]
var number = [1]
var boolean = [true]
var mixed = ["Hamza",1,true] 
var qualification = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M.Phil" , "PhD"]

document.write("<h2>Qualifications</h2>")

for(var i = 0 ;i<qualification.length;i++){
    document.write( "<h3>",i,") " ,qualification[i],"<br>","</h3>")
}
document.write("<h1>Task 2</h1>")
var name1 = ["Hamza","Michael","John"]
var score = [480, 320, 400];
var total = 500;
for (var i = 0; i < score.length; i++) {
    var percentage = (score[i] / total) * 100;
    // console.log(percentage);
    document.write("<h3>","Score of ",name1[i] ," is ",score[i] ," Percentage:",percentage,"<br>","</h3>")
}
document.write("<h2>Task 2</h2>")
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

var ask = prompt("Enter a Index Number In which You Want Color Name")
var ask2 = prompt("Enter a Color Name")
document.write("<h3>After Update User Turn</h3>")
colorName.splice(ask,0,ask2)
// console.log(colorName);
for(var i = 0; i<colorName.length;i++){
    document.write("<h5>",colorName[i],"</h5>")
}

document.write("<h3>After Update User Turn To Delete</h3>")
var say = prompt("Enter Index Number")
var say1 = prompt("Enter Range You Want To Delete")
colorName.splice(say,say1)
for(var i = 0; i<colorName.length;i++){
    document.write("<h5>",colorName[i],"</h5>")
}

document.write("<h1>Task 3</h1>")
var scored = [320,230,480,120]
document.write("<br>","<h2>","Score Of Student: ", scored, "</h2>")
var arranged = scored.sort()
console.log(arranged);
document.write("<h2>","Ordered Score Of Students Is: ",arranged,"</h2>")

document.write("<h1>Task 4</h1>")

var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
document.write("<h2>","Cities List: ","<br>",cities,"</h2>")
var selected = cities.slice(3,5)
document.write("<h2>","Selected Cities List: ","<br>",selected,"</h2>")

document.write("<h1>Task 5</h1>")

var arr = ["This","is","my","cat"]
var joining = arr.join(" ")
document.write("<h2>","Array: ","<br>",arr,"</h2>")
document.write("<h2>","String:","<br>",joining,"</h2>")

document.write("<h1>Task 6</h1>")

var appliances = ["Keyboard","Mouse","Printer","Monitor"]
for(var i = 0;i<appliances.length;i++){
    document.write("<h2>" , "Out:" , "<br>" , appliances[i], "<h2>");
}

document.write("<h1>Task 7</h1>")

var appliances = ["Keyboard","Mouse","Printer","Monitor"]
var reversedArray = appliances.reverse();
for(var i = 0;i<appliances.length;i++){
    document.write("<h2>" , "Out:" , "<br>" , reversedArray[i], "<h2>");
}


document.write("<h1>Task 8</h1>")
var phone =["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"]
for(var i = 0;i<phone.length;i++){
    document.write("<h2>",phone[i],"</h2>")
}


     