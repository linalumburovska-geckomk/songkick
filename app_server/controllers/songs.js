var request = require('request');
var apiParameters = {
  server: 'http://localhost:' + process.env.PORT
};

var dataListSongs=function(req, res,content){
  res.render('listSongs', { 
      title: 'SongKick',
      subtitle: 'Find your favourite song',
      description: 'My songs',
      songs: content
  });
}

var dataDetailsSong= function(req,res,content){
   res.render('detailsSong', { 
      _id: content._id,
      name: content.name,
      artist: content.artist,
      genre: content.genre,
      album: content.album,
      year: content.year,
      theme: content.theme,
      characteristics: content.characteristics,
      picture: content.picture,
      otherSong: content.otherSong
      
   });
}

var dataNewSong = function(req,res){
  res.render('addNewSong', { 
      title: 'Add new song to MySongs' 
  });
}

var dataUpdateSong = function(req,res,content) {
  res.render('updateSong', { 
      title: 'Update info about a song',
      _id: content._id,
      name: content.name,
      artist: content.artist,
      genre: content.genre,
      album: content.album,
      year: content.year,
      theme: content.theme,
      characteristics: content.characteristics,
      picture: content.picture,
      otherSong: content.otherSong
  });
}

module.exports.listSongs = function(req, res) {
  var path = '/api/songs';
  var reqParametars = {
    url: apiParameters.server + path,
    method: 'GET',
    json: {},
  };
  request(
    reqParametars,
    function(error, response, content) {
      dataListSongs(req,res,content);   
    }
  );
};

module.exports.detailsSong = function(req, res) {
 var path = '/api/songs/'+req.params.idSong;
  var reqParametars = {
    url: apiParameters.server + path,
    method: 'GET',
    json: {},
  };
  request(
    reqParametars,
    function(error, response, content) {
      dataDetailsSong(req,res,content);   
    }
  );
};

module.exports.getFormNewSong = function(req,res){
  dataNewSong(req,res);
}

module.exports.addNewSong = function(req, res) {
  var path = '/api/songs';
  var data ={
    name: req.body.name,
    artist: req.body.artist,
    genre: req.body.genre
  }
  var reqParametars = {
    url: apiParameters.server + path,
    method: 'POST',
    json: data,
  };
  request(
    reqParametars,
    function(error, response, content) {
      if(response.statusCode==201){
        res.redirect('/');
      }
    }
  );
};

module.exports.deleteSongOnClick = function(req,res) {
  var path = '/api/songs/'+req.params.idSong;
  var reqParametars = {
    url: apiParameters.server + path,
    method: 'DELETE',
    json: {},
  };
  request(
    reqParametars,
    function(error, response, content) {
      if(response.statusCode==204){
        res.redirect('/');
      }
    }
  );
}


module.exports.getUpdateForm=function(req,res,content){
 var path = '/api/songs/'+req.params.idSong;
  var reqParametars = {
    url: apiParameters.server + path,
    method: 'GET',
    json: {},
  };
  request(
    reqParametars,
    function(error, response, content) {
      dataUpdateSong(req,res,content);   
    }
  );
}


module.exports.updateSong =function(req,res){
  
  var path = '/api/songs/'+req.params.idSong;
  var data ={
    name: req.body.name,
    artist: req.body.artist,
    genre: req.body.genre,
    album: req.body.album,
    year: req.body.year,
    theme:req.body.theme,
    characteristics:req.body.characteristics,
    picture: req.body.picture,
    otherSong: req.body.otherSong
  }

  var reqParametars = {
    url: apiParameters.server + path,
    method: 'PUT',
    json: data,
  };
  request(
    reqParametars,
    function(error, response, content) {
      if(response.statusCode==200){
        res.redirect('/song/'+req.params.idSong);
      }
    }
  );
}