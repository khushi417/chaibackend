const asynchandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export default asynchandler














// const asynchandler=()=>{}
// const asynchandler=(fn)=>{}
// issi function ko dusra function ma pass krna h0 const asynchandler=(fn)=> async()=>{}





// const asynchandler=(fn)=> async(err,req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     }
//     catch(err){
//         res.status(err.code || 500).json({
//             success:false,
//             message: err.message;
//         })
//     }
// }
