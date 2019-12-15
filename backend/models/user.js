module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {     // 테이블명은 users 로 복수형으로 변경됨
        userId: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true
        },
        nickname: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        selfIntro: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',    // 한글이 저장됨,
        tableName: 'User',    // 이렇게 해야 테이블명이 위 정의한 이름과 같아짐
    });

    User.associate = (db) => {
        
        db.User.hasMany(db.Comment);
        db.User.hasMany(db.Cooperate);

        db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });

        // 자가 호출 M : M 관계는 아래와 같이 2번에 걸쳐서 적는다.
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'followingId'});
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'followerId'});

        db.User.hasMany(db.UserAsset);
        db.User.hasMany(db.Post, { as: 'Posts'});
    }

    return User;
}

/*
사용 예시
const user = {
    id: 1,
    nickname: 'kcod',
    Liked: [{'게시글1'}, {'게시글2'}, {"게시글3"}],
    Followers: [{사용자1}, {사용자2}, {사용자3}]
};

*/
