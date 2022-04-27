<!--size:400*539-->
function getCookie( name ){
					var nameOfCookie = name + "=";
					var x = 0;
					while ( x <= document.cookie.length )
					{
						var y = (x+nameOfCookie.length);
						if ( document.cookie.substring( x, y ) == nameOfCookie ) {
							if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
							endOfCookie = document.cookie.length;
							return unescape( document.cookie.substring( y, endOfCookie ) );
						}

						x = document.cookie.indexOf( " ", x ) + 1;

						if ( x == 0 ) break;
					}
					return "";
				}





function setCookie( name, value, expiredays )
{
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}
<!-- 움직이는 자바소스 시작 --> 
	var x = 0; 
	var y = 0;
	drag = 0; 
	move = 0; 
	window.document.onmousemove = mouseMove;
	window.document.onmousedown = mouseDown; 
	window.document.onmouseup = mouseUp; 
	window.document.ondragstart = mouseStop; 

	function mouseUp() 
	{ 
		move = 0;
	} 

	function mouseDown() 
	{
		if (drag) 
		{ 
			clickleft = window.event.x - parseInt(dragObj.style.left); 
			clicktop = window.event.y - parseInt(dragObj.style.top); 
			dragObj.style.zIndex += 1; 
			move = 1;
		} 
	} 

	function mouseMove() 
	{ 
		if (move) 
		{ 
			dragObj.style.left = window.event.x - clickleft; 
			dragObj.style.top = window.event.y - clicktop; 
		} 
	} 

	function mouseStop() 
	{ 
		window.event.returnValue = false; 
	} 
<!-- 움직이는 자바소스 끝 --> 







<!-- 움직이는 자바소스2 --> 


function setActiveFocus(srcObject){ 
    if(srcObject == window.xwzActivLayer) return; 

    if(window.xwzActivLayer == null){window.xwzActivLayer = srcObject;return;} 

    if(window.xwzActivLayer.style.zIndex > srcObject.style.zIndex){ 
        var n1 = window.xwzActivLayer.style.zIndex; 
        var n2 = srcObject.style.zIndex; 
        srcObject.style.zIndex= n2*-1; 
        window.xwzActivLayer.style.zIndex = n2; 
        srcObject.style.zIndex= n1; 
    } 
    window.xwzActivLayer = srcObject; 
} 

function xwzDragDrop(srcObject){ 
    window.xwzDragPanel= srcObject; 
    if(window.xwzDragPanel == null) return; 
     
    if(window.xwzDragFrame == null){ 
        window.xwzDragFrame = document.createElement("DIV"); 
        document.body.appendChild(window.xwzDragFrame) 
        window.xwzDragFrame.style.cssText="border:#B95823 1px dashed;visibility:hidden;position:absolute;left:0;top:0;z-index:700" 
    } 
    setActiveFocus(srcObject);//활성화 

    window.xwzPoint = new Object(); 
    window.xwzPoint.bDrag =  true; 

    window.xwzPoint.X = event.clientX; 
    window.xwzPoint.Y = event.clientY; 

    xwzDragFrame.style.left = parseInt(xwzDragPanel.offsetLeft); 
    xwzDragFrame.style.top = parseInt(xwzDragPanel.offsetTop); 

    xwzDragFrame.style.width        = parseInt( xwzDragPanel.offsetWidth); 
    xwzDragFrame.style.height        = parseInt( xwzDragPanel.offsetHeight); 

    xwzDragFrame.style.visibility = 'visible'; 

    window.xwzPoint.Left = parseInt(xwzDragFrame.style.left); 
    window.xwzPoint.Top = parseInt(xwzDragFrame.style.top); 
     
    document.body.style.cursor = "move"; 

    document.onmousemove        = function(){ 
        if(window.xwzPoint == null) return; 
        if(window.xwzPoint.bDrag != true) return; 
        xwzDragFrame.style.left = window.xwzPoint.Left + parseInt(event.clientX) - window.xwzPoint.X; 
        xwzDragFrame.style.top = window.xwzPoint.Top + parseInt(event.clientY) - window.xwzPoint.Y; 
    } 
    document.onmouseup            = function(){ 
    if(window.xwzDragPanel == null || window.xwzDragFrame == null) return; 

        window.xwzDragPanel.style.left = parseInt(window.xwzDragFrame.style.left); 
        window.xwzDragPanel.style.top = parseInt(window.xwzDragFrame.style.top); 
        window.xwzDragFrame.style.visibility ="hidden"; 
        window.xwzPoint = null; 
        document.body.style.cursor = ""; 

        document.onmousemove        = new Function("return true;"); 
        document.onmouseup            = new Function("return true;"); 
        document.onselectstart        = new Function("return true;"); 
    } 
    document.onselectstart        = new Function("return false;"); 

} 
<!-- 움직이는 자바소스2 끝 --> 