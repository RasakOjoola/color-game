var colordisplay = document.querySelector('#colordisplay')
var displayMessage = document.querySelector('#displayMessage')
var squares = document.querySelectorAll('.squares')
var h1 = document.querySelector('h1');
var resetbutton = document.querySelector('#reset');

var colors=generaterandomcolors(6);
var pickedcolor = colors[Math.floor(Math.random()*6)]

game();
function game(){
    colordisplay.innerHTML= pickedcolor;
    
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        
        squares[i].addEventListener('click',function(){
            var squarecolor = this.style.backgroundColor;
            if(squarecolor == pickedcolor){
                displayMessage.innerHTML= "CORRECT";
                for (var i = 0; i<squares.length;i++){
                    squares[i].style.backgroundColor = squarecolor;
                    
                }
                h1.style.backgroundColor=squarecolor;
                resetbutton.innerHTML= "Play Again?"
            }else{
                displayMessage.innerHTML= 'Try again';
                this.style.backgroundColor= '#232323';
            }

        })
    }

}
resetbutton.addEventListener('click', function(){
    colors = generaterandomcolors(6);
    pickedcolor = colors[Math.floor(Math.random()*6)]
    game();

})


function generaterandomcolors(numbers){
    var arr = [];
    for(var i =0; i< numbers; i++){

        var r = Math.floor(Math.random()*255)
        var g = Math.floor(Math.random()*255)
        var b = Math.floor(Math.random()*255)
        var color = "rgb(" + r + ", " + g + ", " +b +")";
        arr.push(color)

    }
    return arr;
}
