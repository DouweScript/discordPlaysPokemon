var robot = require("robotjs");

module.exports = {
    name: "a",
    description: "Press the a button on the emulator",
    execute(message, args){
        robot.keyTap('x');
    }
}