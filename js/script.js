import projects from "../img/slider/projects.js";

const ulList = document.querySelector(".ulContainer");

const liList = document.querySelectorAll('#aboutMe,#skill,#code,#work,#projects,#education,#engLvl')
const description = document.querySelectorAll('#aboutMeDescription,#skillDescription,#codeDescription,#workDescription,#projectsDescription,#educationDescription,#engLvlDescription')
const names = ulList.querySelectorAll('li > a')
console.log(names)

function removeClasses() {
    for (let i = 0; i < liList.length; i++){
        liList[i].classList.remove('active');
    }
}

function removeDescription() {
    for (let i = 0; i < description.length; i++){
        description[i].classList.remove('active');
    }
}

ulList.addEventListener('click', function(e) {
    
    for (let i = 0; i < liList.length; i++){
        if(e.target === names[i]){
            removeClasses()
            removeDescription()
            liList[i].classList.add('active')
            description[i].classList.add('active') 
        }
    }
    console.log(e.target)
    })


////////////////////////////////////////////////SLIDER///////////////////////////////////////////////////////////


const next = document.querySelector('.rightButton')
const prev = document.querySelector('.leftButton')
const textTravel = document.querySelector('.textTravel')
const textMomentum = document.querySelector('.textMomentum')
let image = document.createElement('img')
let num = currentNum();

function currentNum(min, max) {

    min = Math.ceil(0);
    max = Math.floor(2);
    let res = Math.floor(Math.random() * (max - min)) + min;

    return res;
}
function nextSlide() {
    if(num === 0){
        num++
    } else {
        num--
    }
}

function prevSlide() {
    if(num === 1){
        num--
    } else {
        num++
    }

}

function getSlide() {
    document.querySelector('.sliderImage').appendChild(image)
    image.src = `../img/slider/${projects[num]}.jpg`
}
getSlide()

function text(){
    if(num === 0) {
        textMomentum.classList.remove('active')
        textTravel.classList.remove('active')
        textTravel.classList.add('active')
    } else {
        textMomentum.classList.remove('active')
        textTravel.classList.remove('active')
        textMomentum.classList.add('active')
    }
}
text()
next.addEventListener('click', function (){
    nextSlide()
    getSlide()
    text()
})

prev.addEventListener('click', function (){
    prevSlide()
    getSlide()
    text()
})

console.log(num)