const mongoose=require('mongoose');
mongoose.connect(process.env.uri)
.then(()=>{
    console.log('connected to atls');
})
.catch((e)=>{
    console.log('error cconnot connected')
})