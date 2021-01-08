const removeTransition=(e)=> {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

 const playSound=(e)=> {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop null being returned 

    key.classList.add('playing');
    audio.currentTime = 0; ///rewind the sound to the start 
    audio.play();
  }

  const keys =[...document.querySelectorAll('.keys')];//new array, could use .key or .keys div
  keys.map(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);