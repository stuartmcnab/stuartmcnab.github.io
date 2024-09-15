let videoIds = ['84WIaK3bl_s', 'WxfZkMm3wcg', 'jG7dSXcfVqE', 'dld7XXbMKDQ'];
const displayStatus = document.querySelector(".status");

const getVideoData = async () => {
    const channelId = 'UCtinbF-Q-fVthA0qrFQTgXQ';
    const key = "AIzaSyALfGxGgdDUJXiAUE8eILktIFihV9mmLuw";
    const baseUrl = 'https://www.googleapis.com/youtube/v3/search';

    await fetch(`${baseUrl}?key=${key}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`)
    .then(response => {
        if (!response.ok) {
            displayStatus.innerHTML = "NOPE. YouTube returned a " + res.status + " but you can still randomise from " + videoIds.length + " videos";
            console.warn('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        return data;
    })
    .then((data) => {
        if(!data?.items){
            displayStatus.innerHTML = "NOPE. something went wrong but you can still randomise from " + videoIds.length + " videos";
        }
        videoIds = data?.items?.map((item) => item.id.videoId);
        displayStatus.innerHTML = "Randomizing from " + videoIds.length + " videos";

        return data.items;
    })
    .catch((e) => {
        console.log("NOPE", e);
        displayStatus.innerHTML = "NOPE. something went wrong " + e + " but you can still randomise from " + videoIds.length + " videos";
      });
};

const randomizer = () => {
    let nowPlaying = videoIds[0];
    vidRef =  Math.round(Math.random() * (videoIds.length - 1));
    if (nowPlaying !== videoIds[vidRef]){
        videoRef = videoIds[vidRef];
        nowPlaying = videoIds[vidRef];
    } else {
        randomizer();
    }   
    document.getElementById('player').src = `https://www.youtube.com/embed/${videoRef}`;
}

window.onload = () => { 
    randomizer()

    document.getElementById('randomizer').addEventListener('click', function(){
        randomizer();
    });

    getVideoData();
};
