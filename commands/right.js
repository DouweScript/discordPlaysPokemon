var robot = require("robotjs");

module.exports = {
    name: "right",
    description: "Press the right button on the emulator",
    execute(message, args){
        robot.keyTap("right");
    }
}