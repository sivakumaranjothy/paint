var mouseEvent="empty";
var last_positon_X,last_positon_Y;

canvas=document.getElementById('myCanvas')
ctx=canvas.getContext("2d");
color="black";
Width_of_Line=1;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color= document.getElementById("color").value;
    Width_of_Line=document.getElementById("Width_Of_Line").value
mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentposition_of_mouseX=e.clientX-canvas.offsetLeft;
    currentposition_of_mouseY=e.clientY-canvas.OffsetTop;
    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=Width_of_Line;
        console.log("lastposition of X and Y coordinates=");
        console.log("X="+last_positon_X+" Y= "+last_positon_Y);
        ctx.moveTo(last_positon_X,last_position_Y);


        console.log("currentPosition of X and Y coordinates=");
        console.log("X="+current_positon_X+" Y= "+current_positon_Y);
        ctx.lineTo(current_positon_X,current_position_Y);
        ctx.stroke();


    }
    last_position_X=  currentposition_of_mouseX;
    last_positon_Y=currentposition_of_mouseY;

}
canvas.addEventListener("mouseup",my_mouseUp);
function my_mouseUp(e){
    mouseEvent="mouseUp";

}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";


}
function Clear_Area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    }