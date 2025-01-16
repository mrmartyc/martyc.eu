if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var script = document.createElement('script');
    script.src = 'js/tilt.js';
    document.body.appendChild(script);
}