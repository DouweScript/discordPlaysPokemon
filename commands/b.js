var robot = require("robotjs");

module.exports = {
    name: "b",
    description: "Press the b button on the emulator",
    execute(message, args){
        robot.keyTap('z');
    }
}