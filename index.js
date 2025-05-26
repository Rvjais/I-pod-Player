document.addEventListener("DOMContentLoaded", function () {
    let menuItems = document.querySelectorAll(".menu-items");
    let currentIndex = 0;
  
    function highlightItem(index) {
        menuItems.forEach((item, i) => {
            item.style.backgroundColor = i === index ? "lightgray" : "transparent";
        });
    }

    document.querySelector(".left").addEventListener("click", function () {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : menuItems.length - 1;
        highlightItem(currentIndex);
    });

    document.querySelector(".right").addEventListener("click", function () {
        currentIndex = currentIndex < menuItems.length - 1 ? currentIndex + 1 : 0;
        highlightItem(currentIndex);
    });

    document.querySelector(".pause button").addEventListener("click", function () {
        menuItems[currentIndex].click();
    });

    
    highlightItem(currentIndex);
});
//Play Music
  let songs = document.querySelector('.songs');
  let play = document.querySelector('.play')

  function playSongs() {
    songs.play()
  }
  play.addEventListener("click", playSongs())

