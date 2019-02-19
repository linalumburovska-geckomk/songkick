var mongoose=require('mongoose');

var songSchema = new mongoose.Schema({
    name: {type: String, required: true},
    genre: String,
    artist: {type: String, required: true},
    characteristics: String,
    album: String,
    year: Number,
    theme: String,
    picture: String,
    otherSong: String
});

mongoose.model('Songs', songSchema, 'Songs');