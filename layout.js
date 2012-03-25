(function() {
  var addCss, layoutHelper;
  layoutHelper = function() {
    $(".midx").map(function(i, node) {
      var parentWidth, width;
      node = $(node);
      parentWidth = node.parent().width();
      width = node.width();
      return node.css({
        "margin-left": "0px",
        "margin-right": "0px",
        "left": parentWidth / 2.0 - (width / 2.0)
      });
    });
    return $(".midy").map(function(i, node) {
      var height, parentHeight;
      node = $(node);
      parentHeight = node.parent().height();
      height = node.height();
      return node.css({
        "margin-top": "0px",
        "margin-bottom": "0px",
        "top": parentHeight / 2.0 - (height / 2.0)
      });
    });
  };
  addCss = function() {
    var css;
    css = "	<style type='text/css' media='screen'>		.minx, .midx, .maxx, .miny, .midy, .maxy {			position: absolute;		}			.minx {left:0px}		.maxx {right:0px}		.miny {top:0px}		.maxy {bottom:0px}	</style>	";
    return $(css).appendTo("head");
  };
  addCss();
  $(window).resize(function() {
    return setTimeout(layoutHelper, 0);
  });
  $(document).ready(function() {
    return layoutHelper();
  });
}).call(this);
