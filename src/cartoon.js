function changeVideo(videoSource) {
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.src = videoSource;
    videoPlayer.style.display = 'block';

    const youtubeIframe = document.querySelector('iframe');
    if (youtubeIframe) {
        youtubeIframe.style.display = 'none';
    }
}

function showYouTube() {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>';
}