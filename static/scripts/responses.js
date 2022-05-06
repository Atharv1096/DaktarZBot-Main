function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
    let questioninput = input

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}

function UserAction(input) {

    var json = JSON.stringify({
        "name": "Responsecode",
        "description": "",
        "questioninput": String(input),
        "renders": [
            "application/json",
            "text/html"
        ],
        "parses": [
            "application/json",
            "application/x-www-form-urlencoded",
            "multipart/form-data"
        ]
    })

    /*
    var output;
    var r = $.post('http://127.0.0.1:8000/response/', json, function(response){
      output = response;
      //output = String(output);
      console.log(output);
      return output;
    }, 'json').responseText;
    */
    //return r;

    jQuery.extend({
        getValues: function (url) {
            var result = null;
            $.ajax({
                url: url,
                type: 'post',
                data: json,
                dataType: 'json',
                async: false,
                success: function (data) {
                    result = data;
                }
            });
            return result;
        }
    });

    var results = $.getValues("http://127.0.0.1:8000/response/");
    console.log(typeof results);

    length = results.length;
    console.log(length);
    let sym;

    return results;
    /*results.forEach(function(result) {
        console.log(result);
        return result;
    });*/

    //return output;
    //console.log(function(response));
    //return String(r.json());
}


function UserAction2(input) {
    var json = JSON.stringify({
        "name": "Responsecode",
        "description": "",
        "radioinput": String(input),
        "renders": [
            "application/json",
            "text/html"
        ],
        "parses": [
            "application/json",
            "application/x-www-form-urlencoded",
            "multipart/form-data"
        ]
    })

    jQuery.extend({
        getValues: function (url) {
            var result = null;
            $.ajax({
                url: url,
                type: 'post',
                data: json,
                dataType: 'json',
                async: false,
                success: function (data) {
                    result = data;
                }
            });
            return result;
        }
    });

    var results = $.getValues("http://127.0.0.1:8000/response/");
    console.log(typeof results);

    length = results.length;
    console.log(length);
    let sym;
    results.push('None of the above')
    return results;

}


