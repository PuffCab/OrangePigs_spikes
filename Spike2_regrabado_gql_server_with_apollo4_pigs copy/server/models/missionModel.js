import mongoose from "mongoose";

const missionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    required: true,
  },
  assignedTo: {
    type: [String],
  },
});

const missionModel = mongoose.model("Mission", missionSchema);
export default missionModel;
