var roleHarvester = require('role.harvester');
//包含一个叫role.harvester的module并赋值到roleHarvester
var roleUpgrader = require('role.upgrader');
//包含一个叫role.upgrader的module并赋值到roleUpgrader
var roleBuilder =require('role.builder');

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('正在清理不存在的代码虫标记：', name);
        }
    }

module.exports.loop = function () {
//使用对象来运行函数。这里的module.exports.loop已经包含了自动循环的函数
    for(var name in Game.creeps) {
    //循环代码虫的名字
        var creep = Game.creeps[name];
        //赋予creep的值为代码虫的名字
        if(creep.memory.role == 'harvester') {
        //如果检测到这个代码虫的标记为开采虫，那么运行下面的代码
            roleHarvester.run(creep);
          //运行开采的module
        }
        if(creep.memory.role == 'upgrader') {
        //如果检测到这个代码虫的标记为升级虫，那么运行下面的代码
            roleUpgrader.run(creep);
            //运行开采的代码
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
    var minHarvester = 4;
    var minUpgrader = 10;
    var minBuilder = 8;
    var nameCreeps = undefined;
    for (var findSpawn in Game.spawns){
      var roomSpawn = Game.spawns[findSpawn];
    }
    var roomSpawnRemaining = roomSpawn.energy;
    if(roomSpawnRemaining >= 200){
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        if(harvesters.length < minHarvester) {
            var newNameHarvesters = Game.spawns['Factory01'].createCreep([WORK,CARRY,MOVE], nameCreeps, {role: 'harvester'});
            console.log('正在建造新的开采虫：' + newNameHarvesters);
        }
        if(harvesters.length >= minHarvester) {
            var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
            if(upgraders.length < minUpgrader) {
                var newNameUpgraders = Game.spawns['Factory01'].createCreep([WORK, CARRY, MOVE], nameCreeps, {role: 'upgrader'});
                console.log('正在建造新的升级虫：' + newNameUpgraders);
            }
            if(upgraders.length >= minUpgrader) {
                var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
                if(builders.length < minBuilder) {
                    var newNameBuilders = Game.spawns['Factory01'].createCreep([WORK, CARRY, MOVE], nameCreeps, {role: 'builder'});
                    console.log('正在建造新的建造虫：' + newNameBuilders);
                }
            }
        }
    }
};
