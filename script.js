const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let pulando = false;
let posicaoDino = 0;


function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!pulando){
            pulo();
    }
    }
}

function pulo(){

    pulando = true;

    let pulodino = setInterval(()=> {

        if(posicaoDino >= 150){
            clearInterval(pulodino);

    let descedino = setInterval(()=> {
        if(posicaoDino <= 0){
            clearInterval(descedino);
            pulando = false;
         }else {
            posicaoDino -= 20; 
            dino.style.bottom = posicaoDino + 'px';
        }
        }, 20);
    } else {
        //subindo
        posicaoDino += 20;
        dino.style.bottom = posicaoDino + 'px'; 
        }
    }, 20);
}

function criandoCacto(){
    const cacto = document.createElement('div');
    let posicaoCacto = 1000; 
    let randomTempo = Math.random() * 6000;

    cacto.classList.add('cacto');
    cacto.style.left = 1000 + 'px';
    background.appendChild(cacto);
    
    let vaEsquerda = setInterval(() => {
        if(posicaoCacto < -60){
            clearInterval(vaEsquerda);
            background.removeChild(cacto);
        }else if(posicaoCacto > 0 & posicaoCacto < 60 && posicaoDino < 60){
            //fim de jogo  
            clearInterval(vaEsquerda);
            document.body.innerHTML = '<h1 class= "game-over">Fim de jogo</h1>';
        }else{
            posicaoCacto -= 10;
            cacto.style.left = posicaoCacto +'px';        }
    },20); 

    setTimeout(criandoCacto, randomTempo);
}

criandoCacto();
document.addEventListener('keyup', handleKeyUp);