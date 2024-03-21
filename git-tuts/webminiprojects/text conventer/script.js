let speech=new SpeechSynthesisUtterance();

document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech)
})




/*let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");
let textarea = document.querySelector("textarea");
let speakButton = document.querySelector("button");

// Check if speech synthesis is available
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            speech.voice = voices[0];
            voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
        }
    };

    // Change the voice when the user selects from the dropdown
    voiceSelect.addEventListener("change", () => {
        speech.voice = voices[voiceSelect.value];
    });

    // Speak the text when the button is clicked
    speakButton.addEventListener("click", () => {
        if (voices.length > 0) {
            speech.text = textarea.value;
            window.speechSynthesis.speak(speech);
        } else {
            console.error("No voices available");
        }
    });
} else {
    console.error("Speech synthesis not supported");
}
*/