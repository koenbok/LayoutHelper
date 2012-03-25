layoutHelper = ->

	$(".midx").map (i, node) ->
		node = $(node)
		parentWidth = node.parent().width()
		width = node.width()
		node.css
			"margin-left": "0px"
			"margin-right": "0px"
			"left": parentWidth / 2.0 - (width / 2.0)

	$(".midy").map (i, node) ->
		node = $(node)
		parentHeight = node.parent().height()
		height = node.height()
		node.css
			"margin-top": "0px"
			"margin-bottom": "0px"
			"top": parentHeight / 2.0 - (height / 2.0)

addCss = ->
	css = "
	<style type='text/css' media='screen'>
		.minx, .midx, .maxx, .miny, .midy, .maxy {
			position: absolute;
		}
	
		.minx {left:0px}
		.maxx {right:0px}
		.miny {top:0px}
		.maxy {bottom:0px}
	</style>
	"
	$(css).appendTo "head"


addCss()

$(window).resize ->
	setTimeout layoutHelper, 0

$(document).ready ->
	layoutHelper()