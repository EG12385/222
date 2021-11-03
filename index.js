function playSound () {
  document.getElementById('play').play();
}

var anchors = document.getElementsByTagName('p');

for(var i = 0, len = anchors.length; i < len; i++) {
  var thisAnchor = anchors[i];
    thisAnchor.onclick = function () {
        var btn = this.parentNode.parentNode.getElementsByTagName('button')[0];
        btn.innerHTML = this.innerHTML;
    }

}


document.getElementById("startOrStopImg").onclick = function() {
    var audio = document.getElementById("audio");
    if (audio.paused) audio.play();
    else audio.pause();
};
