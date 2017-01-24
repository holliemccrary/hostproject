$(document).ready(function(){
console.log("hi");
	$("#contact-info").on("submit", function(event){
		event.preventDefault();
		var data = $("#contact-info").serializeArray();

		$.ajax({
			url: "https://formspree.io/hrmccrary@gmail.com",
			method: "POST",
			data: {data},
			dataType: "json"
		}).done(function(){
			$(".message-sent").show();
			$("#contact-info").trigger("reset");
			setTimeout(function(){
				$(".message-sent").hide();
			}, 15000);
		});
	});
});