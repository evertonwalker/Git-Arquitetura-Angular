var mongoose = require('mongoose');

//criando schema foto
var schema = mongoose.Schema({
    titulo: {
        type: String, 
        required:true,        
    },
    url: {
        type:String,
        require: true,
    },
});


//copilando o schema e passando o nome do modelo.
mongoose.model('Foto', schema);

