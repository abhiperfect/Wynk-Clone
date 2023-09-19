
// intialize the variable

var audioElement ;
var audioDuration;
var currentSongIndex = 0;

var songs = [
    { TrackImage:"./images/dua_lipa_1.jpg", TrackName:"One Kiss", TrackArtist:"Calvin Harris, Dua Lipa", TrackAlbum:"One Kiss", Track:"./music/Calvin-Harris-One-Kiss-Ft-Dua-Lipa-(HiphopKit.com).mp3"},
    { TrackImage:"./images/dua_lipa_2.jpg", TrackName:"Levitating", TrackArtist:"Dua Lipa, DaBaby", TrackAlbum:"Levitating (feat. DaBaby)", Track:"./music/Dua_Lipa_Ft_DaBaby_-_Levitating.mp3"},
    { TrackImage:"./images/dua_lipa_3.jpg", TrackName:"Dance the night", TrackArtist:"Dua Lipa", TrackAlbum:"Barbie The Album", Track:"./music/Dua-Lipa-Dance-The-Night-(JustNaija.com).mp3"},
    { TrackImage:"./images/dua_lipa_4.jpg", TrackName:"Don't Start Now", TrackArtist:"Dua Lipa", TrackAlbum:"Don't Start Now", Track:"./music/Dua-Lipa-Don-t-Start-Now-(HiphopKit.com).mp3"},
    { TrackImage:"./images/dua_lipa_5.jpg", TrackName:"Fever", TrackArtist:"Dua Lipa, Angèle", TrackAlbum:"Fever", Track:"./music/Dua-Lipa-Fever-Ft-Ang-le-(HiphopKit.com).mp3"},
    { TrackImage:"./images/dua_lipa_6.jpg", TrackName:"Levitating", TrackArtist:"Dua Lipa", TrackAlbum:"Future Nostalgia", Track:"./music/Dua-Lipa-Levitating-(HiphopKit.com).mp3"},
    { TrackImage:"./images/dua_lipa_7.jpg", TrackName:"Love Again", TrackArtist:"Dua Lipa", TrackAlbum:"Future Nostalgia", Track:"./music/Dua-Lipa-Love-Again-(HiphopKit.com).mp3"},
    { TrackImage:"./images/dua_lipa_8.jpg", TrackName:"New Rules", TrackArtist:"Dua Lipa", TrackAlbum:"Dua Lipa (Deluxe)", Track:"./music/Dua-Lipa-New-Rules-(HiphopKit.com).mp3"},
    { TrackImage:"./images/dua_lipa_9.jpg", TrackName:"Sweetest Pie", TrackArtist:"Megan thee Stallion, Dua Lipa", TrackAlbum:"Sweetest Pie", Track:"./music/Megan-Thee-Stallion-Sweetest-Pie-ft-Dua-Lipa-(HipHopKit.com).mp3"},
    { TrackImage:"./images/dua_lipa_10.jpg", TrackName:"No Lie (feat. Dua Lipa)", TrackArtist:"Sean Paul, Dua Lipa", TrackAlbum:"Dua Lipa (Complete Edition)", Track:"./music/Sean-Paul-No-Lie-ft-Dua-Lipa-(HiphopKit.com).mp3"}
];




//Defination of functions

// Remove Nan Error and show time
function audioMetaData( audioElement, index ){
    audioElement.onloadedmetadata = function() {
        audioDuration = Math.floor(audioElement.duration);
        // chnaging seconds into minute 
        if((audioDuration % 60) < 10){
            document.querySelectorAll(".track-duration")[index].textContent =  Math.floor( audioDuration / 60 ) + ":0" + audioDuration % 60 ;    
        }else{        
            document.querySelectorAll(".track-duration")[index].textContent =  Math.floor( audioDuration / 60 ) + ":" + audioDuration % 60 ;}
    
    };
}


// creating song list into right container
for( var i = 0; i < songs.length; ++i){
    document.querySelectorAll(".track-index")[i].textContent = i+1;
    document.querySelectorAll(".track-image")[i].src =songs[i].TrackImage;
    document.querySelectorAll(".track-name")[i].textContent = songs[i].TrackName;
    document.querySelectorAll(".track-artist")[i].textContent = songs[i].TrackArtist;
    document.querySelectorAll(".track-album")[i].textContent = songs[i].TrackAlbum;
    audioMetaData( new Audio(songs[i].Track), i );
}
    
//selected song will be play using it

    document.querySelector('#bottom-play-circle').addEventListener('click', function(){
       
        if( audioElement.paused || audioElement.currentTime <= 0 ){
            audioElement.play();
    
            document.querySelector('#bottom-play-circle').textContent = 'stop_circle';
        }else{
            audioElement.pause();
            document.querySelector('#bottom-play-circle').textContent = 'play_circle';
        }

            
    });
    
//function to paused current audio
function pauseAudio(){

    if( audioElement && !audioElement.paused){
        audioElement.pause();
        audioElement.currentTime = 0;
    }
}


//Choosing song to play from song-list

for( var i = 0; i < songs.length; ++i){

document.querySelectorAll(".song-list")[i].addEventListener( 'click', function(){
    currentSongIndex = this.querySelector(".track-1 > .track-index").textContent ;


    // chooseSong(currentSongIndex);
    pauseAudio();
    document.querySelector(".bottom").style.visibility = "visible";
    audioElement = new Audio(songs[currentSongIndex-1].Track);
    audioElement.play();
    document.querySelector('#bottom-play-circle').textContent = 'stop_circle';
    document.querySelector("#bottom-song-image").src = songs[currentSongIndex-1].TrackImage;
    document.querySelector("#bottom-song-name").textContent = songs[currentSongIndex-1].TrackName;
    document.querySelector("#bottom-song-artist-album").textContent = songs[currentSongIndex-1].TrackArtist+" "+songs[currentSongIndex-1].TrackAlbum;
});

}

document.querySelector("#play-song-button").addEventListener('click',function () {
    pauseAudio();
    document.querySelector(".bottom").style.visibility = "visible";
    audioElement = new Audio(songs[0].Track);
    audioElement.play();
    document.querySelector('#bottom-play-circle').textContent = 'stop_circle';
    document.querySelector("#bottom-song-image").src = songs[0].TrackImage;
    document.querySelector("#bottom-song-name").textContent = songs[0].TrackName;
    document.querySelector("#bottom-song-artist-album").textContent = songs[0].TrackArtist+" "+songs[0].TrackAlbum; 
});


    document.querySelector("#skip_next").addEventListener('click',function () {
        currentSongIndex = currentSongIndex+1;
       
        pauseAudio();
        audioElement = new Audio(songs[currentSongIndex-1].Track);
        audioElement.play();
        document.querySelector('#bottom-play-circle').textContent = 'stop_circle';
        document.querySelector("#bottom-song-image").src = songs[currentSongIndex-1].TrackImage;
        document.querySelector("#bottom-song-name").textContent = songs[currentSongIndex-1].TrackName;
        document.querySelector("#bottom-song-artist-album").textContent = songs[currentSongIndex-1].TrackArtist+" "+songs[currentSongIndex-1].TrackAlbum;
    });    




















