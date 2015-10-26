document.onmousemove = function(evt){
    makeACircle(evt);
}

/**
 * this method generates a red circle div
 * where the user clicks
 * 
 *
 *@ param evt   the info about the click
 */

function makeACircle(evt){
    //alert(evt.clientX);
    //clientX is the horizontal click point
    
    //generates a div
    var circ = document.createElement("div");
    
    //set its horizontal position to that of the cursor
    circ.style.left = evt.clientX+'px';
    
    //set its vertical position to that of the cursor
    circ.style.top = evt.clientY+'px';
    //adds it to the HTML as child of <body>
    document.body.appendChild(circ);
}