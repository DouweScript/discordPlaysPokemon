var robot = require("robotjs");

module.exports = {
    name: "down",
    description: "Press the down button on the emulator",
    execute(message, args){
        robot.keyTap("down");
    }
}