function getdiagnosis() {
    let fs1 = $('input[name="similarsymptom"]:checked').val();
    let fs2 = $('input[name="symptom"]:checked').val();
    let fs3 = $('input[name="similarsymptom2"]:checked').val();
    let fs4 = $('input[name="symptom2"]:checked').val();
    let fs5 = $('input[name="symptom3"]:checked').val();
    let fs6 = $('input[name="similarsymptom22"]:checked').val();
    let fs7 = $('input[name="similarsymptom23"]:checked').val();
    let fs8 = $('input[name="similarsymptom3"]:checked').val();
    let fs9 = $('input[name="symptom201"]:checked').val();
    let fs10 = $('input[name="symptom209"]:checked').val();
    let fs11 = $('input[name="similarsymptom21"]:checked').val();
    let fs12 = $('input[name="similarsymptom4"]:checked').val();
    let fs13 = $('input[name="similarsymptom20"]:checked').val();
    let fs14 = $('input[name="similarsymptom222"]:checked').val();
    let fs15 = $('input[name="similarsymptom209"]:checked').val();

    console.log(typeof (fs1))
    console.log(typeof (fs2))
    console.log(typeof (fs3))
    console.log(typeof (fs4))
    console.log(typeof (fs5))
    console.log(typeof (fs6))
    console.log(typeof (fs7))
    console.log(typeof (fs8))

    const finalsymptoms = [];

    if ((typeof (fs1) == 'undefined') || (fs1 == "None of the above")) { }
    else {
        finalsymptoms.push(fs1);
    }

    if ((typeof (fs2) == 'undefined') || (fs2 == "None of the above")) { }
    else {
        finalsymptoms.push(fs2);
    }

    if ((typeof (fs3) == 'undefined') || (fs3 == "None of the above")) { }
    else {
        finalsymptoms.push(fs3);
    }

    if ((typeof (fs4) == 'undefined') || (fs4 == "None of the above")) { }
    else {
        finalsymptoms.push(fs4);
    }

    if ((typeof (fs5) == 'undefined') || (fs5 == "None of the above")) { }
    else {
        finalsymptoms.push(fs5);
    }

    if ((typeof (fs6) == 'undefined') || (fs6 == "None of the above")) { }
    else {
        finalsymptoms.push(fs6);
    }

    if ((typeof (fs7) == 'undefined') || (fs7 == "None of the above")) { }
    else {
        finalsymptoms.push(fs7);
    }

    if ((typeof (fs8) == 'undefined') || (fs8 == "None of the above")) { }
    else {
        finalsymptoms.push(fs8);
    }
    if ((typeof (fs9) == 'undefined') || (fs9 == "None of the above")) { }
    else {
        finalsymptoms.push(fs9);
    }
    if ((typeof (fs10) == 'undefined') || (fs10 == "None of the above")) { }
    else {
        finalsymptoms.push(fs10);
    }
    if ((typeof (fs11) == 'undefined') || (fs11 == "None of the above")) { }
    else {
        finalsymptoms.push(fs1);
    }
    if ((typeof (fs12) == 'undefined') || (fs12 == "None of the above")) { }
    else {
        finalsymptoms.push(fs12);
    }
    if ((typeof (fs13) == 'undefined') || (fs13 == "None of the above")) { }
    else {
        finalsymptoms.push(fs13);
    }
    if ((typeof (fs14) == 'undefined') || (fs14 == "None of the above")) { }
    else {
        finalsymptoms.push(fs14);
    }
    if ((typeof (fs15) == 'undefined') || (fs15 == "None of the above")) { }
    else {
        finalsymptoms.push(fs15);
    }

    console.log(finalsymptoms)

    user_name = $("#ip1").val();
    phone_number = $("#ip2").val();
    user_age = $("#ip3").val();
    user_gender = $('input[name="gender"]:checked').val();
    period = $('input[name="period"]:checked').val();
    console.log(user_name, phone_number, user_age, user_gender);
    var json = JSON.stringify({
        "name": "Modelpredictions",
        "description": finalsymptoms,
        "user_name": user_name,
        "phone_number": phone_number,
        "user_age": user_age,
        "user_gender": user_gender,
        "renders": [
            "application/json",
            "text/html"
        ],
        "parses": [
            "application/json",
            "application/x-www-form-urlencoded",
            "multipart/form-data"
        ]
    })

    jQuery.extend({
        getValues: function (url) {
            var result = null;
            $.ajax({
                url: url,
                type: 'post',
                data: json,
                dataType: 'json',
                async: false,
                success: function (data) {
                    result = data;
                }
            });
            return result;
        }
    });

    var results = $.getValues("http://127.0.0.1:7000/modelpredictions/");
    console.log(typeof results);
    console.log(results)
    htmlresults = "<title>Report</title><h2>Your report:</h2><div class='myownclass'><h4>Name : " + user_name + "</h4><h4>Phone number : " + phone_number + "</h4><h4>Age : " + user_age + "</h4><h4>Gender : " + user_gender + "</h4><h4>Entered symptoms : " + finalsymptoms + "</h4><h4>For period of : " + period + "<h4 >Based on this data you might have <span class='resulth4'>" + results + "</span> please consult with your doctor.</h4> <a href='https://www.daktarz.com/telemedicine'><button class='button4'>Consult with our doctor now</button></a ></div> <style> .button4 {border-radius: 20px;font-size:15px;font-family: Geneva,Tahoma,Verdana,sans-serif;background-color: #66b3ff;} h2{text-align:center;background-color:#99bbff;} .myownclass{text-align:center;background-color:#d9d9d9;} .resulth4{color:red;} *{font-family: Geneva,Tahoma,Verdana,sans-serif;} </style>"
    var w = window.open("")
    w.document.write(htmlresults)


}
    /*function displayoutput() {
  let a=4;
  let b=5;
  var c=a+b;
  var w =window.open("")
  w.document.write(c)

}*/

$("#final").keypress(function (e) {
    if (e.which == 13) {
        getdiagnosis();
    }
});