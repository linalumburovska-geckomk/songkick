var mongoose=require('mongoose');
var Songs=mongoose.model('Songs');

var jsonAnswer=function(response, status, content){
    response.status(status);
    response.json(content);
}

module.exports.getAllSongs=function(request,response){
  Songs
  .find().exec(function(error,songs){
    jsonAnswer(response, 200, songs);
  })
};

module.exports.getSong=function(request,response){
    Songs
    .findById(request.params.idSong)
    .exec(function(error, song) {
      if(error){
        jsonAnswer(response,400,error);
      }
        jsonAnswer(response, 200, song);  
    })
};

module.exports.createSong=function(request,response){
  Songs
  .create({
    name: request.body.name,
    genre: request.body.genre,
    artist: request.body.artist,
    characteristics: request.body.characteristics,
    album: request.body.album,
    year: request.body.year,
    theme: request.body.theme,
    picture: request.body.picture,
    otherSong: request.body.otherSong, 
  },
    function(error, song){
      if(error){
        jsonAnswer(response, 400, error);
      }else {
        jsonAnswer(response, 201, song);
      }
    });
};

module.exports.updateSong=function(request,response){
  
  Songs
    .findById(request.params.idSong)
    .exec(
      function(error, song) {
        song.name=request.body.name,
        song.genre=request.body.genre,
        song.artist=request.body.artist,
        song.characteristics=request.body.characteristics,
        song.album=request.body.album,
        song.year=request.body.year,
        song.theme=request.body.theme,
        song.picture=request.body.picture,
        song.otherSong=request.body.otherSong;
         
        song.save(function(error, song) {
          if (error) {
            jsonAnswer(response, 400, error);
          } else {
            jsonAnswer(response, 200, song);
          }
        });
      }
    );
};

module.exports.deleteSong=function(request,response){
  Songs
  .findByIdAndRemove(request.params.idSong)
  .exec(function(error,song){
    if(error) {
      jsonAnswer(response, 400, error);
    } else {
      jsonAnswer(response, 204, null);
    }
  });
};