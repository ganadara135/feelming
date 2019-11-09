module.exports = (sequelize, DataTypes) => {
    const Cooperate = sequelize.define('Cooperate', {
        cooperate: {
            type: DataTypes.BOOLEAN,       // 협력을 동의했는지 안했는지 체크
            allowNull: true,
        },
    }, {
        charset: 'utf8mb4',             // 한글 + 이모티콘 지원
        collate: 'utf8mb4_general_ci',    // 한글이 저장됨
        tableName: 'Cooperate',    // 이렇게 해야 테이블명이 위 정의한 이름과 같아짐
    });
    

    Cooperate.associate = (db) => {
        db.Cooperate.belongsTo(db.User);
        db.Cooperate.belongsTo(db.Post);
    }
    return Cooperate;
}