var mongoose=require('mongoose');

var dbURI = 'mongodb://localhost/songkick';
mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true });

mongoose.connection.on('connected', function(){
    console.log('Mongoose is connected on: '+dbURI);
});

mongoose.connection.on('error', function(err){
    console.log('Error message' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose is disconnected');
});

require('./songs');