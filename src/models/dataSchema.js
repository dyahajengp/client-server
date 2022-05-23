const {Schema, model} = require('mongoose');

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
      activities: String,
      weightGoal: Number,
      calories: Number,
    },
    {timestamps: true},
);

taskSchema.method('toJSON', function() {
  const {_id, ...object} = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('dataSchema', taskSchema);
