function showDate(){
    var today = new Date();
    var dy = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']; // maakt nieuwe var om dagen te verkrijgen
    var dt = today.getDate();      // maakt nieuwe var om dagen in data te verkrijgen
    var md = (today.getMonth()+1);    // maakt nieuwe var om maanden te verkrijgen
    var ye = today.getFullYear(); // maakt nieuwe var om jaren te verkrijgen

    dt = (dt < 10) ? "0" + dt : dt;    //voegt 0 toe
    md = (md < 10) ? "0" + md : md;    //voegt 0 toe

    var date = dy[today.getDay()] + " " + dt + "-" + md + "-" + ye ; //laat de tijd zien
    document.getElementById("MyDate").innerText = date;
    document.getElementById("MyDate").textContent = date;
}

showDate();

function showTime(){
    var date = new Date();
    var h = date.getHours();    // maakt nieuwe var om uren te verkrijgen
    var m = date.getMinutes();  // maakt nieuwe var om minuten te verkrijgen
    var s = date.getSeconds();  // maakt nieuwe var om secondes te verkrijgen
    var session = "AM";

    if(h == 0){
        h = 12;
    } //wordt AM
    
    else if(h > 12){
        h = h - 12;
        session = "PM";
        document.body.style.backgroundColor="rgb(209, 236, 255)"
        document.getElementById("MyClock").style.color = 'rgb(15, 89, 137)';
    } //wordt PM en wordt licht thema voor de middag en avond

    h = (h < 10) ? "0" + h : h;    //voegt 0 toe
    m = (m < 10) ? "0" + m : m;    //voegt 0 toe
    s = (s < 10) ? "0" + s : s;    //voegt 0 toe
    
    var time = h + ":" + m + ":" + s + " " + session; //laat de tijd zien en verandert het ID
    document.getElementById("MyClock").innerText = time;
    document.getElementById("MyClock").textContent = time;
    
    setTimeout(showTime, 1000);
}

showTime();

TweenMax.to(".img", 5, {y: 150, scale:1.5, ease:Quart.easeOut});

var blinkClock = document.getElementsByClassName("clock");

function blink() {
    TweenLite.to(blinkClock, 0.40, {
        autoAlpha: 0,
        onComplete: function() {
            TweenLite.to(blinkClock, 0.55, {
                autoAlpha: 1,
                onComplete: blink
            });
        }
    });
}
blink();


