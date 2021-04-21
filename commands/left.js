var robot = require("robotjs");

module.exports = {
    name: "left",
    description: "Press the left button on the emulator",
    execute(message, args){
        robot.keyTap('left');
    }
}