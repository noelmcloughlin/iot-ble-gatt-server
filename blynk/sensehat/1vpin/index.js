//######################################
// Connect SenseHat with virtual pins.
// One "listens" for reads events.
// Two sends SenseHat temperature data.
//######################################

var Blynk = require("blynk-library");
var sense = require("node-sense-hat");

var imu = sense.Imu;
var IMU = new imu.IMU();

// Workaround issue #7
//var blynk = new Blynk.Blynk(process.env.MY_BLYNK_TOKEN);
var blynk = new Blynk.Blynk(process.env.MY_BLYNK_TOKEN, options = {
  connector : new Blynk.TcpClient()
});

//### virtual pin #one
var v1 = new blynk.VirtualPin(1);

var white = [255, 255, 255];
sense.Leds.clear();

// v1 write call back
v1.on('write', function(param) {
     var colour = param.map(Number);
     sense.Leds.clear(colour);
});
