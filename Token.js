const mongoose=require('mongoose');
const schema=new mongoose.Schema({
  student:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
  advisorName:String,
  preferredDate:Date,
  preferredTimeSlot:String,
  note:String,
  number:Number,
  status:String
});
module.exports=mongoose.model('Token',schema);
