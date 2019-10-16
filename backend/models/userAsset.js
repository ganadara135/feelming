module.exports = (sequelize, DataTypes) => {
    const UserAsset = sequelize.define('UserAsset', {
        src: {
            type: DataTypes.STRING(200),       
            allowNull: false,
        },
        dType: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING(225),
            allowNull: true,
        },
        category: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        publicScope: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        keywords: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
    }, {
        charset: 'utf8',             // 한글 
        collate: 'utf8_general_ci',    // 한글이 저장됨
        tableName: 'UserAsset',    // 이렇게 해야 테이블명이 위 정의한 이름과 같아짐
    });

    UserAsset.associate = (db) => {
        db.UserAsset.belongsTo(db.User);        // forienKey 는 앞글자가 대문자임 UserId 
    }

    return UserAsset;
}