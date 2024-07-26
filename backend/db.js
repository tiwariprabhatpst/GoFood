// const mongoose = require("mongoose")
// const mongoURI = "mongodb://127.0.0.1:27017/gofoodmern";

// const mongoDB = async()=>{
//     await mongoose.connect(mongoURI,async(err,result)=>{
//     if(err) console.log("---",err);
//     else{
//         console.log("Connected");
//         const fetched_data = await mongoose.connection.db.collection("food_items");
//         fetched_data.find({}).toArray(function(err, data){
//             if(err) console.log(err);
//             else{
//                 console.log();
//             }
//         })

//     }
//     });
// }

// module.exports = mongoDB;

const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/gofoodmern";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected");
        const fetched_data = await mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        global.food_items = data;
        const foodCategory = await mongoose.connection.db.collection("foodCategory");
        const catData = await foodCategory.find({}).toArray();
        global.foodCategory = catData;
    } catch (err) {
        console.log("---", err);
    }
}

module.exports = mongoDB;
