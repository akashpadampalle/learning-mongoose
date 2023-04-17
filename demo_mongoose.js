const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    const kittySchema = new mongoose.Schema({
        name: String
    })

    // we can add methods to the model but need to done before compiling schema into model
    kittySchema.methods.speak = function (){
        const greeting = this.name 
        ? "Meow my name is " + this.name
        : "Meow i don't have name";

        console.log(greeting);
    }

    // model is a class with which we create a document
    const Kitten = mongoose.model('Kitten', kittySchema);
    const silence = new Kitten({name: "Silence"});
    console.log(silence);


}