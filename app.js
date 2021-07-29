function colisionDetect(ref_obj, new_x, new_y, obj){
    if ((new_y < obj.offsetTop + obj.offsetHeight &&
        new_y + ref_obj.offsetHeight > obj.offsetTop) &&
        (new_x < obj.offsetLeft + obj.offsetWidth &&
        new_x + ref_obj.offsetWidth > obj.offsetLeft)) {
            console.log('boom'); 
        return true;} 
    else {
        return false}
          
  }
  