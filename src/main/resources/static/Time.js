function getTime() {

    var date = new Date();
    var hour = date.getHours();

    if(hour < 12) { document.write("Good Morning").innerHTML; }
    else if(hour >= 12 && hour < 17) { document.write("Good Afternoon").innerHTML; }
    else { document.write("Good Evening").innerHTML; }

    startTime();
}