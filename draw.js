const g_btt=document.getElementById('g_btt');
const lott_no=document.getElementById('lott_no');

g_btt.addEventListener('click',function(){
    const lott=random()
    lott_no.innerHTML=lott
});

function random(){
    let rnd_no=[]
    const alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','U','V','S']
    for(let i=0;i<12;i++){

        if(i==2 || i==5 || i==8 || i==11){
            let x=Math.floor(Math.random()*10);
            rnd_no.push(alphabet[x]);
        }
        else{
            let y=Math.floor(Math.random()*10);
            rnd_no.push(y);
        }
        
    }
    let g_no=rnd_no.join('');
    return g_no;
}