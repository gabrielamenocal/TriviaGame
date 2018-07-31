// q1. How much does the most expensive coffee cost?
// A. Kopi luwak or civet coffee, and cost USD 500.00 per kg

// q.2 Which country drinks most coffee? a. Finland

// q3. Which if these is countries is a coffee productor? a. Honduras
var rigths = [];
var wrongs = [];
var correct = 0; incorrect=0;

$("#q1").on("submit", function(e){
    e.preventDefault();
   var value = $('input[name="q1"]:checked').val();
   console.log(value);
   if (value === "Finland"){
       rigths.push(value);
       correct++;

   }else{
        incorrect++
        wrongs.push(value);
   };
   console.log(incorrect);
   console.log(correct);
  });

$("#q2").on("submit", function(e){
  e.preventDefault();
 var value = $('input[name="q2"]:checked').val();
 console.log(value);
 if (value === "500"){
    rigths.push(value);
    correct++;

    }
    else{
    incorrect++
    wrongs.push(value);
};
console.log(incorrect);
console.log(correct);
});

$("#q3").on("submit", function(e){
    e.preventDefault();
   var value = $('input[name="q3"]:checked').val();
   console.log(value);
   console.log(value);
 if (value === "Honduras"){
    rigths.push(value);
    correct++;

    }
else{
    incorrect++
    wrongs.push(value);
};
console.log(incorrect);
console.log(correct);
  });

  $("#q4").on("submit", function(e){
    e.preventDefault();
   var value = $('input[name="q4"]:checked').val();
   console.log(value);
   if (value === "Starbucks"){
    rigths.push(value);
    correct++;

    }else{
     incorrect++
     wrongs.push(value);
    };
    console.log(incorrect);
    console.log(correct);
  });


  $("#q5").on("submit", function(e){
    e.preventDefault();
   var value = $('input[name="q5"]:checked').val();
   console.log(value);
   console.log(value);
 if (value === "Tim Horton"){
    rigths.push(value);
    correct++;

    }
else{
    incorrect++
    wrongs.push(value);
};
console.log(incorrect);
console.log(correct);
  });

  $("#q6").on("submit", function(e){
    e.preventDefault();
   var value = $('input[name="q6"]:checked').val();
   console.log(value);
   console.log(value);
 if (value === "Black Coffee"){
    rigths.push(value);
    correct++;

    }
else{
    incorrect++
    wrongs.push(value);
};
console.log(incorrect);
console.log(correct);
  });

  $("#q7").on("submit", function(e){
    e.preventDefault();
   var value = $('input[name="q7"]:checked').val();
   console.log(value);
   console.log(value);
 if (value === "2"){
    rigths.push(value);
    correct++;

    }
else{
    incorrect++
    wrongs.push(value);
};
console.log(incorrect);
console.log(correct);
  });

  $("#q8").on("submit", function(e){
    e.preventDefault();
   var value = $('input[name="q8"]:checked').val();
   console.log(value);
   console.log(value);
 if (value === "Milk"){
    rigths.push(value);
    correct++;

    }
else{
    incorrect++
    wrongs.push(value);
};
console.log(incorrect);
console.log(correct);
  });

  console.log(rigths);
  console.log(wrongs);

