// PAPER.JS WITH CIRCLE GRAPHIC MOVING WITH CURSOR

paperScript = function() {
  var mousePoint = view.center;
  var amount = 9;
  var colors = ["#ffcbdd", "#ffafaf", "#ffcbdd", "#ffafaf"];

  for (var i = 0; i < amount; i++) {
    var rect = new Rectangle([0, 0], [15, 15]);
    rect.center = mousePoint;
    var path = new Path.Rectangle(rect, 20);
    path.fillColor = colors[i % 4];
    var scale = (1 - i / amount) * 40;
    path.scale(scale);
  }

  function onMouseMove(event) {
    mousePoint = event.point;
  }

  var children = project.activeLayer.children;

  function onFrame(event) {
    for (var i = 0, l = children.length; i < l; i++) {
      var item = children[i];
      var delta = (mousePoint - item.position) / (i + 5);
      item.rotate(Math.sin((event.count + i) / 30) * 1);
      if (delta.length > 0.1) item.position += delta;
    }
  }
};


var a = document.createElement("script");
a.setAttribute("type", "text/paperscript");
a.setAttribute("canvas", "canvas");
var src = paperScript.toString();
a.appendChild(
  document.createTextNode(
    src.substring(src.indexOf("\n") + 1, src.lastIndexOf("\n"))
  )
);
document.body.appendChild(a);

// // TEXT INLINE CODE

// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// ctx.font = "30px Arial";
// ctx.fillText("Hello World", 10, 50);

// // TEXT INLINE CODE
