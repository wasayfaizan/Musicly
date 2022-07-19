const music = document.querySelector("audio");
const play = document.querySelector("#play");
const image = document.querySelector("img");
const artist = document.querySelector("#artist");
const songName = document.querySelector("#songName");
const previous = document.querySelector(".previousButton");
const forward = document.querySelector(".forwardButton");


const songs = [
    {
        name : "glimpseofus",
        songName : "Glimpse Of Us",
        artist : "Joji"
    },
    {
        name : "perfect",
        songName : "Perfect",
        artist : "Ali Gatie"
    },
    {
        name : "letmedownslowly",
        songName : "Let Me Down Slowly",
        artist : "Alec Benjamin"
    }
]


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
          songName.textContent = songs.songName;
          artist.textContent = songs.artist;
          music.src =  "music/" + songs.name + ".mp3";
          image.src = "images/" + songs.name + ".jpeg";
      };


      songIndex = 0;
    //   loadSong(songs[2]);
      const nextSong = () =>{
        songIndex = (songIndex + 1) % songs.length;
        loadSong(songs[songIndex]);
        playMusic();
      }
      const previousSong = () =>{
        songIndex = (songIndex - 1 + songs.length) % songs.length;
        loadSong(songs[songIndex]);
      }

      forward.addEventListener('click', nextSong);
      previous.addEventListener('click', previousSong);