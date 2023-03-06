console.log("Welcome to Javascript");


let song_index = 0;
let audio_element = new Audio('./songs/6.mp3');
let master_play = document.getElementById('masterplay')
let progress_bar = document.getElementById("progressbar");
let gif = document.getElementById("gif");
let song_items = Array.from(document.getElementsByClassName('song_item'))
let mastersongname = document.getElementById("mastersongname");


let songs = [
    {song_name: "Let Me Love You  - justin Bieber" , 
    filepath: "./songs/1.mp3",
    coverpath:"./covers/1.jpg"},

    {song_name: "Intezaar   - Lucky Ali" , 
    filepath: "./songs/2.mp3",
    coverpath:"./covers/2.jpg"},

    {song_name: "Everything Sucks - vaultboy" , 
    filepath: "./songs/3.mp3",
    coverpath:"./covers/3.jpg"},

    {song_name: "Sky is The Limit  - Mark Ambor" , 
    filepath: "./songs/4.mp3",
    coverpath:"./covers/4.jpg"},

    {song_name: "I Think i Wanna Text You - vaultboy" , 
    filepath: "./songs/5.mp3",
    coverpath:"./covers/5.jpg"},

    {song_name: "She Dont Give a  - King" , 
    filepath: "./songs/6.mp3",
    coverpath:"./covers/6.jpg"},

    {song_name: "Din Dhalay  - Bayaan" , 
    filepath: "./songs/7.mp3",
    coverpath:"./covers/7.jpg"},
]

song_items.forEach((element,i)=>{
    // console.log(element,i)
    element.getElementsByTagName("img")[0].src = songs[i].coverpath
    element.getElementsByClassName("Song_name")[0].innerText = songs[i].song_name
})

master_play.addEventListener('click',()=>{
    if(audio_element.paused || audio_element.currentTime<=0){
        audio_element.play();
        master_play.classList.remove('fa-play')
        master_play.classList.add('fa-pause')
        gif.style.opacity = 1;
    }
    else{
        audio_element.pause();
        master_play.classList.remove('fa-pause')
        master_play.classList.add('fa-play')
        gif.style.opacity = 0;
    }
})

audio_element.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    progress = parseInt((audio_element.currentTime/audio_element.duration)*100)
    console.log(progress);
    progress_bar.value = progress
})
progress_bar.addEventListener('change',()=>{
    // audio_element.currentTime = (progress_bar.value * audio_element)/100;
    audio_element.currentTime = progress_bar.value * audio_element.duration /100; 
})


const makeallplays = ()=>{
    
    Array.from(document.getElementsByClassName('Song_item_play')).forEach((element)=>{
        element.classList.add('fa-circle-play')
        element.classList.remove('fa-circle-pause')
    })
}


Array.from(document.getElementsByClassName('Song_item_play')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeallplays()
        song_index = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audio_element.src = `./songs/${song_index+1}.mp3`
        mastersongname.innerText = songs[song_index].song_name
        audio_element.currentTime = 0
        audio_element.play();
        gif.style.opacity = 1;
        master_play.classList.remove('fa-play')
        master_play.classList.add('fa-pause')
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if (song_index>=songs.length) {
        song_index=0
    }
    else{
        
    song_index+=1
    }
        audio_element.src = `./songs/${song_index+1}.mp3`
        mastersongname.innerText = songs[song_index].song_name
        audio_element.currentTime = 0
        audio_element.play();
        master_play.classList.remove('fa-play')
        master_play.classList.add('fa-pause')
})

document.getElementById('previous').addEventListener('click',()=>{
    if (song_index<=0) {
        song_index=0
    }
    else{
        
    song_index-=1
    }
        audio_element.src = `./songs/${song_index+1}.mp3`
        mastersongname.innerText = songs[song_index].song_name
        audio_element.currentTime = 0
        audio_element.play();
        
        master_play.classList.remove('fa-play')
        master_play.classList.add('fa-pause')
})







