//digital clock be set on it. by using new Date()

function DisplayCurrentTime() {
    var date = new Date();
    var hours =date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    var minutes =date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds =date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    document.getElementById("nhour").innerHTML = hours + "<br>Hours";
    document.getElementById("nmin").innerHTML = minutes + "<br>mins";
    document.getElementById("nsec").innerHTML = seconds + "<br>secs";
    document.getElementById("am_pm").innerHTML = am_pm;
  }
  setInterval(DisplayCurrentTime, 1000);

  //Images change by clicking on dropbox

  function displayGreetings() {
    var date = new Date();
    var hours = date.getHours();

    let waketime = document.getElementById("wake_time").value;
    let lunchtime = document.getElementById("lunch_time").value;
    let naptime = document.getElementById("nap_time").value;

    if (waketime == hours) {
      document.getElementById("food_image").style.backgroundImage =
        "url('./images/openCurtains.png')";
      document.getElementById("food_msg").innerHTML =
        "Let's have some breakfast";
    }

    if (lunchtime == hours) {
      document.getElementById("food_image").style.backgroundImage =
        "url('./images/lunchImage.png')";
      document.getElementById("food_msg").innerHTML = "Let's have lunch";
    }
    if (naptime == hours) {
      document.getElementById("food_image").style.backgroundImage =
        "url('./images/sleepScore.png')";
      document.getElementById("food_msg").innerHTML =
        "Let's have some dinner";
    }

    displayValue();
  }

//div creates under party Time!!

  function displayValue() {
    let waketime = document.getElementById("wake_time").value;
    let lunchtime = document.getElementById("lunch_time").value;
    let naptime = document.getElementById("nap_time").value;

    var insideValue1 = document.getElementById("wake_time");
    var invalue1 = insideValue1.options[insideValue1.selectedIndex].text;

    var insideValue2 = document.getElementById("lunch_time");
    var invalue2 = insideValue2.options[insideValue2.selectedIndex].text;

    var insideValue3 = document.getElementById("nap_time");
    var invalue3 = insideValue3.options[insideValue3.selectedIndex].text;

    if (waketime == "none") {
      document.getElementById("wake_up").innerHTML = "";
    } else {
      document.getElementById("wake_up").innerHTML =
        "Wake up time : " + invalue1;
    }

    if (lunchtime == "none") {
      document.getElementById("lunch").innerHTML = "";
    } else {
      document.getElementById("lunch").innerHTML =
        "Lunch time : " + invalue2;
    }

    if (naptime == "none") {
      document.getElementById("nap").innerHTML = "";
    } else {
      document.getElementById("nap").innerHTML = "Nap time : " + invalue3;
    }
  }