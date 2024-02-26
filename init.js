const mongoose = require("mongoose");
const Chat=require("./models/chat.js");


main()
.then(()=>{
    console.log("connection successfull")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats=[
    {
    from:"neha",
    to:"priya",
    msg:"send me your exam sheet",
    created_at: new Date()
   },
   {
    from:"preeti",
    to:"kavya",
    msg:"send me pictures of notes",
    created_at: new Date()
   },
   {
    from:"navya",
    to:"pavana",
    msg:"let's go for a trip",
    created_at: new Date()
   },
   {
    from:"naresh",
    to:"priyesh",
    msg:"teach me js calback",
    created_at: new Date()
   },
   {
    from:"nayana",
    to:"payana",
    msg:"i am not coming tommorrow",
    created_at: new Date()
   },

];
Chat.insertMany(allChats);