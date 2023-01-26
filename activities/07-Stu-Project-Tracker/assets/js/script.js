//working clock that sends the text to #date-time h2 in the header
function updateMoment(){
    var today = moment()
    $("#date-time").text(today.format("DD MMM YYYY")+" at "+today.format("hh:mm:ss a"));
}
updateMoment()
setInterval(function(){
    updateMoment()
},1000)