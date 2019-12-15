module.exports = (sequelize, DataTypes) => {
    const UserAsset = sequelize.define('UserAsset', {
        src: {
            type: DataTypes.STRING(200),       
            allowNull: false,
        },
        dataType: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        fileType: {
            type: DataTypes.STRING(50),
            allowNull: true,
        }
    }, {
        charset: 'utf8',             // 한글 
        collate: 'utf8_general_ci',    // 한글이 저장됨
        tableName: 'UserAsset',    // 이렇게 해야 테이블명이 위 정의한 이름과 같아짐
    });

    UserAsset.associate = (db) => {
        db.UserAsset.belongsTo(db.User, {allowNull: false});        // forienKey 는 앞글자가 대문자임 UserId 
        db.UserAsset.belongsTo(db.Post, {allowNull: true});
    }

    return UserAsset;
}