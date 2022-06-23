let horizontalBar = document.getElementById("horizontal-underline");
// console.log(horizontalBar);

let horizontalMenus = document.querySelectorAll("nav:first-child a");
// console.log(horizontalMenus);


horizontalMenus.forEach((menu) => 
  menu.addEventListener("click", (e) => horizontalIndicator(e))
);
// addEventListner()메서드는 이벤트 헨들러를 요소에 연결한다.


function horizontalIndicator(e){
  horizontalBar.style.left = e.currentTarget.offsetLeft + "px";
  horizontalBar.style.width = e.currentTarget.offsetWidth + "px";
  horizontalBar.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}



// ====================== vertical ======================

let verticalBar = document.getElementById("vertical-underline");
// console.log(verticalBar);

let verticalMenus = document.querySelectorAll("nav:nth-child(2) a");


verticalMenus.forEach((menu) => 
  menu.addEventListener("click", (e) => verticalIndicator(e))
);


function verticalIndicator(e){
  verticalBar.style.left = e.currentTarget.offsetLeft + "px";
  verticalBar.style.width = e.currentTarget.offsetWidth + "px";
  verticalBar.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}