module.exports = (sequelize, DataTypes) => {
    const KeywordTag = sequelize.define('KeywordTag', {
        keyword: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4',             // 한글 + 이모티콘 지원
        collate: 'utf8mb4_general_ci',    // 한글이 저장됨
        tableName: 'KeywordTag',    // 이렇게 해야 테이블명이 위 정의한 이름과 같아짐
    });

    KeywordTag.associate = (db) => {
        db.KeywordTag.belongsToMany(db.Post, { through: 'PostKeywordTag'});   // M : M 관계
    }
    return KeywordTag;
}