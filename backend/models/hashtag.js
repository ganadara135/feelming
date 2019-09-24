module.exports = (sequelize, DataTypes) => {
    const Hashtag = sequelize.define('Hashtag', {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4',             // 한글 + 이모티콘 지원
        collate: 'utf8mb4_general_ci',    // 한글이 저장됨
        tableName: 'Hashtag',    // 이렇게 해야 테이블명이 위 정의한 이름과 같아짐
    });

    Hashtag.associate = (db) => {
        db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag'});   // M : M 관계
    }
    return Hashtag;
}