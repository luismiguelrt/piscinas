/* 
 * general_functions.js
 * Uso de las funciones dinamicas para la aplicacion
 * Created on : 10 jun. 2019, 12:59:10
 * Author     : Luis Miguel Rubio Toledo
*/
var dragobject={
    z: 0, x: 0, y: 0, offsetx : null, offsety : null, targetobj : null, dragapproved : 0,      
initialize:function(){
        document.onmousedown=this.drag;
        document.onmouseup=function(){
            this.dragapproved=0;
    }
},
drag:function(e){
        var evtobj=window.event? window.event : e;
        this.targetobj=window.event? event.srcElement : e.target;
        if (this.targetobj.className=="drag") {
            this.dragapproved=1;
            if (isNaN(parseInt(this.targetobj.style.left))) {
                this.targetobj.style.left=0;
            }
            if (isNaN(parseInt(this.targetobj.style.top))) {
                this.targetobj.style.top=0;
            }
            this.offsetx=parseInt(this.targetobj.style.left);
            this.offsety=parseInt(this.targetobj.style.top);
            this.x=evtobj.clientX;
            this.y=evtobj.clientY;
            if (evtobj.preventDefault)
                evtobj.preventDefault();
            document.onmousemove=dragobject.moveit;
        }
},
moveit:function(e){
        var evtobj=window.event? window.event : e;
        if (this.dragapproved==1) {
            this.targetobj.style.left=this.offsetx+evtobj.clientX-this.x+"px";
            this.targetobj.style.top=this.offsety+evtobj.clientY-this.y+"px";
            return false;
        }
    }
};

function createImg(idPadre, path) {
    // var path= "image/piscina"+element+".png"; //-->Editar la ruta
    var img=document.createElement('img'); 
    img.id = (idPadre.substring(3));
    img.className = ('drag');
    img.setAttribute("src",path);
    img.style.cssText = 'position:absolute;\n\
                        top:100px;\n\
                        left:100px;';

    document.getElementById(idPadre).appendChild(img);
}

function createDiv(id) {
    // var path= "image/piscina"+element+".png"; //-->Editar la ruta
    var div = document.createElement('div'); 
    div.id = (id);
    div.style.cssText = 'position:absolute;\n\
                        top:5px;\n\
                        left:5px;';
    return div;
}

function createSpan(id) {
    // var path= "image/piscina"+element+".png"; //-->Editar la ruta
    var span = document.createElement('span'); 
    span.id = (id);
    span.style.cssText = 'position:absolute;\n\
                        top:5px;\n\
                        left:5px;';
    return span;
}

