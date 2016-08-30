    var roleBuilder = {
    //创建变量roleBuilder
        /** @param {Creep} creep **/
        //@param标签
        run: function(creep) {
        //现在我们创建一个creep函数并包含以下内容，并包含在module中
    	    if(creep.memory.building && creep.carry.energy == 0) {
          //如果
                creep.memory.building = false;
                creep.say('资源不足了唔...');
    	    }
    	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
    	        creep.memory.building = true;
    	        creep.say('建造www');
    	    }

    	    if(creep.memory.building) {
    	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                if(targets.length) {
                    if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0]);
                    }
                }
    	    }
    	    else {
    	        var sources = creep.room.find(FIND_SOURCES);
                if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0]);
                }
    	    }
    	}
    };

module.exports = roleBuilder;
