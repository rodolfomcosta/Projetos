export default function(){
    const buttonPress = new Audio("https://pixabay.com/pt/music/batidas-lofi-study-112191/")
    
    function pressButton(){
        buttonPress.play()
    }
    return {
        pressButton
    }
}

//..\sound\lofi-study-112191.mp3