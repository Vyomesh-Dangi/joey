const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}


function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Master");
    }

    else if(hr == 12) {
        speak("Good noon Master");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Master");
    }

    else {
        speak("Good Evening Master");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Joey");
    speak("Going online");
    wishMe();
    speak("How can I help you !");
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said, or I am not coded for that currently";

    if(message.includes('hey') || message.includes('hello') || message.includes('hi')) {
        const finalText = "Hello Master";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine Master tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('i am not feeling good') || message.includes(' i am bored ' ) || message.includes(' i want to relax ' )) {
        const finalText = "I got a solution for it!!!!" ;
        window.open("https://www.youtube.com/watch?v=5Eqb_-j3FDA", "_blank");
        
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is Joey, any doubts!";
        speech.text = finalText;
    }

    else if(message.includes('are you there')) {
        const finalText = "yes master, I am here";
        speech.text = finalText;
    }

    else if(message.includes('what do you like to eat')) {
        const finalText = "I like to eat Internet !!! , NOM NOM NOM";
        speech.text = finalText;
    } 

    else if(message.includes('battery')) {
        const finalText = "Master, the current battery level is (battery.level)";
        speech.text = finalText;
    } 

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google !";
        speech.text = finalText;
    }

    else if(message.includes('instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram !";
        speech.text = finalText;
    }

    else if(message.includes('youtube')) {
        window.open("https://youtube.com", "_blank");
        const finalText = "Opening youtube !";
        speech.text = finalText;
    }

    else if(message.includes('facebook')) {
        window.open("https://www.facebook.com/", "_blank");
        const finalText = "Opening facebook !";
        speech.text = finalText;
    }

    else if(message.includes('whatsapp')) {
        window.open("https://www.whatsapp.com/", "_blank");
        const finalText = "Opening Whatsapp !";
        speech.text = finalText;
    }

    else if(message.includes('wechat')) {
        window.open("https://play.google.com/store/apps/details?id=com.tencent.mm&hl=en_IN&gl=US", "_blank");
        const finalText = "Opening wechat !";
        speech.text = finalText;
    }
    
    else if(message.includes('telegram')) {
        window.open("https://telegram.org/", "_blank");
        const finalText = "Opening telegram !";
        speech.text = finalText;
    }
    
    else if(message.includes('linkedin')) {
        window.open("https://www.linkedin.com/?trk=public_post_nav-header-logo", "_blank");
        const finalText = "Opening linkedin !";
        speech.text = finalText;
    }

    else if(message.includes('twitter')) {
        window.open("https://twitter.com/i/flow/login", "_blank");
        const finalText = "Opening twitter !";
        speech.text = finalText;
    }

    else if(message.includes('amazon')) {
        window.open("https://www.amazon.com/", "_blank");
        const finalText = "Opening Amazon !";
        speech.text = finalText;
    }

    else if(message.includes('flipkart')) {
        window.open("https://www.flipkart.com/", "_blank");
        const finalText = "Opening flipkart !";
        speech.text = finalText;
    }

    else if(message.includes('map') || message.includes('location')){
        window.open("https://www.google.co.in/maps/@28.6389613,77.0219015,15z", "_blank");
        const finalText = "Opening google maps !";
        speech.text = finalText;
    }

    else if(message.includes('domino')){
        window.open("https://pizzaonline.dominos.co.in/?src=sem_bing_brand&utm_source=bing&utm_medium=cpc&msclkid=54c6827b02441b46dcebe0c1b623db2c&utm_campaign=Brand%20-%207%20Days%20-%20RLSA%20-%202016%20-%20%5BS%5D-Desktop%20-%20Exact&utm_term=%2Bdomino%27s%20%2Bpizza&utm_content=Pizza", "_blank");
        const finalText = "Opening dominos !";
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are') || message.includes('google')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('play')) {
        window.open(`https://www.youtube.com/results?search_query=${message.replace("play", "+")}`, "_blank");
        const finalText = "This is what i found on youtube regarding " + message;
        speech.text = finalText;
    }


    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else if(message.includes('excel')) {
        window.open('Excel://')
        const finalText = "Opening excel !";
        speech.text = finalText;
    }
    

    speech.volume = 200;
    speech.pitch = 90000;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}