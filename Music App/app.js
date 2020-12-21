songs=[
    {
        title:"Baarish.mp3",
        songname:"Baarish",
        artisit:"Atif Aslam",
        pic:"img2.jpg"

    },
    {
        title:"Barishen.mp3",
        songname:"Barishen",
        artisit:"Atif Aslam",
        pic:"img1.jpg" 
    },
    {
        title:"ChalteChalte.mp3",
        songname:"Chalte Chalte",
        artisit:"Atif Aslam",
        pic:"img3.jpg"
    },
    {
        title:"PehliDafa.mp3",
        songname:"Pehli Dafa",
        artisit:"Atif Aslam",
        pic:"img4.jpg"
    }
]

// initialize all id's
var images=document.getElementById("image");
var songName=document.getElementById("SongName");
var artistName=document.getElementById("ArtistName");
var playButton=document.getElementById("play");
var musicPlayer=document.getElementById("music");

// check weather song is playing or not
var status=false;
// counter for songs
var i=0;
// assign music in audio src for 1 time 
musicPlayer.src=songs[i].title;

function playSong()
{
    // set status = true 
    status=true;
    // assign music at index i to audio src
    // musicPlayer.src=songs[i].title;
    // assign songname at index i to songName
    songName.innerHTML=songs[i].songname;
    // assign artistname at index i to artistName
    artistName.innerHTML=songs[i].artisit;
    // assign pic at index i to image src
    images.src=songs[i].pic;
    // play music
    musicPlayer.play();
    // change play icon to pause icon
    playButton.classList.replace("fa-play-circle","fa-pause-circle");
    // start the animation when song play
    images.classList.add('animate');
}

function pauseSong()
{
    // set status = true 
    status=false;
    // pause music
    musicPlayer.pause();
    // change pause icon to play icon
    playButton.classList.replace("fa-pause-circle","fa-play-circle");
    // remove the animation when song pause
    images.classList.remove('animate');
}

function forwardSong()
{
    // increment the counter to change the song
    i++;
    if(i>=songs.length)
    {
        i=0;
        // assign music in audio src
        musicPlayer.src=songs[i].title;
        playSong();
    }
    else
    {
        // assign music in audio src
        musicPlayer.src=songs[i].title;
        playSong();
    }
}

function backwardSong()
{
    if(i<=0)
    {
        i=3;
        // assign music in audio src
        musicPlayer.src=songs[i].title;
        playSong();
    }
    else
    {
        i--;
        // assign music in audio src
        musicPlayer.src=songs[i].title;
        playSong();
    }

}

function clickOnPlayButton()
{
    if(status=='false')
    {
        playSong();
    }
    else
    {
        pauseSong();
    }
}



