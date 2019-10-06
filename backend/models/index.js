const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
//const config = require(__dirname + '../config/config.json')[env];
//const config = require('../config/config.json')[env];
const config = require('../config/config.js')[env];
const db = {};

// console.log("config : ", config)
const  sequelize = new Sequelize(config.database, config.username, config.password, config);


// 테이블 선언
db.Comment = require('./comment')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);
db.Image = require('./image')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);
db.UserAsset = require('./userAsset')(sequelize, Sequelize);


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
