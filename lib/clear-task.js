var fs = require('fs');
var vars = require(__dirname + '/vars');

var ClearTask = function () {
};

ClearTask.prototype.run = function(executeNextStep) {
    console.log('clean folder');
    try{
        fs.rmSync(vars.haxe.dir);
        fs.rmSync(vars.haxelib.dir);
        fs.rmSync(vars.neko.dir);
    } catch(error){
        console.error(error);
    }
    executeNextStep();
};

module.exports.ClearTask = ClearTask;
