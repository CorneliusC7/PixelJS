var canvasEx = false
var modeDraw = "draw"
document.addEventListener('contextmenu', event => event.preventDefault());
function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}  
function github(){
    open("https://github.com/CorneliusC7/PixlJS/")   
}
function eraser(){
    modeDraw = "eraser"
}
function pencil(){
    modeDraw = "draw"
}
function cls(){
    var cnv = document.querySelector("#myCanvas")
    if(cnv){
        var ctx = cnv.getContext('2d')
        ctx.clearRect(0, 0, cnv.width, cnv.height);
    }
}
function dwn(){
    var cnv = document.querySelector("#myCanvas")
    if(cnv){
        var download = function(){
            var link = document.createElement('a');
            link.download = 'filename.png';
            link.href = document.getElementById('myCanvas').toDataURL()
            link.click();
          }   
          download()       
    }
}
function clr(){
        document.getElementById("c").focus();
        document.getElementById("c").click();   
}
function crt(){
    if(!canvasEx){
        var cw = prompt('canvas width (px, default 500px): ')
        var ch = prompt('canvas height (px, default 500px): ')
        var cnv = document.createElement('canvas')
        cnv.id = "myCanvas";
        if (ch == "" || !isNumeric(ch)){
            ch = 500
        }
        if (cw == "" || !isNumeric(cw)){
            cw = 500
        }
        document.body.appendChild(cnv)
        canvasEx = true;
        var canvas = document.getElementById('myCanvas');
        canvas.height = ch
        canvas.width = cw
        canvas.style.height = ch*100
        canvas.style.width = cw*100
        setTimeout(function(){
            startDraw()
            document.getElementById('k').style.display = 'inline'
            document.getElementById('kk').style.display = 'inline'
            document.getElementById('kkk').style.display = 'inline'
            document.getElementById('kkkk').style.display = 'block'

        }, 200)
    }  
}
function startDraw(){
    sw = 10
    sh = 10
    var isDraw = false;
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ctx.mozImageSmoothingEnabled = false;
    canvas.addEventListener('click', function(e){
        w = 10
        h = 10
        var offsetX=canvas.offsetLeft;
        var offsetY=canvas.offsetTop;
        mouseX=parseInt(e.clientX-offsetX);
        mouseY=parseInt(e.clientY-offsetY);
        if(modeDraw == "draw"){
            ctx.fillStyle = document.getElementById("c").value
            ctx.fillRect(Math.floor((mouseX) / 10)*10, Math.floor(mouseY / 10)*10, w, h)
        }else{
            ctx.clearRect(Math.floor((mouseX) / 10)*10, Math.floor(mouseY / 10)*10, w, h)
        }
    })
    canvas.addEventListener('mousedown', function(e){
        isDraw = true;
    })
    canvas.addEventListener('mouseup', function(){
        isDraw = false;
    })
    canvas.addEventListener('mousemove', function(e){
        if(isDraw){
            w = 10
            h = 10
            var offsetX=canvas.offsetLeft;
            var offsetY=canvas.offsetTop;
            mouseX=parseInt(e.clientX-offsetX);
            mouseY=parseInt(e.clientY-offsetY);
            if(modeDraw == "draw"){
                ctx.fillStyle = document.getElementById("c").value
                ctx.fillRect(Math.floor((mouseX) / 10)*10, Math.floor(mouseY / 10)*10, w, h)    
            }else{
                ctx.clearRect(Math.floor((mouseX) / 10)*10, Math.floor(mouseY / 10)*10, w, h)
            }
        }
    })
}
