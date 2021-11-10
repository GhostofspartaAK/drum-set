
var buttonlen=document.querySelectorAll(".drum").length;
for(var i=0;i<buttonlen;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        makesound(this.innerHTML);
       
        
     });
 }
document.addEventListener("keydown",function(event){
    makesound(event.key);});




function makesound(key){
    switch (key) {
        case "w":
            var wson= new Audio("sounds/tom-1.mp3")
            wson.play();                                
            break;
        case "a":
            var ason = new Audio("sounds/tom-2.mp3")
            ason.play();
            break;
        case "s":
            var sson= new Audio("sounds/tom-3.mp3")
            sson.play();
            break;
        case "d":
            var dson= new Audio("sounds/tom-4.mp3")
            dson.play();
            break;
        case "j":
            var json= new Audio("sounds/snare.mp3")
            json.play();
            break;
        case "k":
            var kson= new Audio("sounds/kick-bass.mp3")
            kson.play();
            break;
        case "l":
            var lson= new Audio("sounds/crash.mp3")
            lson.play();
            break;
    
        default:
           
            break;
    }
}