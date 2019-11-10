const express = require('express');
const db = require('../models');
const router = express.Router();

// 현재 등록돼 있는 모든 작품을 끌어옴
router.get('/', async (req, res, next) => {
    try {
        let where = {};
        if (parseInt(req.query.lastId, 10)) {
            where = {
                id: {
                    [db.Sequelize.Op.lt]: parseInt(req.query.lastId, 10), //less than
                },
            };
        }
        const posts = await db.Post.findAll({
            where,
            include: [{
                model: db.Cooperate,                // LEFT OUTER JOIN,  ForeinKey 로 묶임
            },{
                model: db.User,
                attributes: ['id', 'nickname'],     // 비밀번호 가져오지 않기
                // include: [{                         // LEFT OUTER JOIN
                //     model: db.Cooperate,
                //     //where: { UserId: req.params.id },
                // }]
            }, {
                model: db.UserAsset
            }, {
                model: db.User,
                through: 'Like',
                as: 'Liker',
                attributes: ['id'],
                
            },],
            //order: [['createdAt', 'DESC'], ['updateAt', 'ASC']]
            order: [['createdAt', 'DESC'], ],
            limit: parseInt(req.query.limit, 10),
        });

        

     //   console.log("table posts[0].Liker : ", posts[0].Liker)

        console.log("posts in routes : ", posts)

        res.json(posts);
    } catch (e) {
        console.error(e);
        next(e);
    }
});


// 요청자 등록한 모든 메디아 자료 전달해줌
router.get('/myMedia', async (req, res, next) => {
    try {
        let where = {};
        if (parseInt(req.query.lastId, 10)) {
            where = {
                id: {
                    [db.Sequelize.Op.lt]: parseInt(req.query.lastId, 10), //less than
                },
            };
        }
        const myMediaAll = await db.UserAsset.findAll({
            where,
            order: [['createdAt', 'DESC'], ],
            limit: parseInt(req.query.limit, 10),
        });

        res.json(myMediaAll);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;