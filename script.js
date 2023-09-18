var songs = [
    { TrackImage:"./images/dua_lipa.jpg", TrackName:"Hotter Than Hell", TrackArtist:"Dua Lipa", TrackAlbum:"Kiss", TrackDuration:"5:45"},
    { TrackImage:"./images/dua_lipa.jpg", TrackName:"Hotter Than Hell", TrackArtist:"Dua Lipa", TrackAlbum:"Kiss", TrackDuration:"5:45"},
    { TrackImage:"./images/dua_lipa.jpg", TrackName:"Hotter Than Hell", TrackArtist:"Dua Lipa", TrackAlbum:"Kiss", TrackDuration:"5:45"},
    { TrackImage:"./images/dua_lipa.jpg", TrackName:"Hotter Than Hell", TrackArtist:"Dua Lipa", TrackAlbum:"Kiss", TrackDuration:"5:45"},
    { TrackImage:"./images/dua_lipa.jpg", TrackName:"Hotter Than Hell", TrackArtist:"Dua Lipa", TrackAlbum:"Kiss", TrackDuration:"5:45"},
    { TrackImage:"./images/dua_lipa.jpg", TrackName:"Hotter Than Hell", TrackArtist:"Dua Lipa", TrackAlbum:"Kiss", TrackDuration:"5:45"}
];

// document.querySelectorAll(".track-image")[0].src ="./images/dua_lipa.jpg";
document.querySelectorAll(".track-index")[1].textContent = 2;
document.querySelectorAll(".track-image")[1].src =songs[1].TrackImage;
// document.querySelectorAll(".track-name")[1].textContent = songs[1].TrackName;
// document.querySelectorAll(".track-artist")[1].textContent = songs[1].TrackArtist;
// document.querySelectorAll(".track-album")[1].textContent = songs[1].TrackAlbum;
// document.querySelectorAll(".track-duration")[1].textContent = songs[1].TrackDuration;

var audioElement = new  Audio('./music/Calvin-Harris-One-Kiss-Ft-Dua-Lipa-(HiphopKit.com).mp3');
// for( var i = 0; i < songs.length; ++i){

// }
document.querySelectorAll(".track-name")[1].textContent =  Math.floor(audioElement.duration).toString();

document.querySelector('#bottom-play-circle').addEventListener('click', function(){
    
    if( audioElement.paused || audioElement.currentTime <= 0 ){
        audioElement.play();
        document.querySelector('#bottom-play-circle').textContent = 'stop_circle';
    }else{
        audioElement.pause();
        document.querySelector('#bottom-play-circle').textContent = 'play_circle';
    }
        
});
