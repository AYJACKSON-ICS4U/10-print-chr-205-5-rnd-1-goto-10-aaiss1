var x = 0;
var y = 0;
var spacing = 15;

draw = function() {
    stroke(random(1, 255), random(1, 255), random(1, 255));
    
  if(random(1) < 0.5){
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }

  x = x + spacing;

  if(x > width) {
    x = 0;
    y += spacing;
  }

};
