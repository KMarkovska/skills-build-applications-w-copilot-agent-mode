import { Schema, model } from 'mongoose'

const activitySchema = new Schema({
  userId: { type: String, required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  calories: { type: Number, required: true },
  date: { type: Date, default: Date.now }
})

export const Activity = model('Activity', activitySchema)
