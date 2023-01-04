var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;
var textbox = document.getElementById("textbox");
var Content;



function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;

    if(content =="Take My Selfie"){
       console.log("Taking Selfie in Five Seconds.");
            speak(); 
    }

}

function speak() {
    var synth = window.speechSynthesis;
    var speak_data = "Taking Your Selfie in Five Seconds";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot(speak_data);
        save();
        
    }, 5000);
    
        
    
}

camera = document.getElementById("camera");

Webcam.set({
    width: 360, 
    height: 250,
    image_format: 'png',
    png_quality: 90
})



function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">'
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();

}

 

function setTimeout(){


 imageID = "Selfie1";

    take_snapshot();

    speak_data = "The name's JayJay, and My Camera is taking your Photo in 10 seconds. Yes Computer assistants have names, and my cool name happens to be JayJay.";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

}, 5000);

function setTimeout(){


 imageID = "Selfie2";

    take_snapshot();

    speak_data = "The name's JayJay, and My Camera is taking your Photo in 10 seconds. Yes Computer assistants have names, and my cool name happens to be JayJay.";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

}, 5000);

function setTimeout(){


 imageID = "Selfie3";

    take_snapshot();

    speak_data = "The name's JayJay, and My Camera is taking your Photo in 10 seconds. Yes Computer assistants have names, and my cool name happens to be JayJay.";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

}, 5000);


function take_snapshot(){

    console.log(imageID);


    webcam.snap(function (data_uri) {

        if(imageID == "selfie1"){

        document.getElementById("Result1").innerHTML = '<img id = "selfie1" src="'+data_uri+'"/>';
    }

    if(imageID == "selfie2"){

        document.getElementById("Result2").innerHTML = '<img id = "selfie2" src="' +data_uri+'"/>';
    }

     if(imageID == "selfie3"){

     
        document.getElementsById("result3").innerHTML = '<img id = "selfie3" src="' +data_uri+ '"/>';

     }

});

}