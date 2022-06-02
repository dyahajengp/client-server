const {Schema, model} = require('mongoose');

const dataSchema = new Schema(
    {
      activities: [
        {activityName: String},
      ],
    },
);

dataSchema.method('toJSON', function() {
  const {_id, ...object} = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('DataSchema', dataSchema);
