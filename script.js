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
	$("#execute").click(function() {
		updateOutput();
	})
});

//let realList;
//    for (let list of this.alwaysPlayLists) {
//      if (list.id == listId) {
//        realList = list;
//        break
//      }
//    }
//    if (realList == undefined)
//      realList = null;
//
//  ja.js
//let realList;
//    for (let list of this.alwaysPlayLists) {
//      if (list.id == listId) {
//        realList = list;
//        break
//      }
//    }
//    if (realList == undefined)
//      realList = null;
//
// Ignore this, I only put this in here to make github recognise it as a JS project lol
