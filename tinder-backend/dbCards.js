//OUtline the structer of the tinder cards.
import mongoose from 'mongoose'
const { Schema } = mongoose;

const cardSchema =  mongoose.Schema({
    name: String,
    imgUrl: String,
}
)

// this is exporting our tables and calling the collection name as 'cards'
export default mongoose.model('cards', cardSchema)