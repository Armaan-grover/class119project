array1 = ["aircraft carrier", "airplane", "alarm clock", "ambulance", "angel", "animal migration", "ant", "anvil", "apple", "arm", "asparagus", "axe", "backpack", "banana", "bandage", "barn", "baseball", "baseball bat", "basket", "basketball", "bat", "bathtub", "beach", "bear", "beard", "bed", "bee", "belt", "bench", "bicycle", "binoculars", "bird", "birthday cake", "blackberry", "blueberry", "book", "boomerang", "bottlecap", "bowtie", "bracelet", "brain", "bread", "bridge", "broccoli", "broom", "bucket", "bulldozer", "bus", "bush", "butterfly", "cactus", "cake", "calculator", "calendar", "camel", "camera", "camouflage", "campfire", "candle", "cannon", "canoe", "car", "carrot", "castle", "cat", "ceiling fan", "cello", "cell phone", "chair", "chandelier", "church", "circle", "clarinet", "clock", "cloud", "coffee cup", "compass", "computer", "cookie", "cooler",
   "couch", "cow", "crab", "crayon", "crocodile", "crown", "cruise ship", "cup",
   "diamond", "dishwasher", "diving board", "dog", "dolphin", "donut", "door", "dragon", "dresser",
   "drill", "drums", "duck", "dumbbell", "ear", "elbow", "elephant", "envelope", "eraser", "eye",
   "eyeglasses", "face", "fan", "feather", "fence", "finger", "fire hydrant", "fireplace",
   "firetruck", "fish", "flamingo", "flashlight", "flip flops", "floor lamp", "flower",
   "flying saucer", "foot", "fork", "frog", "frying pan", "garden", "garden hose", "giraffe",
   "goatee", "golf club", "grapes", "grass", "guitar", "hamburger", "hammer", "hand", "harp",
   "hat", "headphones", "hedgehog", "helicopter", "helmet", "hexagon", "hockey puck",
   "hockey stick", "horse", "hospital", "hot air balloon", "hot dog", "hot tub", "hourglass",
   "house", "house plant", "hurricane", "ice cream", "jacket", "jail", "kangaroo", "key",
   "keyboard", "knee", "knife", "ladder", "lantern", "laptop", "leaf", "leg", "light bulb",
   "lighter", "lighthouse", "lightning", "line", "lion", "lipstick", "lobster", "lollipop",
   "mailbox", "map", "marker", "matches", "megaphone", "mermaid", "microphone", "microwave", "monkey",
   "moon", "mosquito", "motorbike", "mountain", "mouse", "moustache", "mouth", "mug", "mushroom",
   "nail", "necklace", "nose", "ocean", "octagon", "octopus", "onion", "oven",
   "owl", "paintbrush", "paint can", "palm tree", "panda", "pants", "paper clip", "parachute", "parrot", "passport",
   "peanut", "pear", "peas", "pencil", "penguin", "piano", "pickup truck", "picture frame", "pig", "pillow", "pineapple", "pizza", "pliers", "police car", "pond", "pool", "popsicle",
   "postcard", "potato", "power outlet", "purse", "rabbit", "raccoon", "radio", "rain", "rainbow", "rake", "remote control", "rhinoceros", "rifle", "river", "roller coaster", "rollerskates", "sailboat", "sandwich", "saw", "saxophone", "school bus", "scissors", "scorpion", "screwdriver", "sea turtle", "see saw", "shark", "sheep", "shoe", "shorts", "shovel", "sink", "skateboard", "skull", "skyscraper", "sleeping bag", "smiley face", "snail", "snake", "snorkel", "snowflake", "snowman", "soccer ball", "sock",
   "speedboat", "spider", "spoon", "spreadsheet", "square", "squiggle", "squirrel",
   "stairs", "star", "steak", "stereo", "stethoscope", "stitches", "stop sign", "stove", "strawberry", "streetlight", "string bean", "submarine", "suitcase", "sun", "swan", "sweater", "swingset", "sword", "syringe", "table", "teapot", "teddy-bear", "telephone", "television", "tennis racquet", "tent", "The Eiffel Tower", "The Great Wall of China", "The Mona Lisa", "tiger", "toaster", "toe", "toilet", "tooth", "toothbrush", "toothpaste", "tornado", "tractor", "traffic light", "train", "tree", "triangle", "trombone", "truck", "trumpet", "tshirt", "umbrella", "underwear", "van", "vase", "violin", "washing machine", "watermelon", "waterslide", "whale", "wheel", "windmill", "wine bottle", "wine glass", "wristwatch", "yoga", "zebra", "zigzag"]

var timerCounter = 0;
var timerCheck = "";
var drawSketch = "";
var answerHolder = "";
var score = "";
var pmouseX = 0;
var pmouseY = 0;
var mouseX = 0;
var mouseY = 0;
var randomNumber = Math.floor((Math.random() * array1.length) + 1);
ElementOfArray = array1[randomNumber]
console.log(ElementOfArray)
sketch1 = ElementOfArray;
document.getElementById("whatSketch").innerHTML = "Sketch to be drawn = " + sketch1;
function preload(){
   classifier = ml5.imageClassifier("DoodleNet",modelLoaded)
}

function modelLoaded(){
   console.log("the model has loaded!")
}
function updateCanvas() {
   background("white")
}
function setup() {
   canvas = createCanvas(450, 300)
   canvas.center()
   canvas.mouseReleased(classifyResults)
}

function draw() {
   checkSketch()

   if (drawSketch == sketch1) {
      answerHolder = "set";
      score = score + 1;
      document.getElementById("yourScore").innerHTML = "Score: " + score;
   }

   if (mouseIsPressed) {
      strokeWeight(10)
      line(pmouseX, pmouseY, mouseX,mouseY)
  }
}

function checkSketch(){
   timerCounter = timerCounter + 1;
document.getElementById("yourTime").innerHTML = "Time: " + timerCounter;
if(timerCounter > 500){
   timerCounter = 0;
   timerCheck = "completed"
}
if(timerCheck = "completed"){
timerCheck = "";
answerHolder = "";
updateCanvas()
}
else if(answerHolder = "set"){
   timerCheck = "";
   answerHolder = "";
   updateCanvas()
}

}

function classifyResults(){
   classifier.classify(canvas,gotResults)
}

function gotResults(error,results){
if(error){
   console.error("error")
}
else{
   console.log(results)
   drawSketch = results[0].label;
   document.getElementById("playersSketch").innerHTML = "your sketch is a "+drawSketch;
   accuracy = results[0].confidence;
   document.getElementById("confidence").innerHTML = "Accuracy: "+accuracy;
}
}