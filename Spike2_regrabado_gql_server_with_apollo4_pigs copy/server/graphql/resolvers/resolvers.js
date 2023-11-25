import superheroModel from "../../models/superheroModel.js";
import missionModel from "../../models/missionModel.js";

const resolvers = {
  Query: {
    async superheroes(_, __, ___, info) {
      const allSuperheroes = await superheroModel.find();
      return allSuperheroes;
    },
    async missions() {
      const allMissions = await missionModel.find();
      return allMissions;
    },
    async superhero(parent, args, contextValue, info) {
      console.log("contextValue :>> ", contextValue);
      //   console.log("args :>> ", args);
      //   console.log("info :>> ", info);
      const singleSuperhero = await superheroModel.findById(args.id);
      return singleSuperhero;
    },
    async mission(_, args, contextValue) {
      console.log("contextValue :>> ", contextValue);
      const singleMission = await missionModel.findById(args.id);
      return singleMission;
    },
  },
  Superhero: {
    async assignedMission(parent) {
      //   console.log("parent :>> ", parent);
      //this function will get the info from the mission model

      return await missionModel.findById(parent.assignedMission);
    },
  },
  Mission: {
    async assignedTo(parent) {
      console.log("parent :>> ", parent);
      const supsIdArray = parent.assignedTo;
      const supsArray = supsIdArray.map(async (supId) => {
        const singleSup = await superheroModel.findById(supId);
        return singleSup;
      });
      return supsArray;
    },
  },

  Mutation: {
    async addSuperhero(_, args) {
      const newSuperhero = new superheroModel({
        //   name: args.newSuperhero.name,
        //   secretIdentity:args.newSuperhero.secretIdentity
        //....
        //we can also use the spread operator to use all the fields in the args object
        ...args.newSuperhero,
      });
      return await newSuperhero.save();
    },
    async addMission(_, args) {
      const newMission = new missionModel({
        //   name: args.newSuperhero.name,
        //   secretIdentity:args.newSuperhero.secretIdentity
        //....
        //we can also use the spread operator to use all the fields in the args object
        ...args.newMission,
      });
      return await newMission.save();
    },
    async deleteSuperhero(_, args) {
      const deleteSup = await superheroModel.findByIdAndRemove(args.id);
      return deleteSup;
    },
    async deleteMission(_, args) {
      const deleteMission = await missionModel.findByIdAndRemove(args.id);
      return deleteMission;
    },
    async updateSuperhero(_, args) {
      const updatedSuperhero = await superheroModel.findByIdAndUpdate(
        args.id,
        {
          $set: {
            secretIdentity: args.edits.secretIdentity,
            assignedMission: args.edits.assignedMission,
            name: args.edits.name,
          },
          $addToSet: { superpowers: args.edits.superpowers },
        },
        { new: true }
      );
      return updatedSuperhero;
    },
  },
};

export default resolvers;
