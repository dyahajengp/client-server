const {Schema, model} = require('mongoose');

const dataSchema = new Schema(
    {
      bmr: Number,
      activities: [
        {activityName: String,
          duration: Number},
      ],
      totalCalories: Number,
      foodLists: [
        {food: String,
          vegetable: String,
          fruit: String},
      ],
    },
    {timestamps: true},
);

dataSchema.method('toJSON', function() {
  const {...object} = this.toObject();
  // object.id = _id;
  return object;
});

module.exports = model('dataSchema', dataSchema);
