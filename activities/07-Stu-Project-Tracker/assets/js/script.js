//working clock that sends the text to #date-time h2 in the header
setInterval(function(){
    var today = moment()
    $("#date-time").text(today.format("DD MMM YYYY")+" at "+today.format("hh:mm:ss a"));
},1000)
