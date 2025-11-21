



// slider

const slides = document.querySelectorAll('.slides');
const imgSlider = document.querySelector('.imgSlider');
const lenSlide = slides.length;
const buttonSlide = document.querySelector('.buttonSlide');
const myFrame = document.querySelector('.frame');

let activeIndex = 0;

for(let i=0; i<lenSlide; i++){
    const div = document.createElement('div');
    div.className = 'btnSlide';
    buttonSlide.appendChild(div);
};

const buttons = document.querySelectorAll('.btnSlide');

const changeBG = ()=>{
    buttons.forEach((button) =>{
        button.style.backgroundColor = 'transparent';
    });
    buttons[activeIndex].style.backgroundColor = 'white';
};

buttons[0].style.backgroundColor = 'white';

buttons.forEach((btn,i) =>{
    btn.addEventListener('click', ()=>{
        activeIndex = i;
        imgSlider.style.transform = `translateX(-${i*myFrame.offsetWidth}px)`;
        // FADE EFFECT (instead of translateX)
        slides.forEach(s => s.style.opacity = 0);
        slides[activeIndex].style.opacity = 1;
        changeBG();
    });
});


// start slideshow

let slideInterval;

const playSlide = () =>{
    activeIndex += 1;
    if(activeIndex>lenSlide-1){
        activeIndex = 0;
    };
    imgSlider.style.transform = `translateX(-${activeIndex*myFrame.offsetWidth}px)`;
    //  FADE EFFECT
    slides.forEach(s => s.style.opacity = 0);
    slides[activeIndex].style.opacity = 1;
    changeBG();
};

const startSlideShow = () => {
    slideInterval = setInterval(() =>{
        playSlide();
    }, 8000);
};

startSlideShow();


const stopSlideShow = ()=>{
    clearInterval(slideInterval);
};

imgSlider.addEventListener('mouseover', stopSlideShow);
imgSlider.addEventListener('mouseout', startSlideShow);
buttonSlide.addEventListener('mouseover', stopSlideShow);
buttonSlide.addEventListener('mouseout', startSlideShow);


// const tourBtn = document.querySelector('takeTour');

// tourBtn.addEventListener('mouseover', ()=>{
//     document.getElementById("tourBTN").innerText = "Partners 3, Room 170     &#8594;";
// });

const tourBtn = document.querySelector('.takeTour'); // select the div with class "takeTour"

tourBtn.addEventListener('mouseover', () => {
    document.getElementById("tourBTN").innerHTML = "Partners 3, Room 170 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#8594;";
});

tourBtn.addEventListener('mouseout', () => {
    document.getElementById("tourBTN").innerHTML = "Partners 3, Room 170 &nbsp;&nbsp; &#8594;"; // reset without arrow
});

tourBtn.addEventListener('click', () => {
    window.location.href = "https://my.matterport.com/show/?m=J7WeZYuups1";
});






// image collage slider 1

const imgSlide1 = document.querySelectorAll('.imgslide1');
const imageSlider1 = document.querySelector('.imageSlider1');
const lengthSlide1 = imgSlide1.length;
const btnPages1 = document.querySelector('.btnPages1');
const collage1 = document.querySelector('.collage1');

let actInd1 = 0;

for(let i=0; i<lengthSlide1; i++){
    const newDiv1 = document.createElement('div');
    newDiv1.className = 'btnPage1';
    btnPages1.appendChild(newDiv1);
};

const collageBTN1 = document.querySelectorAll('.btnPage1');

const chBG1 = ()=>{
    collageBTN1.forEach((button1) =>{
        button1.style.backgroundColor = 'transparent';
    });
    collageBTN1[actInd1].style.backgroundColor = 'white';
};

collageBTN1[0].style.backgroundColor = 'white';

collageBTN1.forEach((btn,i) =>{
    btn.addEventListener('click', ()=>{
        actInd1 = i;
        imageSlider1.style.transform = `translateX(-${i*collage1.offsetWidth}px)`;
        chBG1();
    });
});


// start slideshow

let slideIntval1;

const playCollage1 = () =>{
    actInd1 += 1;
    if(actInd1>lengthSlide1-1){
        actInd1 = 0;
    };
    imageSlider1.style.transform = `translateX(-${actInd1*collage1.offsetWidth}px)`;
    chBG1();
};

const stSlideShow1 = () => {
    slideIntval1 = setInterval(() =>{
        playCollage1();
    }, 2000);
};

stSlideShow1();


 


// image collage slider 2

const imgSlide2 = document.querySelectorAll('.imgslide2');
const imageSlider2 = document.querySelector('.imageSlider2');
const lengthSlide2 = imgSlide2.length;
const btnPages2 = document.querySelector('.btnPages2');
const collage2 = document.querySelector('.collage2');

let actInd2 = 0;

for(let i=0; i<lengthSlide2; i++){
    const newDiv2 = document.createElement('div');
    newDiv2.className = 'btnPage2';
    btnPages2.appendChild(newDiv2);
};

const collageBTN2 = document.querySelectorAll('.btnPage2');

const chBG2 = ()=>{
    collageBTN2.forEach((button) =>{
        button.style.backgroundColor = 'transparent';
    });
    collageBTN2[actInd2].style.backgroundColor = 'white';
};

collageBTN2[0].style.backgroundColor = 'white';

collageBTN2.forEach((btn,i) =>{
    btn.addEventListener('click', ()=>{
        actInd2 = i;
        imageSlider2.style.transform = `translateX(-${i*collage2.offsetWidth}px)`;
        chBG2();
    });
});


// start slideshow

let slideIntval2;

const playCollage2 = () =>{
    actInd2 += 1;
    if(actInd2>lengthSlide2-1){
        actInd2 = 0;
    };
    imageSlider2.style.transform = `translateX(-${actInd2*collage2.offsetWidth}px)`;
    chBG2();
};

const stSlideShow2 = () => {
    slideIntval2 = setInterval(() =>{
        playCollage2();
    }, 2000);
};

stSlideShow2();
