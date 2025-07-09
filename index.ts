const volumeControl = document.getElementById('volume') as HTMLInputElement;

class WeatherSound {
    audio: HTMLAudioElement;
    private isPlaying: boolean = false;

    constructor(src: string) {
        this.audio = new Audio(src);
        this.audio.loop = true;
    }

    play(volume: number) {
        this.audio.volume = volume;
        this.audio.play();
        this.isPlaying = true;
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
    }

    toggle(volume: number) {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play(volume);
        }
    }
}

const rainSound = new WeatherSound('./files/assets/sounds/rain.mp3');
const summerSound = new WeatherSound('./files/assets/sounds/summer.mp3');
const winterSound = new WeatherSound('./files/assets/sounds/winter.mp3');

document.getElementById('rain')?.addEventListener('click', () => {
    rainSound.toggle(parseFloat(volumeControl.value));
    summerSound.pause();
    winterSound.pause();
    document.body.style.backgroundImage = "url('./files/assets/rainy-bg.jpg')";  
});

document.getElementById('summer')?.addEventListener('click', () => {
    summerSound.toggle(parseFloat(volumeControl.value));
    rainSound.pause();
    winterSound.pause();
    document.body.style.backgroundImage = "url('./files/assets/summer-bg.jpg')";
});

document.getElementById('winter')?.addEventListener('click', () => {
    winterSound.toggle(parseFloat(volumeControl.value));
    summerSound.pause();
    rainSound.pause();
    document.body.style.backgroundImage = "url('./files/assets/winter-bg.jpg')";
});

volumeControl.addEventListener('input', (event) => {
    const volume = parseFloat((event.target as HTMLInputElement).value);
    rainSound.audio.volume = volume;
    summerSound.audio.volume = volume;
    winterSound.audio.volume = volume;
});
