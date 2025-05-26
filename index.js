document.addEventListener("DOMContentLoaded", function () {
    let menuItems = document.querySelectorAll(".menu-items");
    let currentIndex = 0;
    const sound = new Audio("/Ipod/sound.mp3");
  
    function highlightItem(index) {
        menuItems.forEach((item, i) => {
            item.style.backgroundColor = i === index ? "blue" : "transparent";
        });
    }

    document.querySelector(".left").addEventListener("click", function () {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : menuItems.length - 1;
        highlightItem(currentIndex);
        sound.play()
    });

    document.querySelector(".right").addEventListener("click", function () {
        currentIndex = currentIndex < menuItems.length - 1 ? currentIndex + 1 : 0;
        highlightItem(currentIndex);
         sound.play()
    });

    document.querySelector(".pause button").addEventListener("click", function () {
        menuItems[currentIndex].click();
         sound.play()
    });

    
    highlightItem(currentIndex);
});
//Play Music
  let songs = document.querySelector('.songs');
  let play = document.querySelector('.play')

  function playSongs() {
    songs.play()
    
  }
  play.addEventListener("click", playSongs)


