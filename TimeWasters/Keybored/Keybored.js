var message = "hello";
	var circles = [];
	function onKeyDown(event){
		makeCircle();
		};
		
    function makeCircle() {
        var maxPoint = new Point(view.size.width, view.size.height);
				var randomPoint = Point.random();
				var point = maxPoint * randomPoint;
        var newCircle = new Path.Circle(point, 100);
        var keyData = ["a","s","d","f","g","h","j","w","e","t","y","u"];
        var colors = ["black", "purple", "blue", "red", "green"];
				if(keyData.includes(event.key)){
					var randNum = Math.floor(Math.random() * 5);
					var pickedColor = colors[randNum];
					newCircle.fillColor = pickedColor;
				}
				else {
					newCircle.fillColor = "transparent";
				};
		circles.push(newCircle);
    };
    
	function onFrame(event){
		for(var i = 0; i < circles.length; i++){
			circles[i].fillColor.hue += .5;
			circles[i].scale(.97);
			if(circles[i].ares <1){
				circles[i].remove();
				circles.splice(i, 1);
			};
		};
  };
