var rights = [];
var wrongs = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"];
var answers = ["","Finland","500","Honduras","Starbucks","Tim Horton","Black Coffee","2","Milk"];
var x, seconds;


$(document).ready(function() {
    $("#score").hide();
    timer();
       
    function review (q){
        
        var value = $('input[name="' + q + '"]:checked').val();
        console.log(value);

        var str = q;
        var a = str.slice(1, 2);
        a = parseInt(a);
        console.log(a);

        var indexRights = rights.indexOf(q);
        if (indexRights > -1) {
          rights.splice(indexRights, 1);
        }

        var indexWrongs = wrongs.indexOf(q);
        if (indexWrongs > -1) {
          wrongs.splice(indexWrongs, 1);
        }
     
        if (value === answers[a]){
            rights.push(q);
 
        }else{
             wrongs.push(q);
   
        };

        console.log(rights);
        console.log(wrongs);        
    }

    $("#q1").on("click", function(e){
        review("q1");
    });

    $("#q2").on("click", function(e){
        review("q2");
 
    });

    $("#q3").on("click", function(e){
        review("q3");
     });

    $("#q4").on("click", function(e){
        review("q4");   
    });

    $("#q5").on("click", function(e){
        review("q5");
    });

    $("#q6").on("click", function(e){
        review("q6");
    });

    $("#q7").on("click", function(e){
        review("q7");   
    });

    $("#q8").on("click", function(e){
        review("q8");
    });

    $("#submit").on("click", function(e){

        e.preventDefault();
        document.getElementById("time").innerHTML = "You submitted!";
        clearInterval(x);
        // debugger

        if (rights.length > wrongs.length) {
                console.log(rights.length);
                $("#questions").html('<h1 style="color: orange;"> You are a WINNER <h1>');
                $("#score").show();
                $("#FinalScore").html(rights.length);



        } else {
                console.log(rights.length);
                $("#questions").html('<h1 style="color:red;"> You are a LOSER <h1>');
                $("#score").show();
                $("#FinalScore").html(rights.length);



        }
    });  
});


function timer() {

        seconds = 3*60;    
        x = setInterval(function()
        {
            document.getElementById("time").innerHTML = Math.floor(seconds/60) + " m " + seconds%60 + " s";
           
            seconds--;
                       
            if (seconds === 0) {
                document.getElementById("time").innerHTML = "Time's Up!";
                $("#submit").hide();
                $("input[type=radio]").prop('disabled', true);               
                clearInterval(x);
            }

        }, 1000);    
}



$("#restart").on("click", function restart (event)
{
    location.reload();
});
