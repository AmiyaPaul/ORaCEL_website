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



const tabs = document.querySelectorAll('.outpack');

tabs.forEach(tab => {
  const btn = tab.querySelector('.learnMore-btn');
  const box = tab.querySelector('.slide-txtbox');

  btn.addEventListener('click', () => {
    const isExpanded = box.classList.toggle('expanded');
    btn.style.textDecoration = isExpanded ? 'underline' : 'none';
  });
});


