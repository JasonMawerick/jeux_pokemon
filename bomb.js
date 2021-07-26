let bomb=document.getElementById('bomb');
const enemies=document.getElementsByClassName('enemies');
/* let enemy_0=document.getElementById('enemy-0');
let enemy_1=document.getElementById('enemy-1');
let enemy_2=document.getElementById('enemy-2');
let enemy_3=document.getElementById('enemy-3');
let enemy_4=document.getElementById('enemy-4'); */

document.addEventListener('keydown',function(event){
    if (event.code == 'Space'){
        
         bomb.style.top = player.offsetTop + "px";
         bomb.style.left = player.offsetLeft + "px";
         bomb.style.display = 'block';
        setTimeout (()=>bomb.style.backgroundImage="url('bomb_sprite/openPokeball.png')",500);
        setTimeout (()=>bomb.style.backgroundImage="url('bomb_sprite/etoile.png')",1000);
        setTimeout (()=>bomb.style.backgroundImage="url('bomb_sprite/pokeball.png')",1500);
        setTimeout (()=>bomb.style.display='none',2000);
        console.log(enemies.offsetTop-24);
        console.log(bomb.offsetTop-24);

        for (let i = 0; i < 5; i++) {
         
            console.log(enemies[i]);
            if(enemies[i].offsetTop >= bomb.offsetTop -24 && enemies[i].offsetTop <= bomb.offsetTop +24 &&
                enemies[i].offsetLeft >= bomb.offsetLeft -24 && enemies[i].offsetLeft <= bomb.offsetLeft +24){
                    setTimeout (()=>enemies[i].style.display="none",1000);
                
            }
            
        }
        
    }
});