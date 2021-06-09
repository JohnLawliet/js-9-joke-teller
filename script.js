//main problem is that api takes lot of time to convert text to speech
//convert api key to process.environ variable

const audioElement = document.getElementById("audio")
const button = document.getElementById('button')
const loader = document.getElementById('loader')


const toggleButton = () => {
    button.disabled = !button.disabled
}

const test = (str) => {
    loader.classList.add("toggleElement")
    VoiceRSS.speech({
        key: 'ed7bc92de5094ec38dd47459918faf92',
        src: str,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

// test()

// Get joke from Joke api
const joker = async () => {
    let joke = ''
    try{
        toggleButton()
        loader.classList.remove("toggleElement")
        const apiUrl = "https://sv443.net/jokeapi/v2/joke/Programming" 
        const response = await fetch(apiUrl)
        const data = await response.json()
        
        data.type === "single" ?
        joke = data.joke :
        joke = `${data.setup} ... ${data.delivery}`        
        test(joke)
    }
    catch(error){
        console.log("whoopies ", error)
    }
}

//event listeners:
button.addEventListener('click',joker)
audioElement.addEventListener('ended',toggleButton)