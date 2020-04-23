
var angle = 0
var angleSpeed = 0.2
function setup() {
createCanvas(400,400)
Sun = new sun(0,0,40,200,50,40)
Mercury = new planet(50,20,15,20,30,50)
Venus = new planet(60,40,19,20,30,40)
Earth = new planet(70,60,24,40,20,40)
Mars = new planet(80,80,26,35,37,83)
Jupiter = new planet(90,100,35,67,86,94)
Saturn = new planet(100,120,30,25,76,56)
Uranus = new planet(110,140,27,29,47,43)
Neptune = new planet(120,160,28,75,89,90)
Pluto = new planet(130,180,8,29,56,56)
//bg = createSprite(200,200,600,600)
}

function draw() {
 background("Black")
 translate(width/2,height/2)
 angleMode(DEGREES)
 rotate(angle)
Sun.display()
Mercury.display()
Venus.display()
Earth.display()
Mars.display()
Jupiter.display()
Saturn.display()
Uranus.display()
Neptune.display()
Pluto.display()
angle= angle + angleSpeed

}
