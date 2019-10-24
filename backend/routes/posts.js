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
                model: db.User,
                attributes: ['id', 'nickname'],     // 비밀번호 가져오지 않기
            }, {
                model: db.UserAsset
            }, {
                model: db.User,
                through: 'Like',
                as: 'Liker',
                attributes: ['id'],
            }
            ],
            //order: [['createdAt', 'DESC'], ['updateAt', 'ASC']]
            order: [['createdAt', 'DESC'], ],
            limit: parseInt(req.query.limit, 10),
        });

     //   console.log("table posts[0].Liker : ", posts[0].Liker)
        res.json(posts);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;