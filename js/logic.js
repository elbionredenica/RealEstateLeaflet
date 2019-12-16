window.onload = function(e){
    ropenNav();
    
}

function openNav() {
  document.getElementById("mySidebar").style.width = "425px";
  document.getElementById("main").style.display= "none";
  document.getElementById("mySidebar").style.opacity = "0.9";
    rcloseNav();
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.display = "inline";
  document.getElementById("main").style.marginLeft = "0";
}

var change = 1;

function tgl() {
  change++;
  $('#toggle').toggleClass('on');
  $('#menu').fadeToggle();
  closeNav();
  if (change % 2 !== 0) {
     $("#toggle").attr("disabled", true);
      ropenNav();
  } else if (change % 2 === 0) {
     $("#toggle").attr("disabled", false);
      
  } 
}


function ropenNav() {
        closeNav();
  document.getElementById("rmySidebar").style.width = "425px";
  document.getElementById("rmain").style.display= "none";
  document.getElementById("rmySidebar").style.opacity = "0.9";
  document.getElementById("legend").style.marginLeft = "700px";
  document.getElementById("legend").style.transition = "0.75s";

}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function rcloseNav() {
  document.getElementById("rmySidebar").style.width = "0";
  document.getElementById("rmain").style.display = "inline";
  document.getElementById("rmain").style.marginLeft = "0";
}


function openCity(cityName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(cityName).style.display = "block";
  elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


//var slideIndex = 0;
//showSlides();
//
//function showSlides() {
//  var i;
//  var slides = document.getElementsByClassName("mySlides");
//  for (i = 0; i < slides.length; i++) {
//    slides[i].style.display = "none";
//  }
//  slideIndex++;
//  if (slideIndex > slides.length) {slideIndex = 1}
//  slides[slideIndex-1].style.display = "block";
//  setTimeout(showSlides, 2500); // Change image every 2 seconds
//} 
