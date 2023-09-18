
// intialize the variable

var audioElement = new Audio('./music/Dua_Lipa_Ft_DaBaby_-_Levitating.mp3');
var audioDuration;





//Defination of functions

// Remove Nan Error and show time
function audioMetaData( audioElement, index ){
    audioElement.onloadedmetadata = function() {
        audioDuration = Math.floor(audioElement.duration);
        // chnaging seconds into minute 
        document.querySelectorAll(".track-duration")[index].textContent =  Math.floor( audioDuration / 60 ) + ":" + audioDuration % 60 ;
    };
}








var songs = [
    { TrackImage:"./images/dua_lipa1.jpg", TrackName:"One Kiss", TrackArtist:"Dua Lipa", TrackAlbum:"One Kiss", Track:"./music/Calvin-Harris-One-Kiss-Ft-Dua-Lipa-(HiphopKit.com).mp3"},
    { TrackImage:"./images/dua_lipa2.jpg", TrackName:"Hotter Than Hell", TrackArtist:"Dua Lipa", TrackAlbum:"Kiss", Track:"./music/Dua_Lipa_Ft_DaBaby_-_Levitating.mp3"},
    { TrackImage:"./images/dua_lipa.jpg", TrackName:"Hotter Than Hell", TrackArtist:"Dua Lipa", TrackAlbum:"Kiss", Track:"./music/Dua-Lipa-Dance-The-Night-(JustNaija.com).mp3"},
    { TrackImage:"./images/dua_lipa.jpg", TrackName:"Hotter Than Hell", TrackArtist:"Dua Lipa", TrackAlbum:"Kiss", Track:"./music/Dua-Lipa-Don-t-Start-Now-(HiphopKit.com).mp3"},
    { TrackImage:"./images/dua_lipa.jpg", TrackName:"Hotter Than Hell", TrackArtist:"Dua Lipa", TrackAlbum:"Kiss", Track:"./music/Dua-Lipa-Fever-Ft-Ang-le-(HiphopKit.com).mp3"},
    { TrackImage:"./images/dua_lipa.jpg", TrackName:"Hotter Than Hell", TrackArtist:"Dua Lipa", TrackAlbum:"Kiss", Track:"./music/Dua-Lipa-Levitating-(HiphopKit.com).mp3"},
    { TrackImage:"./images/dua_lipa.jpg", TrackName:"Hotter Than Hell", TrackArtist:"Dua Lipa", TrackAlbum:"Kiss", Track:"./music/Dua-Lipa-Love-Again-(HiphopKit.com).mp3"},
    { TrackImage:"./images/dua_lipa.jpg", TrackName:"Hotter Than Hell", TrackArtist:"Dua Lipa", TrackAlbum:"Kiss", Track:"./music/Dua-Lipa-New-Rules-(HiphopKit.com).mp3"},
    { TrackImage:"./images/dua_lipa.jpg", TrackName:"Hotter Than Hell", TrackArtist:"Dua Lipa", TrackAlbum:"Kiss", Track:"./music/Megan-Thee-Stallion-Sweetest-Pie-ft-Dua-Lipa-(HipHopKit.com).mp3"},
    { TrackImage:"./images/dua_lipa.jpg", TrackName:"Hotter Than Hell", TrackArtist:"Dua Lipa", TrackAlbum:"Kiss", Track:"./music/Sean-Paul-No-Lie-ft-Dua-Lipa-(HiphopKit.com).mp3"}
];

// document.querySelectorAll(".track-image")[0].src ="./images/dua_lipa.jpg";
document.querySelectorAll(".track-index")[0].textContent = 1;
document.querySelectorAll(".track-image")[0].src =songs[0].TrackImage;
document.querySelectorAll(".track-name")[0].textContent = songs[0].TrackName;
document.querySelectorAll(".track-artist")[0].textContent = songs[0].TrackArtist;
document.querySelectorAll(".track-album")[0].textContent = songs[0].TrackAlbum;
audioMetaData( new Audio(songs[0].Track), 0 );



document.querySelectorAll(".track-index")[1].textContent = 2;
document.querySelectorAll(".track-image")[1].src =songs[1].TrackImage;
document.querySelectorAll(".track-name")[1].textContent = songs[1].TrackName;
document.querySelectorAll(".track-artist")[1].textContent = songs[1].TrackArtist;
document.querySelectorAll(".track-album")[1].textContent = songs[1].TrackAlbum;
audioMetaData( new Audio(songs[1].Track), 1);






document.querySelector('#bottom-play-circle').addEventListener('click', function(){
   
    if( audioElement.paused || audioElement.currentTime <= 0 ){
        audioElement.play();

        document.querySelector('#bottom-play-circle').textContent = 'stop_circle';
    }else{
        audioElement.pause();
        document.querySelector('#bottom-play-circle').textContent = 'play_circle';
    }
        
});

