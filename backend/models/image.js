module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
        content: {
            type: DataTypes.STRING(200),       // 매우 긴 글
            allowNull: false,
        },
    }, {
        charset: 'utf8',             // 한글 
        collate: 'utf8_general_ci',    // 한글이 저장됨
        tableName: 'Image',    // 이렇게 해야 테이블명이 위 정의한 이름과 같아짐
    });

    Image.associate = (db) => {
        db.Image.belongsTo(db.Post);
    }

    return Image;
}