var express = require('express');
var router = express.Router();

// var ctrlMain = require('../controllers/main');
var ctrlSongs=require('../controllers/songs');


//router.get('/',ctrlMain.index);
router.get('/', ctrlSongs.listSongs);
router.get('/song/:idSong', ctrlSongs.detailsSong);
router.get('/add',ctrlSongs.getFormNewSong);
router.post('/add',ctrlSongs.addNewSong);
router.post('/del/:idSong', ctrlSongs.deleteSongOnClick);
router.post('/update/:idSong', ctrlSongs.updateSong);
router.get('/song/:idSong/updateForm', ctrlSongs.getUpdateForm);

module.exports = router;
