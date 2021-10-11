
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
  
// skill bar changes begin
var animationDone=false;
var skillContainer=document.querySelector('.skills-display > div');
var progressBars=document.querySelectorAll('.skill-progress div');

function initializeZeroWidth(){
  for (let bar of progressBars){
    bar.style.width=0+'%';
  }
}

var fillValue=new Array();
for(let i=0;i<progressBars.length;i++){
  fillValue[i]=progressBars[i].clientWidth/150*100;
}

function fillBar(){
  for (let i=0;i<progressBars.length;i++){
    var targetWidth=fillValue[i];
    var currentWidth=0;
    var interval=setInterval(function(){
      if (currentWidth>targetWidth){
        clearInterval(interval);
        return;
      }
      currentWidth++;
      progressBars[i].style.width=currentWidth+'%';
    },30);
  }
}
window.addEventListener('scroll',checkScroll);

function checkScroll(){
  //have to check skill container is visible
  var coordinate=skillContainer.getBoundingClientRect();
  
  if (coordinate.top< window.innerHeight && !animationDone){
    //to stop multiple fires
    animationDone=true;
    
    //initialise width to zero
    initializeZeroWidth();
    //fire the animation
    fillBar();

      
  }
}
// skill bar changes end 