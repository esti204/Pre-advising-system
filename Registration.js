const mongoose=require('mongoose');
const schema=new mongoose.Schema({
  student:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
  course:{type:mongoose.Schema.Types.ObjectId, ref:'Course'},
  section:{type:mongoose.Schema.Types.ObjectId, ref:'Section'},
  status:String
});
module.exports=mongoose.model('Registration',schema);
