var robot = require("robotjs");

module.exports = {
    name: "start",
    description: "Press the start button on the emulator",
    execute(message, args){
        robot.keyTap("Enter");
    }
}