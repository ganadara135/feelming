module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        content: {
            type: DataTypes.TEXT,       // 매우 긴 글
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4',             // 한글 + 이모티콘 지원
        collate: 'utf8mb4_general_ci',    // 한글이 저장됨
        tableName: 'Comment',    // 이렇게 해야 테이블명이 위 정의한 이름과 같아짐
    });
    

    Comment.associate = (db) => {
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
    }
    return Comment;
}