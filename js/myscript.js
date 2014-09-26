$(document).ready(function(){
$('.tweet-compose').on('focus', function (e) {
	var self = $('.tweet-compose').height();
	$('.tweet-compose').css('height', self * 2);
});
$('.tweet-compose').on('focus', function (e) {
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
});


