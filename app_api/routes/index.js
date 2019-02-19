var express = require('express');
var router = express.Router();

var ctrlSongs=require('../controllers/songs');

router.get('/songs',ctrlSongs.getAllSongs);
router.get('/songs/:idSong', ctrlSongs.getSong);
router.post('/songs', ctrlSongs.createSong);
router.put('/songs/:idSong', ctrlSongs.updateSong);
router.delete('/songs/:idSong',ctrlSongs.deleteSong);

module.exports=router;