let imgevent=document.querySelectorAll('img');
let usercount=0;
let compcount=0;
const eventonclick=function(evt){
    evt.target.classList.add("img_select");
    
    let usernumber= +evt.target.id;
    console.log(typeof usernumber);
    
    ///computer turns
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    let comp_number=getRandomInt(3);
    for(let i=0;i<imgevent.length;++i){
        if(+imgevent[i].id==comp_number){
            imgevent[i].classList.add('img_select_comp');
        }
        imgevent[i].classList.add('disabledbutton');
    }
    let user_display=document.querySelector('.userwin');
    let comp_display=document.querySelector('.compwin');
    let draw_display=document.querySelector('.drawer');
    let score=document.querySelector('h2');
    if(comp_number==usernumber){
        console.log('draw');
        evt.target.classList.add('img_select_comp_draw');
        draw_display.style.display='flex';
    }else{
        if(usernumber==0&&comp_number==2){
            //u
            usercount++;
            user_display.style.display='flex';
            score.innerText=`USER:${usercount}                 COMPUTER:${compcount}`;
        }else if(usernumber==2&&comp_number==0){
           //c
           compcount++;
           comp_display.style.display='flex';
           score.innerText=`USER:${usercount}                 COMPUTER:${compcount}`;
        }else if(usernumber==2&&comp_number==1){
            //u
            usercount++;
            user_display.style.display='flex';
            score.innerText=`USER:${usercount}                 COMPUTER:${compcount}`;
         }else if(usernumber==1&&comp_number==2){
            //c
            compcount++;
            comp_display.style.display='flex';
            score.innerText=`USER:${usercount}                 COMPUTER:${compcount}`;
         }else if(usernumber==1&&comp_number==0){
            //u
            usercount++;
            user_display.style.display='flex';
            score.innerText=`USER:${usercount}                 COMPUTER:${compcount}`;
         }else if(usernumber==0&&comp_number==1){
            //c
            compcount++;
            comp_display.style.display='flex';
            score.innerText=`USER:${usercount}                 COMPUTER:${compcount}`;
         }
    }
}
const callbackfunction=function(evt){
    evt.target.classList.add('border_mouseover');
    evt.target.classList.add('img_bulgeout');
}
const callbackfunction2=function(evt){
    evt.target.classList.remove('border_mouseover');
    evt.target.classList.remove('img_bulgeout');
}
for(let i=0;i<imgevent.length;++i){
    imgevent[i].addEventListener('mouseover',callbackfunction);
    imgevent[i].addEventListener('mouseout',callbackfunction2);
    imgevent[i].addEventListener('click',eventonclick);
}
let replaybuttonfunc= function(evt){
    let user_display=document.querySelector('.userwin');
    let comp_display=document.querySelector('.compwin');
    let draw_display=document.querySelector('.drawer');
    comp_display.style.display='none';
    user_display.style.display='none';
    draw_display.style.display='none';
    for(let i=0;i<imgevent.length;++i){
        imgevent[i].classList.remove('img_select_comp_draw');
        imgevent[i].classList.remove('img_select');
        imgevent[i].classList.remove('img_select_comp');
        imgevent[i].classList.remove('disabledbutton');
    }
}
let replaybutton_element=document.querySelector('#replay');
replaybutton_element.addEventListener('click',replaybuttonfunc);
let restart_button_element=document.querySelector('.restartbutton');
const restartgame=()=>{
    let user_display=document.querySelector('.userwin');
    let comp_display=document.querySelector('.compwin');
    let draw_display=document.querySelector('.drawer');
    comp_display.style.display='none';
    user_display.style.display='none';
    draw_display.style.display='none';
    for(let i=0;i<imgevent.length;++i){
        imgevent[i].classList.remove('img_select_comp_draw');
        imgevent[i].classList.remove('img_select');
        imgevent[i].classList.remove('img_select_comp');
        imgevent[i].classList.remove('disabledbutton');
    }
    let score=document.querySelector('h2');
    usercount=0;
    compcount=0;
    score.innerText=`USER:${usercount}                 COMPUTER:${compcount}`;
}
restart_button_element.addEventListener('click',restartgame);