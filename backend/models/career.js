module.exports = (sequelize, DataTypes) => {
    const Career = sequelize.define('Career', {
        position: {
            type: DataTypes.STRING(255),       
            allowNull: true,
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    }, {
        charset: 'utf8',             // 한글 
        collate: 'utf8_general_ci',    // 한글이 저장됨
        tableName: 'Career',    // 이렇게 해야 테이블명이 위 정의한 이름과 같아짐
    });

    Career.associate = (db) => {
        db.Career.belongsTo(db.User);        // foriegnKey 는 앞글자가 대문자임 UserId 
    }

    return Career;
}