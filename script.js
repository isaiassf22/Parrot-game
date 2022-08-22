const cards = ['unicornparrot', 'unicornparrot', 'tripletsparrot', 'tripletsparrot', 'revertitparrot', 'revertitparrot', 'metalparrot', 'metalparrot', 'fiestaparrot', 'fiestaparrot', 'explodyparrot', 'explodyparrot', 'bobrossparrot', 'bobrossparrot']
let hasflippedcard=false
let firstcard,secondcard;
let avoidbug =false // evita o bug de virar várias cartas enquanto o settimeout não executa
let novoarranjo=''
let m=document.querySelectorAll('.single-card')
console.log(m[1])
let lista=[m[0].dataset.image,m[1].dataset.image,m[2].dataset.image,m[3].dataset.image,m[4].dataset.image,m[5].dataset.image,m[6].dataset.image,m[7].dataset.image,m[8].dataset.image,m[9].dataset.image,m[10].dataset.image,m[11].dataset.image,m[12].dataset.image,m[13].dataset.image]
console.log(lista)


function howmanycards(){
    let play=Number(prompt('Com quantas cartas deseja jogar?'))
    let avaliblecards= [4,6,8,10,12,14]
    while(!avaliblecards.includes(play)){
            play=Number(prompt('Com quantas cartas deseja jogar?'))       
    }
    let arranjo = lista.slice(0,play);
    arranjo.sort(() => Math.random() - 0.5);
    console.log(arranjo)
    for(let i=0;i<arranjo.length;i++){
        novoarranjo+=`<div class="single-card" data-image="${arranjo[i]}" onclick="clicked(this)">
             <img class="bird" src="images/front.png" alt="passaro">
             <img class="front-card" src="images/${arranjo[i]}parrot.gif" alt="Parrot">
        </div>`
        document.querySelector('.cards').innerHTML=novoarranjo
    }
    console.log(novoarranjo)
}
setTimeout(howmanycards,1000)


function clicked(x){
    if (avoidbug) return;
    //x= parametro da funcao(this)
    let a=x.childNodes[1]
    a.classList.add('hidden')
    x.classList.add('rotate')
    let b=x.childNodes[3]
    b.classList.add('visible')
    if(!hasflippedcard){
        //primeiro clique
        hasflippedcard=true
        firstcard=x
        console.log({hasflippedcard,firstcard})
    }
    else{
        //segundo clique
        hasflippedcard=false
        secondcard=x
        if(firstcard.dataset.image===secondcard.dataset.image){
            //se der macth
            firstcard.removeEventListener('click',clicked)
            secondcard.removeEventListener('click',clicked)
        }
        else{
            //se não der match
            avoidbug=true
             setTimeout(()=>{
            firstcard.classList.remove('rotate')
            firstcard.childNodes[1].classList.remove('hidden')
            firstcard.childNodes[3].classList.remove('visible')
            secondcard.classList.remove('rotate')
            secondcard.childNodes[1].classList.remove('hidden')
            secondcard.childNodes[3].classList.remove('visible')
            avoidbug=false
            },1500)
        }

    }
   
}
