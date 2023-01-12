// document.getElementById("calcutora").addEventListener("click",function(){
//     var Num1 = document.getElementById("num1").value;
//     var Num2 = document.getElementById("num2").value;

//     var sum = parseInt(Num1) +parseInt(Num2);
// })
// document.getElementById("calcutorb").addEventListener("click",function(){
//     var Num1 = document.getElementById("num1").value;
//     var Num2 = document.getElementById("num2").value;

//     var sum = parseInt(Num1) -parseInt(Num2);
// })
// document.getElementById("calcutorc").addEventListener("click",function(){
//     var Num1 = document.getElementById("num1").value;
//     var Num2 = document.getElementById("num2").value;

//     var sum = parseInt(Num1) *parseInt(Num2);
// })
// document.getElementById("calcutord").addEventListener("click",function(){
//     var Num1 = document.getElementById("num1").value;
//     var Num2 = document.getElementById("num2").value;

//     var sum = parseInt(Num1) /parseInt(Num2);
// })
function mylasrta()
{
    var Num1 = document.getElementById("num1").value;
    var Num2 = document.getElementById("num2").value;
    var sum = parseInt(Num1) +parseInt(Num2);
    document.getElementById("return").innerHTML = "result : " + sum;
    alert(sum)
    // alert("HelloWolard")
}
function mylasrtb()
{
    var Num1 = document.getElementById("num1").value;
    var Num2 = document.getElementById("num2").value;
    var sum = parseInt(Num1) -parseInt(Num2);
    document.getElementById("return").innerHTML = "result : " + sum;
    alert(sum)
}
function mylasrtc()
{
    var Num1 = document.getElementById("num1").value;
    var Num2 = document.getElementById("num2").value;
    var sum = parseInt(Num1) *parseInt(Num2);
    document.getElementById("return").innerHTML = "result : " + sum;
    alert(sum)
}
function mylasrtd()
{
    var Num1 = document.getElementById("num1").value;
    var Num2 = document.getElementById("num2").value;
    var sum = parseInt(Num1) /parseInt(Num2);
    document.getElementById("return").innerHTML = "result : " + sum;
    alert(sum)
}
function mylasrtf()
{
    var Num1 = document.getElementById("numm1").value;
    var Num2 = document.getElementById("numm2").value;
    var sum = parseInt(Num1) /(0.0001*(parseInt(Num2)*parseInt(Num2)));
    document.getElementById("return").innerHTML = "result : " + sum;
    alert(sum)
}
const img =document.createElement("img")//ประกาศตัวแปร และใช้คำสั่ง createElement
img.src = "img/name.png"
img.style.width = "200px"
document.getElementById("img").appendChild(img)//นำค่า Element เรียกใช้งานโดยคำสั่ง appendchild(ตัวแปร Element = img)