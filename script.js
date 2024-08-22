const musicContainer = document.querySelector('.music-container');
const playButton = document.querySelector('#play');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
// const cover = document.querySelector('#cover');

const songs = ['chris-Brown-Angel Numbers.mp3','Chris-Brown-Closer.mp3','Chris-Brown-Feel Something.mp3','Chris-Brown-Messed up.mp3','Chris-Brown-Stutter.mp3','Chris-BrownNightmairs.mp3']

let songIndex = 4;

loadSong(songs[songIndex]) 



function loadSong(song){
    title.innerText = song
    audio.src =  `music/${song}`
    // cover.src =  `img/${song}.jpeg`
}

function playSong(){
musicContainer.classList.add('play')
playButton.querySelector('i.fas').classList.remove('fa-play')
playButton.querySelector('i.fas').classList.add('fa-pause')

audio.play()
}

function pauseSong(){
musicContainer.classList.remove('play')
playButton.querySelector('i.fas').classList.add('fa-play')
playButton.querySelector('i.fas').classList.remove('fa-pause')

audio.pause()

}

playButton.addEventListener('click', ()  => {
    const isPlaying = musicContainer.classList.contains('play')

    if (isPlaying){
        pauseSong()
    } else {
        playSong()
    }
} )
