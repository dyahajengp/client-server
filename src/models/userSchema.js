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
      name: String,
      weightCurrent: Number,
      height: Number,
      gender: String,
      age: Number,
      goals: String,
      activities: [
        {activityName: String,
          duration: Number,
          kind: String},
      ],
      totalCalories: Number,
      foodLists: [
        {breakfast: {
          food: String,
          vegetable: String,
          fruit: String,
        },
        brunch: {
          food: String,
          vegetable: String,
          fruit: String,
        },
        lunch: {
          food: String,
          vegetable: String,
          fruit: String,
        },
        dinner: {
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
