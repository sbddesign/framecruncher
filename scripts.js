(function() {

    // Declaring Variables
    var desiredSize     = document.getElementById("desiredSize"),
        videoMinutes    = document.getElementById("videoMinutes"),
        videoSeconds    = document.getElementById("videoSeconds"),
        audioInVideo    = document.getElementById("audioInVideo"),
        desiredSizeInMegabits,
        videoLengthInSeconds,
        result,
        audioMessage;


    function framecruncher(desiredSize, videoMinutes, videoSeconds, audioInVideo) {

        desiredSizeInMegabits = desiredSize*8*1024;
        videoLengthInSeconds = (parseFloat(videoMinutes) * 60) + parseFloat(videoSeconds);

        if(audioInVideo === true) {
            // Assuming 320Kbps audio, then converting to Mbps
            audioSize = (videoLengthInSeconds * 320)/1024;
            audioMessage = '<br />(Assuming your audio bitrate is 320 Kbps).';
        } else {
            audioSize = 0;
            audioMessage = '';
        }
        result = (desiredSizeInMegabits - audioSize) / videoLengthInSeconds;

        document.getElementById("result").innerHTML = 'Use a maximum video bitrate of <strong>' + result.toFixed(1) + ' Mbps.</strong>' + audioMessage;

    }

    framecruncher(desiredSize.value, videoMinutes.value, videoSeconds.value, audioInVideo.checked);


    document.getElementById("submit").addEventListener("click", function(){
        framecruncher(desiredSize.value, videoMinutes.value, videoSeconds.value, audioInVideo.checked);
    });

})();




