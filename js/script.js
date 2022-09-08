const ulList = document.querySelector(".ulContainer");

const liList = document.querySelectorAll('#mainInfo')
const description = document.querySelectorAll('#description')
console.log(description)
const tagAbout = document.getElementById('aboutMe')
const tagSkill = document.getElementById('skill')
const tagCode = document.getElementById('code')
const tagWork = document.getElementById('work')
const tagProjects = document.getElementById('projects')
const tagEducation = document.getElementById('education')
const tagEngLvl = document.getElementById('engLvl')


const tagList = [tagAbout, tagSkill, tagCode, tagWork, tagProjects, tagEducation, tagEngLvl]

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
        if(e.target === tagList[i]){
            removeClasses()
            removeDescription()
            liList[i].classList.add('active')
            description[i].classList.add('active') 
        }
    }
    })
    
    ////////////////////////////////////////////SLIDER//////////////////////////////////////////////

    