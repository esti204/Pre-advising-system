const mongoose=require('mongoose');

const sectionSchema=new mongoose.Schema({
  course:{type:mongoose.Schema.Types.ObjectId, ref:'Course'},
  code:String,
  faculty:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
  capacity:Number,
  enrolledCount:Number,
  times:[{day:String,start:String,end:String}]
});
module.exports=mongoose.model('Section',sectionSchema);
