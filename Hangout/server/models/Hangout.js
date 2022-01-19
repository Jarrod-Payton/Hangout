import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
export const HangoutSchema = new Schema(
  {
    location: { type: String, required: true },
    time: { type: Date, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    capacity: { type: Number, min: 1, max: 10000, required: true },
    coverImg: { type: String, required: true },
    isCancelled: { type: Boolean, required: true },
    virtual: { type: Boolean, required: true },
    type: { type: String, required: true, enum: ['party', 'get together', 'reunion', 'hangouts'] },
    creatorId: { type: ObjectId, required: true },
    creator: { type: Object }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
HangoutSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
