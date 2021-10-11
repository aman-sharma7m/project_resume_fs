
var navButton=document.querySelectorAll('.nav-menu a');
// console.log(navButton)
var interval;

for (var i=0;i<navButton.length;i++){
  navButton[i].addEventListener('click',function(event){
    event.preventDefault();
    var targetSection=this.textContent.trim().toLowerCase();
    var targetSectionId=document.getElementById(targetSection);
    // console.log(targetSectionId);
    // console.log(targetSection);
    
    //console.log(targetSectionCoordinate['y']);

    interval=setInterval(scrollVertical,10,targetSectionId);

  });
}

function scrollVertical(targetSectionId){
  var targetSectionCoordinate=targetSectionId.getBoundingClientRect();
  console.log(targetSectionCoordinate.top);
  if (targetSectionCoordinate.top<=0){
    clearInterval(interval);
    return;
  }
  window.scrollBy(0,10);
}
  