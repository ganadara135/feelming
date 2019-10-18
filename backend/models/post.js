module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        // content: {
        //     type: DataTypes.TEXT,       // 매우 긴 글
        //     allowNull: false,
        // },
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
        
    }, {
        charset: 'utf8mb4',             // 한글 + 이모티콘 지원
        collate: 'utf8mb4_general_ci',    // 한글이 저장됨
        tableName: 'Post',    // 이렇게 해야 테이블명이 위 정의한 이름과 같아짐
    });

    Post.associate = (db) => {
        // db.Post.belongsTo(db.User); // ForienKey 기능과 같음, 테이블에 UserId 컬럼이 생김
        db.Post.hasMany(db.Comment);
        //db.Post.hasMany(db.Image);
        db.Post.belongsTo(db.Post, { as: 'Retweet' }); // RetweetId 컬럼 생김 // retweet  관계 표현 , ERD 그림 참고
        db.Post.belongsToMany(db.KeywordTag, { through: 'PostKeywordTag'});
        db.Post.belongsToMany(db.User, { through: 'Like'});

        db.Post.hasMany(db.UserAsset);
        db.Post.belongsTo(db.User);
    }

    return Post;
}