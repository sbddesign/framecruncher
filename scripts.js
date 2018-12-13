(function() {

    // Declaring Variables
    var desiredSize     = document.getElementById("desiredSize"),
        videoMinutes    = document.getElementById("videoMinutes"),
        videoSeconds    = document.getElementById("videoSeconds"),
        desiredSizeInMegabits,
        videoLengthInSeconds,
        result;


    function framecruncher(desiredSize, videoMinutes, videoSeconds) {

        desiredSizeInMegabits = desiredSize*8*1024;
        videoLengthInSeconds = (parseFloat(videoMinutes) * 60) + parseFloat(videoSeconds);
        result = desiredSizeInMegabits / videoLengthInSeconds;

        document.getElementById("result").innerHTML = 'Use a maximum bitrate of ' + result.toFixed(1) + ' Mbps';

    }

    framecruncher(desiredSize.value, videoMinutes.value, videoSeconds.value);


    document.getElementById("submit").addEventListener("click", function(){
        framecruncher(desiredSize.value, videoMinutes.value, videoSeconds.value);
    });

})();




