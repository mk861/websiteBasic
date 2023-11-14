window.onload = function(){
    var paper = new Raphael(0,0,800,400);
    var backGround = paper.rect(0,0,800,400).attr({"fill": "gray"});
    var startButton = paper.circle(400,200,80).attr({"fill": "blue", "stroke": "black"});
    var startText = paper.text(400,200,"Click me to start!").attr({"font-size": "18px", "font-weight": "700", fill: "white", stroke: "black", "stroke-width": "0.1px"});
    startButton.transform({cy:200,cx:200},0);
    var button = paper.set();
    button.push(startButton);
    button.push(startText);
    button.attr({cursor: "pointer"});
    button.click(function(){
        button.hide();
        backGround.hide();
        var backGround1 = paper.image("images/animationBackground1.jpg", 0,0,800,360);
        var backGround2 = paper.image("images/animationBackground2.jpg",0,0,800,360);
        backGround2.hide();
        var surprised = paper.text(252,285,"!").attr({"font-size": "75px", "font-weight": "1000", fill: "blue", stroke: "black", "stroke-width": "0.5"});
        surprised.hide();
        var endText = paper.text(400,200,"END").attr({"font-size": "200px", "font-weight": "2000", fill: "red", stroke: "black", "stroke-width": "3"});
        endText.hide();
        var circle = paper.circle(180,-20,20).attr({"fill": "red", "stroke": "black"});
        var circle2 = paper.circle(180,-20,20).attr({"fill": "red", "stroke": "black"});
        circle2.hide();
        var square = paper.rect(163,285,35,35).attr({"fill": "blue", "stroke": "black"});
        square.hide()
        var wheel1 = paper.circle(525,335,15).attr({"fill": "black", "stroke": "black"});
        var wheel2 = paper.circle(575,335,15).attr({"fill": "black", "stroke": "black"});
        var carBody = paper.ellipse(550,323,50,15).attr({"fill": "silver", "stroke": "black"});
        var car = paper.set();
        var track = new Audio("audio/Brighton.mp3");
        car.push(carBody);
        car.push(wheel1);
        car.push(wheel2);
        car.hide();
        function drop1(){
            track.play();
            setTimeout(function(){circle.animate({cy:40},1100,"bounce",slide1);},1000);
        }
        function slide1(){
            circle.animate({cx:128,cy:48},1500,"<",drop2);
        }
        function drop2(){
            circle.animate({cy:120},900,"bounce",slide2);
        }
        function slide2(){
            circle.animate({cx:156, cy:126},1500,"<",drop3);
        }
        function drop3(){
            circle.animate({cy:260},1000,"bounce",slide3);
        }
        function slide3(){
            circle.animate({cx:194, cy:268},1500,"<",drop4);
        }
        function drop4(){
            circle.animate({cy:1000},800,switchScene);
        }
        function switchScene(){
            backGround1.hide();
            circle.hide();
            backGround2.show();
            circle2.show();
            car.show();
            drop5();
        }
        function drop5(){
            setTimeout(function(){circle2.animate({cy:300},500,walk1);},1000);
        }
        function walk1(){
            square.show();
            circle2.hide();
            setTimeout(function(){square.animate({y: 320,x: 234},800,"<",seeCar);},1000);
        }
        function seeCar(){
            surprised.show();
            setTimeout(function(){surprised.hide();},3000);
            walk2();
        }
        function walk2(){
            setTimeout(function(){square.animate({x: 445},900,getInCar1);},3000);
        }
        function getInCar1(){
            square.animate({x: 505, y: 260},500,getInCar2);
        }
        function getInCar2(){
            square.animate({x:535, y:275},500,drive);
        }
        function drive(){
            car.push(square);
            car.animate({cx: 1000, x: 1000},900,"<",ending);
        }
        function ending(){
            backGround2.hide();
            car.hide();
            endText.show();
            
            track.pause();
        }
        drop1();
    })
    
    
}