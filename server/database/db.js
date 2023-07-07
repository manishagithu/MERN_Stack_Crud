import mongoose from "mongoose"

const Connection = async(username,password) =>{
    const URL =`mongodb+srv://${username}:${password}@crud-app.hzncay5.mongodb.net/PROJECT-0?retryWrites=true&w=majority`;
try{
     await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
     console.log(`Database Conneted Successfully`)
} catch(error){
    console.log(`Error while connecting database`,error);

}
}
 export default Connection;