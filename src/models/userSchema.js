const {Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
      email: {
        type: String,
        required: true,
        max: 100,
      },
      password: {
        type: String,
        required: true,
        max: 6,
        max: 1024,
      },
      weightCurrent: Number,
      height: Number,
      gender: String,
      age: Number,
      goals: String,
      activities: [
        {activityName: String,
          duration: Number},
      ],
      totalCalories: Number,
      foodLists: [
        {breakfast: {
          food: String,
          vegetable: String,
          fruit: String,
        }},
        {lunch: {
          food: String,
          vegetable: String,
          fruit: String,
        }},
        {dinner: {
          food: String,
          vegetable: String,
          fruit: String,
        }},
      ],
    },
    {timestamps: true},
);

userSchema.method('toJSON', function() {
  const {_id, ...object} = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('UserSchema', userSchema);
