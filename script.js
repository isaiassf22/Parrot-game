let hasflippedcard=false
let firstcard,secondcard;
let avoidbug =false // evita o bug de virar várias cartas enquanto o settimeout não executa

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

/*function howmanycards(){
    let play=Number(prompt('Com quantas cartas deseja jogar?'))
    let avaliblecards= [4,6,8,10,12,14]
    while(!avaliblecards.includes(play)){
            play=Number(prompt('Com quantas cartas deseja jogar?'))       
    }
}
setTimeout(howmanycards,1000)
*/

 