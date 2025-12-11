const mongoose=require('mongoose');
const schema=new mongoose.Schema({
  code:String,
  title:String,
  credit:Number,
  prerequisites:[{type:mongoose.Schema.Types.ObjectId, ref:'Course'}]
});
module.exports=mongoose.model('Course',schema);
