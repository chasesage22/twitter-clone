$(document).ready(function(){

$('.stats').hide();
$('.reply').hide();


	$('.tweet-compose').on('focus', function() {
		var self = $('.tweet-compose').height();
		$('.tweet-compose').css('height', '5em');
		$('#tweet-controls').show();
	});




$(".tweet-compose").on("keyup", function(){
        var count = $(".tweet-compose").val().length;
        var remaining = 140 - count;

        $("#char-count").text(remaining);

        if (remaining <= 10) {
            $("#char-count").css("color", "red");
        }
        else if (remaining > 10) {
            $("#char-count").css("color", "#999");
        }

        if (count > 140) {
            $(".button").attr("disabled", "disabled");
        }
        else if (count <= 140) {
            $(".button").removeAttr("disabled", "disabled");
        }
});



$('#tweet-submit').on('click', function(){

			// If user has entered text, on tweet button click ..... take the value of the string of what they entered.... prepend(variable) in html

				//clone function

			var tweetTweet = $('.tweet-compose').val();

			if (tweetTweet.length <= 140 && tweetTweet.length > 0) {
				var cloney = $('.tweet:first').clone();
				cloney.find('.avatar').prop('src', './img/alagoon.jpg');
				cloney.find('.fullname').html('Chase Butterfield');
				cloney.find('.username').html('@GrizzButter');
				cloney.find('.tweet-text').html(tweetTweet);
				cloney.find('.stats').hide();
				cloney.find('.reply').hide();
				$('#stream').prepend(cloney);
				$('#tweet-submit').hide();
				$('#char-count').hide();
				$('.tweet-compose').css('height', '2.5em');
				$('.tweet-compose').val('');


			}
		});



	$(this).find('#stream').on('click', '.tweet', function(){
		$(this).find('.stats').toggle(170);
		$(this).find('reply').show(170);
	});

var now = moment().format("h:MM A - D MMM YY");
     // Saturday, June 9th, 2007, 5:46:21 PM
$('#date').append(now);

});