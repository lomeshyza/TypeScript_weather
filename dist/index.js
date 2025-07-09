"use strict";
var _a, _b, _c;
var WeatherSound = /** @class */ (function () {
    function WeatherSound(src) {
        this.isPlaying = false;
        this.audio = new Audio(src);
        this.audio.loop = true;
    }
    WeatherSound.prototype.play = function (volume) {
        this.audio.volume = volume;
        this.audio.play();
        this.isPlaying = true;
    };
    WeatherSound.prototype.pause = function () {
        this.audio.pause();
        this.isPlaying = false;
    };
    WeatherSound.prototype.toggle = function (volume) {
        if (this.isPlaying) {
            this.pause();
        }
        else {
            this.play(volume);
        }
    };
    return WeatherSound;
}());
var rainSound = new WeatherSound('./files/assets/sounds/rain.mp3');
var summerSound = new WeatherSound('./files/assets/sounds/summer.mp3');
var winterSound = new WeatherSound('./files/assets/sounds/winter.mp3');
var volumeControl = document.getElementById('volume');
(_a = document.getElementById('rain')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    rainSound.toggle(parseFloat(volumeControl.value));
    summerSound.pause();
    winterSound.pause();
    document.body.style.backgroundImage = "url('./files/assets/rainy-bg.jpg')";
});
(_b = document.getElementById('summer')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    summerSound.toggle(parseFloat(volumeControl.value));
    rainSound.pause();
    winterSound.pause();
    document.body.style.backgroundImage = "url('./files/assets/summer-bg.jpg')";
});
(_c = document.getElementById('winter')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    winterSound.toggle(parseFloat(volumeControl.value));
    summerSound.pause();
    rainSound.pause();
    document.body.style.backgroundImage = "url('./files/assets/winter-bg.jpg')";
});
volumeControl.addEventListener('input', function (event) {
    var volume = parseFloat(event.target.value);
    rainSound.audio.volume = volume;
    summerSound.audio.volume = volume;
    winterSound.audio.volume = volume;
});
