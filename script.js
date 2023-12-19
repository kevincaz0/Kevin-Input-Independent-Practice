
$("button").click(function() {
     
        var favoriteFood = $(".favoriteFood").val();
        var favoriteSnack = $(".favoriteSnack").val();

        console.log("favoriteFood:", favoriteFood);
        console.log("favoriteSnack:", favoriteSnack);

        $(".vote-result").text(favoriteFood);
        $(".snack-result").text(favoriteSnack);

      $(".snack-result").text("Favorite Snack: " + favoriteSnack);
        $(".vote-result").text("Favorite Food: " + favoriteFood);
   
        $("img").css("display", "block");

        alert("Thank you for voting!");
   
    $(".snack-result").attr("maxlength", 6);
        $(".vote-result").attr("maxlength", 6);
      });
