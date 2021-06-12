const mongoose = require("mongoose");

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log(`Connection Successful to DataBase`);
}).catch((err) => {
    console.log(`Cannot Connect to DataBase ==>> ${err}`);
})