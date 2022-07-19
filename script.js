const music = document.querySelector("audio");
const play = document.querySelector("#play");
const image = document.querySelector("img");
const artist = document.querySelector(".artist");
const songName = document.querySelector(".songName");
const previous = document.querySelector(".previousButton");
const forward = document.querySelector("forwardButton");



// PLAY BUTTON
let isPlaying = false;
// to play a song
     function playMusic(){
        isPlaying = true;
        music.play();
        play.classList.replace("fa-play", "fa-pause");
        image.classList.add("animation");
      };

      // to pause a song
     function pauseMusic (){
        isPlaying = false;
        music.pause();
        play.classList.replace("fa-pause", "fa-play");
        image.classList.remove("animation");
      };

      play.addEventListener('click', () => {
          if(isPlaying) {
            pauseMusic();
          } else {
              playMusic();
          }
      })


      const loadSong = (songs) => {
          songName.textContent = songs.songName
      }
      loadSong(songs);