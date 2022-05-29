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
    },
    {timestamps: true},
);

userSchema.method('toJSON', function() {
  const {_id, ...object} = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('UserSchema', userSchema);