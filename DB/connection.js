const mongoose = require('mongoose');

const connectionString = process.env.connection_string

mongoose.connect(connectionString).then(() => {
    console.log(`Mongodb Atlas connected to your pfServer`);
}).catch((error) => {
    console.log(`Mongodb connection failed`,error);
});
