var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_TOWER ||
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_STORAGE) && structure.energy < structure.energyCapacity;
                    }
            });
            var findContainers = creep.room.find(FIND_STRUCTURES, {
              filter: { structureType: STRUCTURE_CONTAINER }
            });
            var extensionResources = findContainers.energy < findContainers.energyCapacity;
            if(extensionResources == true) {
              if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
              }
              if(findContainers.length) {
                if(container.store[RESOURCE_ENERGY] < container.storeCapacity) {
                  if(creep.transfer(findContainers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                      creep.moveTo(findContainers[0]);
                  }
                }
              }
            }
        }
	    }
};

module.exports = roleHarvester;
