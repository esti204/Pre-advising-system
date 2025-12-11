const jwt=require('jsonwebtoken');
const User=require('../models/User');

exports.authMiddleware = async(req,res,next)=>{
  const header=req.headers.authorization;
  if(!header) return res.status(401).json({msg:"No token"});
  const token=header.split(" ")[1];
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch(err){
    res.status(401).json({msg:"Invalid Token"});
  }
};
exports.roleGuard=(...roles)=>(req,res,next)=>{
  if(!roles.includes(req.user.role)) return res.status(403).json({msg:"Forbidden"});
  next();
};
