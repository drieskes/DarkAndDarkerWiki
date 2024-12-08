window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition <= 550) {
        if (video.paused) {
            video.play();
            console.log('Video afspelen');
        }
    } else {
        if (!video.paused) {
            video.pause(); 
            console.log('Video gepauzeerd');
        }
    }
});
video.addEventListener('loadeddata', function() {
    console.log('Video is geladen');
    video.play().catch(error => console.error('Autoplay mislukt:', error));
});

video.addEventListener('ended', function() {
    window.scrollTo({
        top: 1000, 
        behavior: 'smooth'
    });
});



