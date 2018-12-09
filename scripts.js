(function() {


    function framecruncher() {

        // Declaring Variables
        var desiredSize     = document.getElementById("desiredSize").value,
            videoMinutes    = document.getElementById("videoMinutes").value,
            videoSeconds    = document.getElementById("videoSeconds").value;

        var desiredSizeInMegabits = desiredSize*8*1024;
        var videoLengthInSeconds = (parseFloat(videoMinutes) * 60) + parseFloat(videoSeconds);
        var result = desiredSizeInMegabits / videoLengthInSeconds;

        document.getElementById("result").innerHTML = 'Use a maximum bitrate of ' + result + ' Mbps';

    }

    framecruncher();


    document.getElementById("submit").addEventListener("click", framecruncher);

})();




