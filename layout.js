(function() {
  var addCss, getCss, layoutHelper;
  layoutHelper = function() {
    $(".midx").map(function(i, node) {
      var padding, parentWidth, width;
      node = $(node);
      parentWidth = node.parent().width();
      width = node.width();
      padding = getCss(node, "padding-left") + getCss(node, "padding-right");
      return node.css({
        "margin-left": "0px",
        "margin-right": "0px",
        "left": parentWidth / 2.0 - (width / 2.0) - (padding / 2.0)
      });
    });
    return $(".midy").map(function(i, node) {
      var height, padding, parentHeight;
      node = $(node);
      parentHeight = node.parent().height();
      height = node.height();
      padding = getCss(node, "padding-top") + getCss(node, "padding-bottom");
      return node.css({
        "margin-top": "0px",
        "margin-bottom": "0px",
        "top": parentHeight / 2.0 - (height / 2.0) - (padding / 2.0)
      });
    });
  };
  getCss = function(node, p) {
    return parseFloat(node.css(p).replace("px", ""));
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
