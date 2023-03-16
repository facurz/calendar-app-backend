const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log('MongoDB Connected');
    } catch (err) {
        console.log(err);
        throw new Error('Error a la hora de inicializar la base de datos');
    }
};

module.exports = {
    dbConnection,
};
