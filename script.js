$(document).ready(function() {
	function updateOutput() {
		$("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#css-panel").val() + "</style></head><body>" + ($("#html-panel").val()) + "</body></html>");

		document.getElementById("output-panel").contentWindow.eval($("#javascript-panel").val());
	}
	$(".toggle-button").hover(function() {
		$(this).addClass("highlighted-button");
	}, function() {
		$(this).removeClass("highlighted-button");
	});
	$(".toggle-button").click(function() {

		$(this).toggleClass("active");

		$(this).removeClass("highlighted-button");

		var panelId = $(this).attr("id") + "-panel";
		$("#" + panelId).toggleClass("hidden");
		var numberOfActivePanels = 4 - $(".hidden").length;
		$(".panel").width(($(window).width() / numberOfActivePanels) - 10);

	});

	$(".panel").height($(window).height() - $("#header").height() - 15);
	$(".panel").width(($(window).width() / 2) - 10);
	updateOutput();
	$("textarea").on('change keyup paste', function() {
		updateOutput();
	});
});