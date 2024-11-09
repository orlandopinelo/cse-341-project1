const dotenv = require(`dotenv`)
dotenv.config();

const MongoClient = require(`mongodb`).MongoClient;

let _db;



const initDb = (callback) => {
    if (_db) {
        console.log('Db is already initialized');
        return callback(null, _db)

    }
    MongoClient.connect(process.env.MONGODB_URL) 
    .then((client) => {
        _db = client;
        callback(null, _db);

    })
    .catch((err) => {
        callback(err) 
    })
};
 



const getDatabase = () => {
    if (!_db)
        throw Error('Database not initialized')
    {
        return _db
    }
};




module.exports = {initDb,getDatabase}