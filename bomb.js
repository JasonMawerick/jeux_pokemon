let bomb=document.getElementById('bomb');
let enemy_0=document.getElementById('enemy-0');
let enemy_1=document.getElementById('enemy-1');
let enemy_2=document.getElementById('enemy-2');
let enemy_3=document.getElementById('enemy-3');
let enemy_4=document.getElementById('enemy-4');

document.addEventListener('keydown',function(event){
    if (event.code == 'Space'){
        
         bomb.style.top = player.offsetTop + "px";
         bomb.style.left = player.offsetLeft + "px";
         bomb.style.display = 'block';
        setTimeout (()=>bomb.style.backgroundImage="url('bomb_sprite/openPokeball.png')",500);
        setTimeout (()=>bomb.style.backgroundImage="url('bomb_sprite/etoile.png')",1000);
        setTimeout (()=>bomb.style.backgroundImage="url('bomb_sprite/pokeball.png')",1500);
        setTimeout (()=>bomb.style.display='none',2000);
        console.log(enemy_0.offsetTop-24);
        console.log(bomb.offsetTop-24);

        if(enemy_0.offsetTop >= bomb.offsetTop -24 && enemy_0.offsetTop <= bomb.offsetTop +24 &&
            enemy_0.offsetLeft >= bomb.offsetLeft -24 && enemy_0.offsetLeft <= bomb.offsetLeft +24){
                setTimeout (()=>enemy_0.style.display="none",1000);
            
        }
       else if(enemy_1.offsetTop >= bomb.offsetTop -24 && enemy_1.offsetTop <= bomb.offsetTop +24 &&
        enemy_1.offsetLeft >= bomb.offsetLeft -24 && enemy_1.offsetLeft <= bomb.offsetLeft +24){
                setTimeout (()=>enemy_1.style.display="none",1000);
            
        }
        else if(enemy_2.offsetTop >= bomb.offsetTop -24 && enemy_2.offsetTop <= bomb.offsetTop +24 &&
            enemy_2.offsetLeft >= bomb.offsetLeft -24 && enemy_2.offsetLeft <= bomb.offsetLeft +24){
                setTimeout (()=>enemy_2.style.display="none",1000);
            
        }
        else if(enemy_3.offsetTop >= bomb.offsetTop -24 && enemy_3.offsetTop <= bomb.offsetTop +24 &&
            enemy_3.offsetLeft >= bomb.offsetLeft -24 && enemy_3.offsetLeft <= bomb.offsetLeft +24){
                setTimeout (()=>enemy_3.style.display="none",1000);
            
        }
        else if(enemy_4.offsetTop >= bomb.offsetTop -24 && enemy_4.offsetTop <= bomb.offsetTop +24 &&
            enemy_4.offsetLeft >= bomb.offsetLeft -24 && enemy_4.offsetLeft <= bomb.offsetLeft +24){
                setTimeout (()=>enemy_4.style.display="none",1000);
            
        } 
            
            
      

    }
});