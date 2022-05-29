const {Schema, model} = require('mongoose');
// const Activities = require('./dataset');

const taskSchema = new Schema(
    {
      //   name: {
      //     type: String,
      //     required: true,
      //   },
      //   description: String,
      weightCurrent: Number,
      height: Number,
      gender: String,
      allergy: String,
      age: Number,
      activities: [
        {activityName: String,
          duration: Number},
      ],
      weightGoal: Number,
      calories: Number,
      foodLists: [
        {food: String,
          vegetable: String,
          fruit: String},
      ],
    },
    {timestamps: true},
);

taskSchema.method('toJSON', function() {
  const {...object} = this.toObject();
  // object.id = _id;
  return object;
});

module.exports = model('dataSchema', taskSchema);
