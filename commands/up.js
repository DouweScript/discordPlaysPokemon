var robot = require("robotjs");
module.exports = {
    name: "up",
    description: "Press the up button on the emulator",
    execute(message, args){
        robot.keyTap("up");
    }
}