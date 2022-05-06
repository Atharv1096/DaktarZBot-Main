// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Tell us about your symptom "
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = UserAction(userText);
      if (botResponse[0]=='out of bound') {}
      else {
        let botHtmlstring = '<h4 class="botText"><span> To find accurate results please choose one symptom from the following </span></h4>'
        $("#chatbox").append(botHtmlstring);
      }

    for (let x of botResponse) {
      if (x== 'out of bound'){
        let botHtml = '<p class="botText"><span> Please enter again </span></p>'
        $("#chatbox").append(botHtml);
      }
      else{
        let botHtml = '<div class="bn3"> <input type="radio" name= "symptom" id="'+x+'" value="'+x+'"> <label for="'+x+'">'+x+'</label></div>'
        //let botHtml = '<a href="#" class="bn3">' + x + '</a>';
        $("#chatbox").append(botHtml);
      }

    }


    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getHardResponsever2(userText) {
    let botResponse = UserAction(userText);
      if (botResponse[0]=='out of bound') {}
      else {
        let botHtmlstring = '<h4 class="botText"><span> Please choose one symptom from the following </span></h4>'
        $("#chatbox").append(botHtmlstring);
      }

    for (let x of botResponse) {
      if (x== 'out of bound'){
        let botHtml = '<p class="botText"><span> Please enter again </span></p>'
        $("#chatbox").append(botHtml);
      }
      else{
        let botHtml = '<div class="bn3"> <input type="radio" name= "symptom2" id="'+x+'2" value="'+x+'"> <label for="'+x+'2">'+x+'</label></div>'
        //let botHtml = '<a href="#" class="bn3">' + x + '</a>';
        $("#chatbox").append(botHtml);
      }

    }


    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getHardResponsever3(userText) {
    let botResponse = UserAction(userText);
      if (botResponse[0]=='out of bound') {}
      else {
        let botHtmlstring = '<h4 class="botText"><span> Please choose one symptom from the following </span></h4>'
        $("#chatbox").append(botHtmlstring);
      }

    for (let x of botResponse) {
      if (x== 'out of bound'){
        let botHtml = '<p class="botText"><span> Please enter again </span></p>'
        $("#chatbox").append(botHtml);
      }
      else{
        let botHtml = '<div class="bn3"> <input type="radio" name= "symptom3" id="'+x+'3" value="'+x+'"> <label for="'+x+'3">'+x+'</label></div>'
        //let botHtml = '<a href="#" class="bn3">' + x + '</a>';
        $("#chatbox").append(botHtml);
      }

    }


    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getHardResponse2(radioinput) {
    let botResponse = UserAction2(radioinput)
      let botHtmlstring = '<h4 class="botText"><span>Do you have one of this symptoms</span></h4>'
      $("#chatbox").append(botHtmlstring);
    for (let x of botResponse) {
        let botHtml = '<div class="bn3"> <input type="radio" name= "similarsymptom" id="similar' + x + '" value="' + x + '"> <label for="similar' + x + '">' + x + '</label></div>'
        //let botHtml = '<a href="#" class="bn3">' + x + '</a>';
        $("#chatbox").append(botHtml);


    }


    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getHardResponse3(radioinput) {
    let actualradioinput2 = $('input[name="similarsymptom"]:checked').val();
    let actualradioinput = $('input[name="symptom"]:checked').val();
    let botResponse = UserAction2(radioinput)
    for( var i = 0; i < botResponse.length; i++){

        if ( botResponse[i] === actualradioinput) {

            botResponse.splice(i, 1);
        }

    }

    console.log(botResponse)
      let botHtmlstring = '<h4 class="botText"><span>Do you have one of this symptoms</span></h4>'
      $("#chatbox").append(botHtmlstring);
    for (let x of botResponse) {
        let botHtml = '<div class="bn3"> <input type="radio" name= "similarsymptom2" id="similar' + x + '2" value="' + x + '"> <label for="similar' + x + '2">' + x + '</label></div>'
        //let botHtml = '<a href="#" class="bn3">' + x + '</a>';
        $("#chatbox").append(botHtml);


    }


    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getHardResponse302(radioinput) {
    let actualradioinput2 = $('input[name="similarsymptom"]:checked').val();
    let actualradioinput = $('input[name="symptom"]:checked').val();
    let botResponse = UserAction2(radioinput)
    for( var i = 0; i < botResponse.length; i++){

        if ( botResponse[i] === actualradioinput) {

            botResponse.splice(i, 1);
        }

    }

    console.log(botResponse)
      let botHtmlstring = '<h4 class="botText"><span>Do you have one of this symptoms</span></h4>'
      $("#chatbox").append(botHtmlstring);
    for (let x of botResponse) {
        let botHtml = '<div class="bn3"> <input type="radio" name= "similarsymptom21" id="similar' + x + '21" value="' + x + '"> <label for="similar' + x + '21">' + x + '</label></div>'
        //let botHtml = '<a href="#" class="bn3">' + x + '</a>';
        $("#chatbox").append(botHtml);


    }


    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getHardResponse30(radioinput) {
    let actualradioinput2 = $('input[name="similarsymptom"]:checked').val();
    let actualradioinput = $('input[name="symptom"]:checked').val();
    let botResponse = UserAction(radioinput)
    for( var i = 0; i < botResponse.length; i++){

        if ( botResponse[i] === actualradioinput) {

            botResponse.splice(i, 1);
        }

    }

    console.log(botResponse)
      let botHtmlstring = '<h4 class="botText"><span>Do you have one of this symptoms</span></h4>'
      $("#chatbox").append(botHtmlstring);
    for (let x of botResponse) {
        let botHtml = '<div class="bn3"> <input type="radio" name= "similarsymptom20" id="similar' + x + '20" value="' + x + '"> <label for="similar' + x + '20">' + x + '</label></div>'
        //let botHtml = '<a href="#" class="bn3">' + x + '</a>';
        $("#chatbox").append(botHtml);


    }


    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getHardResponse301(userText) {
  let botResponse = UserAction(userText);
    if (botResponse[0]=='out of bound') {}
    else {
      let botHtmlstring = '<h4 class="botText"><span> Please choose one symptom from the following </span></h4>'
      $("#chatbox").append(botHtmlstring);
    }

  for (let x of botResponse) {
    if (x== 'out of bound'){
      let botHtml = '<p class="botText"><span> Please enter again </span></p>'
      $("#chatbox").append(botHtml);
    }
    else{
      let botHtml = '<div class="bn3"> <input type="radio" name= "symptom201" id="'+x+'201" value="'+x+'"> <label for="'+x+'201">'+x+'</label></div>'
      //let botHtml = '<a href="#" class="bn3">' + x + '</a>';
      $("#chatbox").append(botHtml);
    }

  }




  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getHardResponse309(userText) {
  let botResponse = UserAction(userText);
    if (botResponse[0]=='out of bound') {}
    else {
      let botHtmlstring = '<h4 class="botText"><span> Please choose one symptom from the following </span></h4>'
      $("#chatbox").append(botHtmlstring);
    }

  for (let x of botResponse) {
    if (x== 'out of bound'){
      let botHtml = '<p class="botText"><span> Please enter again </span></p>'
      $("#chatbox").append(botHtml);
    }
    else{
      let botHtml = '<div class="bn3"> <input type="radio" name= "symptom209" id="'+x+'209" value="'+x+'"> <label for="'+x+'209">'+x+'</label></div>'
      //let botHtml = '<a href="#" class="bn3">' + x + '</a>';
      $("#chatbox").append(botHtml);
    }

  }

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getHardResponse300(radioinput) {
    let actualradioinput2 = $('input[name="similarsymptom"]:checked').val();
    let actualradioinput = $('input[name="symptom"]:checked').val();
    let botResponse = UserAction2(radioinput)
    for( var i = 0; i < botResponse.length; i++){

        if ( botResponse[i] === actualradioinput) {

            botResponse.splice(i, 1);
        }

    }

    console.log(botResponse)
      let botHtmlstring = '<h4 class="botText"><span>Do you have one of this symptoms</span></h4>'
      $("#chatbox").append(botHtmlstring);
    for (let x of botResponse) {
        let botHtml = '<div class="bn3"> <input type="radio" name= "similarsymptom222" id="similar' + x + '222" value="' + x + '"> <label for="similar' + x + '222">' + x + '</label></div>'
        //let botHtml = '<a href="#" class="bn3">' + x + '</a>';
        $("#chatbox").append(botHtml);


    }


    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getHardResponse32(radioinput) {
    let actualradioinput2 = $('input[name="similarsymptom"]:checked').val();
    let actualradioinput = $('input[name="symptom"]:checked').val();
    let botResponse = UserAction2(radioinput)
    for( var i = 0; i < botResponse.length; i++){

        if ( botResponse[i] === actualradioinput) {

            botResponse.splice(i, 1);
        }

    }

    console.log(botResponse)
      let botHtmlstring = '<h4 class="botText"><span>Do you have one of this symptoms</span></h4>'
      $("#chatbox").append(botHtmlstring);
    for (let x of botResponse) {
        let botHtml = '<div class="bn3"> <input type="radio" name= "similarsymptom22" id="similar' + x + '22" value="' + x + '"> <label for="similar' + x + '22">' + x + '</label></div>'
        //let botHtml = '<a href="#" class="bn3">' + x + '</a>';
        $("#chatbox").append(botHtml);


    }


    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getHardResponse33(radioinput) {
    let actualradioinput2 = $('input[name="similarsymptom"]:checked').val();
    let actualradioinput = $('input[name="symptom"]:checked').val();
    let botResponse = UserAction2(radioinput)
    for( var i = 0; i < botResponse.length; i++){

        if ( botResponse[i] === actualradioinput) {

            botResponse.splice(i, 1);
        }

    }

    console.log(botResponse)
      let botHtmlstring = '<h4 class="botText"><span>Do you have one of this symptoms</span></h4>'
      $("#chatbox").append(botHtmlstring);
    for (let x of botResponse) {
        let botHtml = '<div class="bn3"> <input type="radio" name= "similarsymptom23" id="similar' + x + '23" value="' + x + '"> <label for="similar' + x + '23">' + x + '</label></div>'
        //let botHtml = '<a href="#" class="bn3">' + x + '</a>';
        $("#chatbox").append(botHtml);


    }


    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getHardResponse4(radioinput) {
    let actualradioinput2 = $('input[name="similarsymptom"]:checked').val();
    let actualradioinput = $('input[name="symptom"]:checked').val();
    let botResponse = UserAction2(radioinput)
    for( var i = 0; i < botResponse.length; i++){

        if ( botResponse[i] === actualradioinput) {

            botResponse.splice(i, 1);
        }

    }
    for( var i = 0; i < botResponse.length; i++){

        if ( botResponse[i] === actualradioinput2) {

            botResponse.splice(i, 1);
        }

    }

    //console.log(botResponse)
      let botHtmlstring = '<h4 class="botText"><span>Do you have one of this symptoms</span></h4>'
      $("#chatbox").append(botHtmlstring);
    for (let x of botResponse) {
        let botHtml = '<div class="bn3"> <input type="radio" name= "similarsymptom3" id="similar' + x + '3" value="' + x + '"> <label for="similar' + x + '3">' + x + '</label></div>'
        //let botHtml = '<a href="#" class="bn3">' + x + '</a>';
        $("#chatbox").append(botHtml);


    }


    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getHardResponse5(radioinput) {
    let actualradioinput3 = $('input[name="similarsymptom2"]:checked').val();
    let actualradioinput2 = $('input[name="similarsymptom"]:checked').val();
    let actualradioinput = $('input[name="symptom"]:checked').val();
    let botResponse = UserAction2(radioinput)
    for( var i = 0; i < botResponse.length; i++){

        if ( botResponse[i] === actualradioinput) {

            botResponse.splice(i, 1);
        }

    }
    for( var i = 0; i < botResponse.length; i++){

        if ( botResponse[i] === actualradioinput2) {

            botResponse.splice(i, 1);
        }

    }
    for( var i = 0; i < botResponse.length; i++){

        if ( botResponse[i] === actualradioinput3) {

            botResponse.splice(i, 1);
        }

    }

    //console.log(botResponse)
    let botHtmlstring = '<h4 class="botText"><span>Do you have one of this symptoms</span></h4>'
    $("#chatbox").append(botHtmlstring);
    for (let x of botResponse) {
        let botHtml = '<div class="bn3"> <input type="radio" name= "similarsymptom4" id="similar' + x + '4" value="' + x + '"> <label for="similar' + x + '4">' + x + '</label></div>'
        //let botHtml = '<a href="#" class="bn3">' + x + '</a>';
        $("#chatbox").append(botHtml);


    }


    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getHardResponse20(radioinput) {
    let actualradioinput3 = $('input[name="similarsymptom2"]:checked').val();
    let actualradioinput2 = $('input[name="similarsymptom"]:checked').val();
    let actualradioinput = $('input[name="symptom"]:checked').val();
    let botResponse = UserAction2(radioinput)
    for( var i = 0; i < botResponse.length; i++){

        if ( botResponse[i] === actualradioinput) {

            botResponse.splice(i, 1);
        }

    }
    for( var i = 0; i < botResponse.length; i++){

        if ( botResponse[i] === actualradioinput2) {

            botResponse.splice(i, 1);
        }

    }

    //console.log(botResponse)
    let botHtmlstring = '<h4 class="botText"><span>Do you have one of this symptoms</span></h4>'
    $("#chatbox").append(botHtmlstring);
    for (let x of botResponse) {
        let botHtml = '<div class="bn3"> <input type="radio" name= "similarsymptom4" id="similar' + x + '4" value="' + x + '"> <label for="similar' + x + '4">' + x + '</label></div>'
        //let botHtml = '<a href="#" class="bn3">' + x + '</a>';
        $("#chatbox").append(botHtml);


    }


    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getHardResponse209(radioinput) {
    let actualradioinput3 = $('input[name="similarsymptom2"]:checked').val();
    let actualradioinput2 = $('input[name="similarsymptom"]:checked').val();
    let actualradioinput = $('input[name="symptom"]:checked').val();
    let botResponse = UserAction2(radioinput)
    for( var i = 0; i < botResponse.length; i++){

        if ( botResponse[i] === actualradioinput) {

            botResponse.splice(i, 1);
        }

    }


    //console.log(botResponse)
    let botHtmlstring = '<h4 class="botText"><span>Do you have one of this symptoms</span></h4>'
    $("#chatbox").append(botHtmlstring);
    for (let x of botResponse) {
        let botHtml = '<div class="bn3"> <input type="radio" name= "similarsymptom209" id="similar' + x + '209" value="' + x + '"> <label for="similar' + x + '209">' + x + '</label></div>'
        //let botHtml = '<a href="#" class="bn3">' + x + '</a>';
        $("#chatbox").append(botHtml);


    }


    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function gethardresponseperiod() {
    let periodarr = ['Less than a day','1 to 7 days','More than a week','More than a month','More than 6 months','More than a year']

    //console.log(botResponse)
    let botHtmlstring = '<h4 class="botText"><span>From how recently are you expressing all this symptoms</span></h4>'
    $("#chatbox").append(botHtmlstring);
    for (let x of periodarr) {
        let botHtml = '<div class="bn3"> <input type="radio" name= "period" id="period' + x + '" value="' + x + '"> <label for="period' + x + '">' + x + '</label></div>'
        //let botHtml = '<a href="#" class="bn3">' + x + '</a>';
        $("#chatbox").append(botHtml);


    }


    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    /*if (userText == "") {
        userText = "I love Daktarz!";
    }*/

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
    
    $("#textInput").val("");
    //let m = $("#textInput").val("");
    let n = UserAction(userText);
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

     
      setTimeout(() => {
        getHardResponse(userText);
        if (n[0] == 'out of bound') { replace('inputdiv1', 'inputdiv1');}
        else { replace('inputdiv1', 'inputdiv2');}
      }, 1000)
    
    
}

function getResponse2() {
    let userText = $("#textInput2").val();

    if (userText == "") {
        userText = "I love Daktarz!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput2").val("");
    let n = UserAction(userText);
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

      setTimeout(() => {
        getHardResponsever2(userText);
        if (n[0] == 'out of bound') { replace('inputdiv4', 'inputdiv4'); }
        else { replace('inputdiv4', 'inputdiv62'); }
      }, 1000)

    /*setTimeout(() => {
        getHardResponsever2(userText);
    }, 1000)*/

}

function getResponse3() {
    let userText = $("#textInput3").val();

    if (userText == "") {
        userText = "I love Daktarz!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput3").val("");
    let n = UserAction(userText);
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

      setTimeout(() => {
        getHardResponsever3(userText);
        if (n[0] == 'out of bound') { replace('inputdiv5', 'inputdiv5'); }
        else { replace('inputdiv5', 'inputdiv72'); }
      }, 1000)
    /*setTimeout(() => {
        getHardResponsever3(userText);
    }, 1000)*/

}

function getResponse30() {
    let userText = $("#textInput30").val();

    if (userText == "") {
        userText = "I love Daktarz!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput30").val("");
    let n = UserAction(userText);
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

      setTimeout(() => {
        getHardResponse30(userText);
        if (n[0] == 'out of bound') { replace('inputdiv50', 'inputdiv50'); }
        else { replace('inputdiv50', 'inputdiv7200'); }
      }, 1000)

    /*setTimeout(() => {
        getHardResponse30(userText);
    }, 1000)*/

}

function getResponse4() {
    let userText = $("#textInput4").val();

    if (userText == "") {
        userText = "I love Daktarz!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput4").val("");
    let n = UserAction(userText);
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

      setTimeout(() => {
        getHardResponsever3(userText);
        if (n[0] == 'out of bound') { replace('inputdiv52', 'inputdiv52'); }
        else { replace('inputdiv52', 'inputdiv76'); }
      }, 1000)

    /*setTimeout(() => {
        getHardResponsever3(userText);
    }, 1000)*/

}

function getResponse5() {
    let userText = $("#textInput5").val();

    if (userText == "") {
        userText = "I love Daktarz!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput5").val("");
    let n = UserAction(userText);
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

      setTimeout(() => {
        getHardResponsever3(userText);
        if (n[0] == 'out of bound') { replace('inputdiv53', 'inputdiv53'); }
        else { replace('inputdiv53', 'inputdiv77'); }
      }, 1000)

    /*setTimeout(() => {
        getHardResponsever3(userText);
    }, 1000)*/

}

function getResponse6() {
    let userText = $("#textInput6").val();

    if (userText == "") {
        userText = "I love Daktarz!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput6").val("");
    let n = UserAction(userText);
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

        setTimeout(() => {
          getHardResponsever3(userText);
          if (n[0] == 'out of bound') { replace('inputdiv54', 'inputdiv54'); }
          else { replace('inputdiv54', 'inputdiv78'); }
        }, 1000)

    /*setTimeout(() => {
        getHardResponsever3(userText);
    }, 1000)*/

}

function getResponse7() {
    let userText = $("#textInput7").val();

    if (userText == "") {
        userText = "I love Daktarz!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput7").val("");
    let n = UserAction(userText);
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

        setTimeout(() => {
          getHardResponse301(userText);
          if (n[0] == 'out of bound') { replace('inputdiv500', 'inputdiv500'); }
          else { replace('inputdiv500', 'inputdiv60'); }
        }, 1000)

    /*setTimeout(() => {
        getHardResponse301(userText);
    }, 1000)*/

}

function getResponse9() {
    let userText = $("#textInput9").val();

    if (userText == "") {
        userText = "I love Daktarz!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput9").val("");
    let n = UserAction(userText);
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

        setTimeout(() => {
          getHardResponse309(userText);
          if (n[0] == 'out of bound') { replace('inputdiv502', 'inputdiv502'); }
          else { replace('inputdiv502', 'inputdiv69'); }
        }, 1000)

    /*setTimeout(() => {
        getHardResponse309(userText);
    }, 1000)*/

}

function getResponse8() {
    let userText = $("#textInput8").val();

    if (userText == "") {
        userText = "I love Daktarz!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput8").val("");
    let n = UserAction(userText);
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

        setTimeout(() => {
          getHardResponse301(userText);
          if (n[0] == 'out of bound') { replace('inputdiv500', 'inputdiv500'); }
          else { replace('inputdiv500', 'inputdiv60'); }
        }, 1000)

    /*setTimeout(() => {
        getHardResponse301(userText);
    }, 1000)*/

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRadioValue() {
    let radioinput = $('input[name="symptom"]:checked').val();
    console.log(radioinput);
    let userHtml = '<p class="userText"><span>' + radioinput + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    setTimeout(() => {
        getHardResponse2(radioinput);
        replace('inputdiv2','inputdiv3');
    }, 1000)
}

/*function getRadioValue2() {
    let radioinput2 = $('input[name="similarsymptom"]:checked').val();
    console.log(radioinput2);
    let userHtml = '<p class="userText"><span>' + radioinput2 + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    setTimeout(() => {
        getHardResponse3(radioinput2);
    }, 1000)
}*/

function getRadioValue2() {
    let radioinput2 = $('input[name="similarsymptom"]:checked').val();
    console.log(radioinput2);
    let userHtml = '<p class="userText"><span>' + radioinput2 + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    if (radioinput2 == "None of the above") {
      replace('inputdiv3','inputdiv4')
    }
    else {
      setTimeout(() => {
          getHardResponse3(radioinput2);
          replace('inputdiv3','inputdiv8');
      }, 1000)
    }
}

function getRadioValue20() {
    let radioinput2 = $('input[name="symptom201"]:checked').val();
    console.log(radioinput2);
    let userHtml = '<p class="userText"><span>' + radioinput2 + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    if (radioinput2 == "None of the above") {
      replace('inputdiv60','inputdiv501')
    }
    else {
      setTimeout(() => {
          getHardResponse302(radioinput2);
          replace('inputdiv60','inputdiv61');
      }, 1000)
    }
}

function getRadioValue201() {
    let radioinput2 = $('input[name="similarsymptom21"]:checked').val();
    console.log(radioinput2);
    let userHtml = '<p class="userText"><span>' + radioinput2 + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    if (radioinput2 == "None of the above") {
      replace('inputdiv61','inputdiv502')
    }
    else {
      setTimeout(() => {
          gethardresponseperiod();
          replace('inputdiv61','period');
      }, 1000)
    }
}

function getRadioValue22() {
    let radioinput2 = $('input[name="symptom2"]:checked').val();
    console.log(radioinput2);
    let userHtml = '<p class="userText"><span>' + radioinput2 + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    if (radioinput2 == "None of the above") {
      replace('inputdiv8','inputdiv4')
    }
    else {
      setTimeout(() => {
          getHardResponse300(radioinput2);
          replace('inputdiv62','inputdiv750');
      }, 1000)
    }
}

function getRadioValue23() {
    let radioinput2 = $('input[name="symptom3"]:checked').val();
    console.log(radioinput2);
    let userHtml = '<p class="userText"><span>' + radioinput2 + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    if (radioinput2 == "None of the above") {
      replace('inputdiv72','inputdiv4')
    }
    else {
      setTimeout(() => {
          getHardResponse20(radioinput2)
          replace('inputdiv72','inputdiv720');
      }, 1000)
    }
}

function getRadioValue230() {
    let radioinput2 = $('input[name="similarsymptom4"]:checked').val();
    console.log(radioinput2);
    let userHtml = '<p class="userText"><span>' + radioinput2 + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    if (radioinput2 == "None of the above") {
      replace('inputdiv720','inputdiv50')
    }
    else {
      setTimeout(() => {
          gethardresponseperiod()
          replace('inputdiv720','period');
      }, 1000)
    }
}

function getRadioValue2300() {
    let radioinput2 = $('input[name="similarsymptom20"]:checked').val();
    console.log(radioinput2);
    let userHtml = '<p class="userText"><span>' + radioinput2 + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    if (radioinput2 == "None of the above") {
      replace('inputdiv7200','period')
    }
    else {
      setTimeout(() => {
          gethardresponseperiod()
          replace('inputdiv7200','period');
      }, 1000)
    }
}

function getRadioValue231() {
    let radioinput2 = $('input[name="symptom3"]:checked').val();
    console.log(radioinput2);
    let userHtml = '<p class="userText"><span>' + radioinput2 + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    if (radioinput2 == "None of the above") {
      replace('inputdiv721','inputdiv4')
    }
    else {
      setTimeout(() => {
          getHardResponse3(radioinput2);
          replace('inputdiv721','inputdiv20');
      }, 1000)
    }
}



function getRadioValue24() {
    let radioinput2 = $('input[name="similarsymptom22"]:checked').val();
    console.log(radioinput2);
    let userHtml = '<p class="userText"><span>' + radioinput2 + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    if (radioinput2 == "None of the above") {
      replace('inputdiv73','inputdiv5')
    }
    else {
      setTimeout(() => {

          replace('inputdiv73','inputdiv20');
      }, 1000)
    }
}

function getRadioValue25() {
    let radioinput2 = $('input[name="similarsymptom23"]:checked').val();
    console.log(radioinput2);
    let userHtml = '<p class="userText"><span>' + radioinput2 + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    if (radioinput2 == "None of the above") {
      replace('inputdiv74','inputdiv5')
    }
    else {
      setTimeout(() => {
          getHardResponse3(radioinput2);
          replace('inputdiv74','inputdiv20');
      }, 1000)
    }
}

function getRadioValue26() {
    let radioinput2 = $('input[name="similarsymptom2"]:checked').val();
    console.log(radioinput2);
    let userHtml = '<p class="userText"><span>' + radioinput2 + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    if (radioinput2 == "None of the above") {
      replace('inputdiv75','period')
    }
    else {
      setTimeout(() => {

          replace('inputdiv75','period')
          gethardresponseperiod()
      }, 1000)
    }
}

function getRadioValue260() {
    let radioinput2 = $('input[name="similarsymptom222"]:checked').val();
    console.log(radioinput2);
    let userHtml = '<p class="userText"><span>' + radioinput2 + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    if (radioinput2 == "None of the above") {
      replace('inputdiv750','inputdiv500')
    }
    else {
      setTimeout(() => {

          replace('inputdiv750','period')
          gethardresponseperiod()
      }, 1000)
    }
}

function getRadioValue27() {
    let radioinput2 = $('input[name="symptom3"]:checked').val();
    console.log(radioinput2);
    let userHtml = '<p class="userText"><span>' + radioinput2 + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    if (radioinput2 == "None of the above") {
      replace('inputdiv76','inputdiv4')
    }
    else {
      setTimeout(() => {
          getHardResponse32(radioinput2);
          replace('inputdiv76','inputdiv73');
      }, 1000)
    }
}

function getRadioValue28() {
    let radioinput2 = $('input[name="symptom3"]:checked').val();
    console.log(radioinput2);
    let userHtml = '<p class="userText"><span>' + radioinput2 + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    if (radioinput2 == "None of the above") {
      replace('inputdiv77','inputdiv4')
    }
    else {
      setTimeout(() => {
          getHardResponse32(radioinput2);
          replace('inputdiv77','inputdiv73');
      }, 1000)
    }
}

function getRadioValue29() {
    let radioinput2 = $('input[name="symptom3"]:checked').val();
    console.log(radioinput2);
    let userHtml = '<p class="userText"><span>' + radioinput2 + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    if (radioinput2 == "None of the above") {
      replace('inputdiv79','inputdiv20')
    }
    else {
      setTimeout(() => {
          replace('inputdiv79','inputdiv20');
      }, 1000)
    }
}

function getRadioValue209() {
    let radioinput2 = $('input[name="symptom209"]:checked').val();
    console.log(radioinput2);
    let userHtml = '<p class="userText"><span>' + radioinput2 + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    if (radioinput2 == "None of the above") {
      replace('inputdiv69','period')
    }
    else {
      setTimeout(() => {
          getHardResponse209(radioinput2);
          replace('inputdiv69','inputdiv209');
      }, 1000)
    }
}

function getRadioValue210() {
    let radioinput2 = $('input[name="similarsymptom209"]:checked').val();
    console.log(radioinput2);
    let userHtml = '<p class="userText"><span>' + radioinput2 + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    if (radioinput2 == "None of the above") {
      setTimeout(() => {
          gethardresponseperiod()
          replace('inputdiv209','period');
      }, 1000)
    }
    else {
      setTimeout(() => {
          gethardresponseperiod()
          replace('inputdiv209','period');
      }, 1000)
    }
}

function getperiod() {
    let periodval = $('input[name="period"]:checked').val();
    console.log(periodval);
    let userHtml = '<p class="userText"><span>' + periodval + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    setTimeout(() => {
        replace('period','final');
      }, 1000)

}

function getRadioValue3() {
    let radioinput3 = $('input[name="similarsymptom2"]:checked').val();
    console.log(radioinput3);
    let userHtml = '<p class="userText"><span>' + radioinput3 + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    if (radioinput3 == "None of the above") {
      replace('inputdiv8','inputdiv5')
    }
    else {
      setTimeout(() => {
          getHardResponse4(radioinput3);
          replace('inputdiv8','inputdiv9');
      }, 1000)
    }
}

function getRadioValue4() {
    let radioinput4 = $('input[name="similarsymptom3"]:checked').val();
    console.log(radioinput4);
    let userHtml = '<p class="userText"><span>' + radioinput4 + '</span></p>';
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    if (radioinput4 == "None of the above") {
      replace('inputdiv9','inputdiv4')
    }
    else {
      setTimeout(() => {

          replace('inputdiv9','period')
          gethardresponseperiod()

      }, 1000)
    }
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function yesnoresponse(val1,val2) {
  '<h4 class="botText"><span> Do you have other symptom </span></h4>'
  '<div class="bn3"> <input type="radio" name= "yesno" id="yes" value="yes"> <label for="yes">Yes</label></div>'
  '<div class="bn3"> <input type="radio" name= "yesno" id="no" value="no"> <label for="no">No</label></div>'
  let yesnovalue = $('input[name="similarsymptom3"]:checked').val();
  if (yesnovalue === "yes") {
    replace(val1,val2)
  }
}



function replace(val1, val2) {
    document.getElementById(val1).style.display = "none";
    document.getElementById(val2).style.display = "block";

}
function sendButton() {
    let radioinput = $('input[name="symptom"]:checked').val();
    getRadioValue();
    //replace('inputdiv2','inputdiv3');
}

function sendButton2() {
    let radioinput2 = $('input[name="similarsymptom"]:checked').val();
    getRadioValue2();
    //replace('inputdiv3','inputdiv8');
}

function sendButton20() {
    let radioinput2 = $('input[name="symptom201"]:checked').val();
    getRadioValue20();
    //replace('inputdiv3','inputdiv8');
}

function sendButton201() {
    let radioinput2 = $('input[name="similarsymptom21"]:checked').val();
    getRadioValue201();
    //replace('inputdiv3','inputdiv8');
}

function sendButton22() {
    let radioinput2 = $('input[name="symptom2"]:checked').val();
    getRadioValue22();
    //replace('inputdiv3','inputdiv8');
}

function sendButton23() {
    let radioinput2 = $('input[name="symptom3"]:checked').val();
    getRadioValue23();
    //replace('inputdiv3','inputdiv8');
}

function sendButton230() {
    let radioinput2 = $('input[name="similarsymptom4"]:checked').val();
    getRadioValue230();
    //replace('inputdiv3','inputdiv8');
}

function sendButton2300() {
    let radioinput2 = $('input[name="similarsymptom20"]:checked').val();
    getRadioValue2300();
    //replace('inputdiv3','inputdiv8');
}



function sendButton231() {
    let radioinput2 = $('input[name="symptom3"]:checked').val();
    getRadioValue231();
    //replace('inputdiv3','inputdiv8');
}

function sendButton24() {
    let radioinput2 = $('input[name="similarsymptom22"]:checked').val();
    getRadioValue24();
    //replace('inputdiv3','inputdiv8');
}

function sendButton25() {
    let radioinput2 = $('input[name="similarsymptom23"]:checked').val();
    getRadioValue25();
    //replace('inputdiv3','inputdiv8');
}

function sendButton26() {
    let radioinput2 = $('input[name="similarsymptom2"]:checked').val();
    getRadioValue26();
    //replace('inputdiv3','inputdiv8');
}

function sendButton260() {
    let radioinput2 = $('input[name="similarsymptom222"]:checked').val();
    getRadioValue260();
    //replace('inputdiv3','inputdiv8');
}

function sendButton27() {
    let radioinput2 = $('input[name="symptom3"]:checked').val();
    getRadioValue27();
    //replace('inputdiv3','inputdiv8');
}

function sendButton29() {
    let radioinput2 = $('input[name="symptom3"]:checked').val();
    getRadioValue29();
    //replace('inputdiv3','inputdiv8');
}

function sendButton209() {
    let radioinput2 = $('input[name="symptom209"]:checked').val();
    getRadioValue209();
    //replace('inputdiv3','inputdiv8');
}

function sendButton210() {
    let radioinput2 = $('input[name="similarsymptom209"]:checked').val();
    getRadioValue210();
    //replace('inputdiv3','inputdiv8');
}

function sendButton3() {
    let radioinput3 = $('input[name="similarsymptom2"]:checked').val();
    getRadioValue3();
    //replace('inputdiv8','inputdiv9');
}

function sendButton4() {
    let radioinput4 = $('input[name="similarsymptom3"]:checked').val();
    getRadioValue4();
}

function sendButtonreplacable() {
    getResponse();

    //replace('inputdiv1', 'inputdiv2');

    
}

function sendButtonreplacable2() {
    getResponse2();

    //replace('inputdiv4','inputdiv62');
}

function sendButtonreplacable3() {
    getResponse3();

    //replace('inputdiv5','inputdiv72');
}

function sendButtonreplacable30() {
    getResponse30();

    //replace('inputdiv50','inputdiv7200');
}

function sendButtonreplacable4() {
    getResponse4();

    //replace('inputdiv52','inputdiv76');
}

function sendButtonreplacable5() {
    getResponse5();

    //replace('inputdiv53','inputdiv77');
}

function sendButtonreplacable6() {
    getResponse6();

    //replace('inputdiv54','inputdiv78');
}

function sendButtonreplacable7() {
    getResponse7();

    //replace('inputdiv500','inputdiv60');
}

function sendButtonreplacable8() {
    getResponse8();

    replace('inputdiv500','inputdiv60');
}

function sendButtonreplacable9() {
    getResponse9();

    replace('inputdiv502','inputdiv69');
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

function VoiceAPI() {

  const startbtn = document.querySelector("#chat-icon1");
  const recognize = new webkitSpeechRecognition();
  recognize.continuous = true;
  recognize.lang = "en-US";
  recognize.interimResults = false;
  recognize.maxAlternatives = 1;

  //startbtn.addEventListener("click", () => {
  recognize.start();

  setTimeout(() => {  recognize.abort(); }, 10000);
  //});



  recognize.onresult = (e) => {
    const transcript = e.results[e.results.length - 1][0].transcript.trim();
    console.log(transcript)
    $("#textInput").val(transcript)
  }


}



// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
        //replace('inputdiv1','inputdiv2');
    }
});
$("#textInput2").keypress(function (e) {
    if (e.which == 13) {
        getResponse2();
        //replace('inputdiv4','inputdiv62');
    }
});
$("#textInput3").keypress(function (e) {
    if (e.which == 13) {
        getResponse3();
        //replace('inputdiv5','inputdiv7');
    }
});
$("#textInput4").keypress(function (e) {
    if (e.which == 13) {
        getResponse4();
        //replace('inputdiv52','inputdiv76');
    }
});
$("#textInput5").keypress(function (e) {
    if (e.which == 13) {
        getResponse5();
        //replace('inputdiv53','inputdiv77');
    }
});
$("#textInput6").keypress(function (e) {
    if (e.which == 13) {
        getResponse6();
        //replace('inputdiv54','inputdiv78');
    }
});
$("#textInput7").keypress(function (e) {
    if (e.which == 13) {
        getResponse7();
        //replace('inputdiv500','inputdiv60');
    }
});
$("#textInput8").keypress(function (e) {
    if (e.which == 13) {
        getResponse8();
        //replace('inputdiv500','inputdiv60');
    }
});
$("#textInput9").keypress(function (e) {
    if (e.which == 13) {
        getResponse9();
        //replace('inputdiv502','inputdiv69');
    }
});
$("#textInput30").keypress(function (e) {
    if (e.which == 13) {
        getResponse30();
        //replace('inputdiv50','inputdiv7200');
    }
});

//for checkboxes 

$("#div1").keypress(function (e) {
  if (e.which == 13) {
    replacemiddle();
  }
});

$("#inputdiv2").keypress(function (e) {
  if (e.which == 13) {
    sendButton();
  }
});

$("#inputdiv3").keypress(function (e) {
  if (e.which == 13) {
    sendButton2();
  }
});

$("#inputdiv8").keypress(function (e) {
  if (e.which == 13) {
    sendButton3();
  }
});

$("#inputdiv9").keypress(function (e) {
  if (e.which == 13) {
    sendButton4();
  }
});

$("#inputdiv6").keypress(function (e) {
  if (e.which == 13) {
    sendButton2();
  }
});

$("#inputdiv60").keypress(function (e) {
  if (e.which == 13) {
    sendButton20();
  }
});

$("#inputdiv69").keypress(function (e) {
  if (e.which == 13) {
    sendButton209();
  }
});

$("#inputdiv61").keypress(function (e) {
  if (e.which == 13) {
    sendButton201();
  }
});

$("#inputdiv62").keypress(function (e) {
  if (e.which == 13) {
    sendButton22();
  }
});

$("#inputdiv209").keypress(function (e) {
  if (e.which == 13) {
    sendButton210();
  }
});

$("#inputdiv7").keypress(function (e) {
  if (e.which == 13) {
    sendButton2();
  }
});

$("#inputdiv72").keypress(function (e) {
  if (e.which == 13) {
    sendButton23();
  }
});

$("#inputdiv720").keypress(function (e) {
  if (e.which == 13) {
    sendButton230();
  }
});

$("#inputdiv7200").keypress(function (e) {
  if (e.which == 13) {
    sendButton2300();
  }
});

$("#inputdiv721").keypress(function (e) {
  if (e.which == 13) {
    sendButton231();
  }
});

$("#inputdiv73").keypress(function (e) {
  if (e.which == 13) {
    sendButton24();
  }
});

$("#inputdiv74").keypress(function (e) {
  if (e.which == 13) {
    sendButton25();
  }
});

$("#inputdiv75").keypress(function (e) {
  if (e.which == 13) {
    sendButton26();
  }
});

$("#inputdiv750").keypress(function (e) {
  if (e.which == 13) {
    sendButton260();
  }
});

$("#inputdiv76").keypress(function (e) {
  if (e.which == 13) {
    sendButton27();
  }
});

$("#inputdiv77").keypress(function (e) {
  if (e.which == 13) {
    sendButton28();
  }
});

$("#inputdiv78").keypress(function (e) {
  if (e.which == 13) {
    sendButton29();
  }
});

$("#period").keypress(function (e) {
  if (e.which == 13) {
    getperiod();
  }
});



//Second function
function VoiceAPI2() {

  const startbtn = document.querySelector("#chat-icon1");
  const recognize = new webkitSpeechRecognition();
  recognize.continuous = true;
  recognize.lang = "en-US";
  recognize.interimResults = false;
  recognize.maxAlternatives = 1;

  //startbtn.addEventListener("click", () => {
  recognize.start();

  setTimeout(() => {  recognize.abort(); }, 10000);
  //});



  recognize.onresult = (e) => {
    const transcript = e.results[e.results.length - 1][0].transcript.trim();
    console.log(transcript)
    $("#textInput2").val(transcript)
  }


}




function VoiceAPI3() {

  const startbtn = document.querySelector("#chat-icon1");
  const recognize = new webkitSpeechRecognition();
  recognize.continuous = true;
  recognize.lang = "en-US";
  recognize.interimResults = false;
  recognize.maxAlternatives = 1;

  //startbtn.addEventListener("click", () => {
  recognize.start();

  setTimeout(() => {  recognize.abort(); }, 10000);
  //});



  recognize.onresult = (e) => {
    const transcript = e.results[e.results.length - 1][0].transcript.trim();
    console.log(transcript)
    $("#textInput3").val(transcript)
  }


}

function VoiceAPI4() {

  const startbtn = document.querySelector("#chat-icon1");
  const recognize = new webkitSpeechRecognition();
  recognize.continuous = true;
  recognize.lang = "en-US";
  recognize.interimResults = false;
  recognize.maxAlternatives = 1;

  //startbtn.addEventListener("click", () => {
  recognize.start();

  setTimeout(() => {  recognize.abort(); }, 10000);
  //});



  recognize.onresult = (e) => {
    const transcript = e.results[e.results.length - 1][0].transcript.trim();
    console.log(transcript)
    $("#textInput4").val(transcript)
  }


}

function VoiceAPI5() {

  const startbtn = document.querySelector("#chat-icon1");
  const recognize = new webkitSpeechRecognition();
  recognize.continuous = true;
  recognize.lang = "en-US";
  recognize.interimResults = false;
  recognize.maxAlternatives = 1;

  //startbtn.addEventListener("click", () => {
  recognize.start();

  setTimeout(() => {  recognize.abort(); }, 10000);
  //});



  recognize.onresult = (e) => {
    const transcript = e.results[e.results.length - 1][0].transcript.trim();
    console.log(transcript)
    $("#textInput5").val(transcript)
  }


}

function VoiceAPI30() {

  const startbtn = document.querySelector("#chat-icon1");
  const recognize = new webkitSpeechRecognition();
  recognize.continuous = true;
  recognize.lang = "en-US";
  recognize.interimResults = false;
  recognize.maxAlternatives = 1;

  //startbtn.addEventListener("click", () => {
  recognize.start();

  setTimeout(() => {  recognize.abort(); }, 10000);
  //});



  recognize.onresult = (e) => {
    const transcript = e.results[e.results.length - 1][0].transcript.trim();
    console.log(transcript)
    $("#textInput30").val(transcript)
  }


}

function VoiceAPI6() {

  const startbtn = document.querySelector("#chat-icon1");
  const recognize = new webkitSpeechRecognition();
  recognize.continuous = true;
  recognize.lang = "en-US";
  recognize.interimResults = false;
  recognize.maxAlternatives = 1;

  //startbtn.addEventListener("click", () => {
  recognize.start();

  setTimeout(() => {  recognize.abort(); }, 10000);
  //});



  recognize.onresult = (e) => {
    const transcript = e.results[e.results.length - 1][0].transcript.trim();
    console.log(transcript)
    $("#textInput6").val(transcript)
  }


}

function VoiceAPI7() {

  const startbtn = document.querySelector("#chat-icon1");
  const recognize = new webkitSpeechRecognition();
  recognize.continuous = true;
  recognize.lang = "en-US";
  recognize.interimResults = false;
  recognize.maxAlternatives = 1;

  //startbtn.addEventListener("click", () => {
  recognize.start();

  setTimeout(() => {  recognize.abort(); }, 10000);
  //});



  recognize.onresult = (e) => {
    const transcript = e.results[e.results.length - 1][0].transcript.trim();
    console.log(transcript)
    $("#textInput7").val(transcript)
  }


}

function VoiceAPI8() {

  const startbtn = document.querySelector("#chat-icon1");
  const recognize = new webkitSpeechRecognition();
  recognize.continuous = true;
  recognize.lang = "en-US";
  recognize.interimResults = false;
  recognize.maxAlternatives = 1;

  //startbtn.addEventListener("click", () => {
  recognize.start();

  setTimeout(() => {  recognize.abort(); }, 10000);
  //});



  recognize.onresult = (e) => {
    const transcript = e.results[e.results.length - 1][0].transcript.trim();
    console.log(transcript)
    $("#textInput8").val(transcript)
  }


}

function VoiceAPI9() {

  const startbtn = document.querySelector("#chat-icon1");
  const recognize = new webkitSpeechRecognition();
  recognize.continuous = true;
  recognize.lang = "en-US";
  recognize.interimResults = false;
  recognize.maxAlternatives = 1;

  //startbtn.addEventListener("click", () => {
  recognize.start();

  setTimeout(() => {  recognize.abort(); }, 10000);
  //});



  recognize.onresult = (e) => {
    const transcript = e.results[e.results.length - 1][0].transcript.trim();
    console.log(transcript)
    $("#textInput9").val(transcript)
  }


}


function replacemiddle(){
  let ip1 = $("#ip1").val()
  let ip2 = $("#ip2").val()
  let ip3 = $("#ip3").val()
  if (ip1 == "" || ip2 == "" || ip3 == ""){}
  else {
    replace('div1', 'divmiddle')
  }
   
}



function replacediv2() {
  replace('divmiddle','div2')
}

function replacediv3() {
  replace('divmiddle', 'div3')
}
/*function replacemain() {
    var fup = document.getElementById('myFile');
    var fileName = fup.value;
    var ext = fileName.substring(fileName.lastIndexOf('.') + 1);
    if (ext == "pdf") {
      replace('divmiddle', 'div2')
    }
    else {
      alert("Upload pdf files only");
      fup.focus();
      return false;
    }
  }*/