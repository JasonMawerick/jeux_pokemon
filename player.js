const player = document.getElementById('player');
const moveSize = 24;
let playerWalk = 0;


document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowUp') {
    if (player.offsetTop >=24){
      playerWalk = playerWalk + 1;
    if (playerWalk %2 == 1) {
      
      player.style.backgroundImage= "url('roxanne_sprite/dos.png')";
     }
     else{
      player.style.backgroundImage= "url('roxanne_sprite/dos2.png')";
      
     }
    player.style.top = (player.offsetTop - moveSize) + "px";
    }
    
  } else if (event.code == 'ArrowRight') {
    if (player.offsetLeft <= 720) {
      playerWalk = playerWalk + 1;
      if (playerWalk %2 == 1) {
        
      player.style.backgroundImage= "url('roxanne_sprite/droite.png')";
     }
     else{
      player.style.backgroundImage= "url('roxanne_sprite/droite2.png')";
     }
     player.style.left = (player.offsetLeft + moveSize) + "px";
    }
   
  } else if (event.code == 'ArrowDown') {
    if (player.offsetTop <= 720) {
      playerWalk = playerWalk + 1;
    if (playerWalk %2 == 1) {
      
      player.style.backgroundImage= "url('roxanne_sprite/face.png')";
     }
     else{
      player.style.backgroundImage= "url('roxanne_sprite/face2.png')";
     }
    player.style.top = (player.offsetTop + moveSize) + "px";
    console.log(player.style.top);
    }
    
  } else if (event.code == 'ArrowLeft') {
    if (player.offsetLeft >= 24) {
      playerWalk = playerWalk + 1;
    if (playerWalk %2 == 1) {
      
      player.style.backgroundImage= "url('roxanne_sprite/gauche.png')";
     }
     else{
      player.style.backgroundImage= "url('roxanne_sprite/gauche2.png')";
     }
    player.style.left = (player.offsetLeft - moveSize) + "px";
    }
    
  }
});