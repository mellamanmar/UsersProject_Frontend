const { mongoose, trusted } = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        require: true,
        minlength: 6
    },
    content: {
        type: String,
        require: true,
        minlength: 20
    },
    username: {
        type:String,
        // type: Schema.Types.ObjectId, 
        // ref: "User", 
        require: true,
    },
});


// Exportar el modelo para su uso en otras partes de la aplicación
module.exports = mongoose.model('Post', PostSchema);
