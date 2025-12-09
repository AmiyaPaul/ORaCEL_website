const targetDiv = document.querySelector('.navbar');
const redLine = document.querySelector('.redLine');
        

window.addEventListener('scroll', function() {
    if (window.scrollY >= 203) {
        targetDiv.classList.add('scrolled');
        redLine.style.display = "none";
    } else {
        targetDiv.classList.remove('scrolled');
        redLine.style.display = "block";
    }
});



const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const hiddenMenu = document.querySelector('.menus');

menuOpen.addEventListener('click', () => {
  hiddenMenu.classList.add('active');
});

menuClose.addEventListener('click', () => {
  hiddenMenu.classList.remove('active');
});




const reDrop = document.getElementById('reDrop');
const reDropDiv = document.getElementById('reDropDiv');


reDrop.addEventListener('mouseover', () => {
  const rect = reDrop.getBoundingClientRect();
  reDropDiv.style.position = "absolute";
  reDropDiv.style.top = rect.bottom + window.scrollY + 2 + "px"; 
  reDropDiv.style.left = rect.left + window.scrollX - 20 + "px"; 
  reDropDiv.style.display = "block";
});


reDrop.addEventListener('mouseout', () => {
  reDropDiv.style.display = "none";
});

reDropDiv.addEventListener('mouseover', () => {
  reDropDiv.style.display = "block";
});
reDropDiv.addEventListener('mouseout', () => {
  reDropDiv.style.display = "none";
});



const outTabs = document.querySelectorAll('.outpack'); 

outTabs.forEach(outTabs => { 
  const btn = outTabs.querySelector('.learnMore-btn'); 
  const box = outTabs.querySelector('.slide-txtbox'); 

  btn.addEventListener('click', () => { 
    const isExpanded = box.classList.toggle('expanded'); 
    btn.textContent = isExpanded ? 'Learn Less' : 'Learn More'; 
  }); 
});

const facTabs = document.querySelectorAll('.facpack'); 

facTabs.forEach(facTabs => { 
  const btnA = facTabs.querySelector('.learnMore-btn-a'); 
  const boxA = facTabs.querySelector('.slide-txtbox'); 

  btnA.addEventListener('click', () => {
    const isExpanded = boxA.classList.toggle('expanded');
    btnA.style.textDecoration = isExpanded ? 'underline' : 'none';
  });
});


