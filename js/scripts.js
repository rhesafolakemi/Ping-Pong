
function pingPong (maxNumber) {
  console.log(maxNumber)
     const results = []
     for(number=1; number < parseInt(maxNumber) +1 ; number++){
       console.log(number, maxNumber)
        var isDivisibleBy3 = number % 3 === 0
        var isDivisibleBy5 = number % 5 === 0

         if(isDivisibleBy3){
            results.push("<p>ping</p>")
         } else if (isDivisibleBy5){
            results.push("<p>pong</p>")
         }
         else if(isDivisibleBy3 && isDivisibleBy5){
             results.push("<p>pingpong</p>")
         }else {
            results.push("<p>" + number + "</p>")
         }
     }
     return results.join(" ")
 }

$(document).ready(function() {
  $(".pingpong").click(function(){
    console.log("i was clicked")

    var number = $("#number").val()
    $(".results").append(pingPong(number));
 });
});
