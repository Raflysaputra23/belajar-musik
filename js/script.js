const clickSound = new Audio("/sound/mouse-click.mp3");
AOS.init();


const handleMouseClick = () => {
    clickSound.currentTime = 0;
    clickSound.play();
}