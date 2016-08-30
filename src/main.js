//留个爪印——by薛定谔
//<<<<<<< HEAD
//=======

//>>>>>>> 5f070d4a88e1546d2f38c032aca719c9e1e4aeab
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder =require('role.builder');

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('正在清理不存在的代码虫标记：', name);
        }
    }

module.exports.loop = function () {
//使用对象来运行函数。这里的module.exports.loop已经包含了自动循环的函数
//tower的运行
var tower = Game.getObjectById('3b976740568433a5a2b0a2da');
if(tower) {
    var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    if(closestHostile) {
        tower.attack(closestHostile);
    }
}
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
    var minHarvester = 6;
    var minUpgrader = 8;
    var minBuilder = 6;
    var nameCreeps = undefined;

    //计量工厂的剩余能量
    for (var findSpawn in Game.spawns) {
      var roomSpawn = Game.spawns[findSpawn];
    }
    var roomSpawnRemaining = roomSpawn.energy;//加入extension
//<<<<<<< HEAD

    //计量扩展的剩余能量
    var extensions =Game.spawns.Factory01.room.find(FIND_MY_STRUCTURES, {
      filter: { structureType: STRUCTURE_EXTENSION }
    });
    var sumExtension =_.sum(extensions.store);


    if(roomSpawnRemaining >= 300){//修改条件生产更高效率的代码虫
        //代码虫部件费用一览：
        //MOVE是50，WORK是100，CARRY是50，ATTACK是80，RANGED_ATTACK是150，HEAL是250，CLAIM是600，TOUGH是10


        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        if(harvesters.length < minHarvester) {
            if(roomSpawnRemaining == 200 && harvesters.length == 0) {
                var newNameHarvesters = Game.spawns['Factory01'].createCreep([WORK,CARRY,MOVE], nameCreeps, {role: 'harvester'});
                console.log('正在建造新的开采虫：' + newNameHarvesters);
            }
            else{
                if(roomSpawnRemaining + sumExtension >= 400) {
                    var newNameHarvesters = Game.spawns['Factory01'].createCreep([WORK,WORK,WORK,CARRY,MOVE], nameCreeps, {role: 'harvester'});
                    console.log('正在建造新的开采虫：' + newNameHarvesters);
                }
                else {
                    if(roomSpawnRemaining == 300) {
                        var newNameHarvesters = Game.spawns['Factory01'].createCreep([WORK,WORK,CARRY,MOVE], nameCreeps, {role: 'harvester'});
                        console.log('正在建造新的开采虫：' + newNameHarvesters);
                    }
                }
            }
            if(roomSpawnRemaining >= 300){//修改条件生产更高效率的代码虫
                var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
                if(harvesters.length < minHarvester) {
                    var newNameHarvesters = Game.spawns['Factory01'].createCreep([WORK,WORK,CARRY,MOVE], nameCreeps, {role: 'harvester'});
                    console.log('正在建造新的开采虫：' + newNameHarvesters);
                }
            if(harvesters.length >= minHarvester) {
                var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
                if(upgraders.length < minUpgrader && roomSpawnRemaining + sumExtension >= 500) {//添加条件生产更高效率的代码虫
                    if(upgraders.length < minUpgrader) {//添加条件生产更高效率的代码虫
                        var newNameUpgraders = Game.spawns['Factory01'].createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], nameCreeps, {role: 'upgrader'});
                        console.log('正在建造新的升级虫：' + newNameUpgraders);
                    }
                    else {
                        var newNameUpgraders = Game.spawns['Factory01'].createCreep([WORK,CARRY,CARRY,CARRY,MOVE], nameCreeps, {role: 'upgrader'});
                        console.log('正在建造新的升级虫：' + newNameUpgraders);
                    }
                if(upgraders.length >= minUpgrader && roomSpawnRemaining + sumExtension == 400) {
                    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
                    if(builders.length < minBuilder) {//添加条件生产更高效率的代码虫
                        var newNameBuilders = Game.spawns['Factory01'].createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], nameCreeps, {role: 'builder'});
                        console.log('正在建造新的建造虫：' + newNameBuilders);
                    }
                    else {
                        var newNameBuilders = Game.spawns['Factory01'].createCreep([WORK,WORK,CARRY,MOVE], nameCreeps, {role: 'builder'});
                        var newNameBuilders = Game.spawns['Factory01'].createCreep([WORK,WORK,CARRY, CARRY,MOVE, MOVE], nameCreeps, {role: 'builder'});
                        console.log('正在建造新的建造虫：' + newNameBuilders);
                    }
                    //代码虫部件作用一览：
                    //MOVE是移动部件，每一个MOVE可以在每一个游戏时中减少2点疲劳度下降；CARRY是背包部件，每一个CARRY可以提高50点可以携带能量极限
                    //WORK是工作部件，如果是harvest命令，每一个游戏时获取2点能量；如果是build命令，每一个游戏时建造5点；如果是repair，每一个游戏时使用1点能量修复100点生命；
                    //WORK是工作部件，如果是dismantle命令，每一个游戏时拆除50点建筑生命值并返回0.25点能量;如果是upgrade命令，每一个游戏时为RCL提供1点升级。
                    //ATTACK是攻击部件，每一个游戏时对敌方代码虫/代码造物造成30点伤害。
                    //RANGED_ATTACK是攻击部件，每一个游戏时对在3个方格距离内的单一代码虫/代码造物造成10点伤害；每一个游戏时对在3个方格距离内的所有代码虫/代码造物分别造成1-4-10伤害。
                    //HEAL是治疗部件，每一个游戏时对自己或在距离自己小范围内的单一代码虫治疗12点生命，如果距离较远，每一个游戏时治疗4点生命值。
                    //CLAIM是殖民部件，作用是对一个RCL进行获取控制/攻击/降级；对己方的RCL，每一个部件点数可以为RCL提供1个游戏时的储量；对敌方的RCL，对RCL进行降级和加速降级计时器；
                    //CLAIM是殖民部件，装载有CLAIM的代码虫会有500秒的寿命缩减，而且不能被重置。
                    //TOUGH是防御部件，装载有这个部件的代码虫可以获得10点生命值加成，每一个防御部件增加10点生命。
                }
                }
            }
            }
        }
    }
};
