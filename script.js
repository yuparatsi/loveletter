const innerPolygon = document.getElementById("inner-polygon");
const outer = document.getElementById("outer");
const closeBtn = document.getElementById("close-btn");
const message1 = document.getElementById("message-1");
const message2 = document.getElementById("message-2");
const heartsRow = document.querySelectorAll(".hearts-row");
const text = document.querySelectorAll(".text");
const heartBtn = document.getElementById("heart-btn");
document.getElementById('show-text').style.display = "none"; 
function toggleEnvelope() {
  
  innerPolygon.classList.toggle("inner-open");
  outer.classList.toggle("outer-open");
  heartBtn.classList.toggle("hide");
  closeBtn.classList.toggle("show");
  message1.classList.toggle("hide");
  message2.classList.toggle("show");
  
  heartsRow.forEach(element => element.classList.toggle("animated"));
  document.getElementById('show-text').style.display = "block"; 
  document.getElementById('show-text').className = 'text';
 // text.forEach(element => element.classList.toggle("text"));
  
}

function toggleCloseEnvelope() {
  innerPolygon.classList.toggle("inner-open");
  outer.classList.toggle("outer-open");
  heartBtn.classList.toggle("hide");
  closeBtn.classList.toggle("show");
  message1.classList.toggle("hide");
  message2.classList.toggle("show");
  
  heartsRow.forEach(element => element.classList.toggle("animated"));
  document.getElementById('show-text').style.display = "none"; 
  document.getElementById('show-text').className = '';
}