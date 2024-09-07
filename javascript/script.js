//document.write("<h1>pinky+++</h1>");

//基本資料型態跟變數
/*
var my_name="Pinkyyy"
document.write("Her name is "+my_name);
document.write("<br/>");
document.write("Pinky likes to sleeping.");
document.write("<br/>");
document.write("Pinky doesn't like pink.");
document.write("<br/>");

var my_name=prompt("請輸入名字");
document.write("你好啊"+my_name);
*/
//event listener
function handle_click(element){
    //alert("叫你按就按阿?");
    //console.log(element);
    element.innerText="按屁阿!"
    element.style.color="red";
}