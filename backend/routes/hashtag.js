const express = require('express');
const db = require('../models');
const router = express.Router();


router.get('/:tag', async (req, res, next ) => {
    try {
        let where = {};
        if (parseInt(req.query.lastId, 10)) {
            where = {
                id: {
                    [db.Sequelize.Op.lt]: parseInt(req.query.lastId, 10),
                },
            };
        }
        console.log("hashtag limit : ", req.query.limit);
        console.log("hashtag query : ", req.query);

        const posts = await db.Post.findAll( {
            where,
            include: [{
                model: db.Hashtag,
                where: { name: decodeURIComponent(req.params.tag) },
            },{
            model: db.User,
            attributes: ['id', 'nickname'],
        }, {
            model: db.Image
        }, {
            model: db.User,
            through: 'Like',
            as: 'Likers',
            attributes: ['id'],
        }, {
            model: db.Post,
            as: 'Retweet',
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],
            }, {
                model: db.Image,
            }],
        }],
        order: [['createdAt', 'DESC']],
        limit: parseInt(req.query.limit, 10),
        
        });
        res.json(posts);
    } catch (e) {
        console.error(e);
        next(e);
    }
})

router.get('/', async (req, res, next ) => {
    try {
        // let where = {};
        // if (parseInt(req.query.lastId, 10)) {
        //     where = {
        //         id: {
        //             [db.Sequelize.Op.lt]: parseInt(req.query.lastId, 10),
        //         },
        //     };
        // }
        // //console.log("req.query.limit : ", req.query.limit);
        // console.log("req.query : ", req.query);

        // const posts = await db.Post.findAll( {
        //     where,
        //     include: [{
        //         model: db.User,
        //         through: 'Like',
        //         attributes: ['id', 'nickname'],
        //     },{
        //     model: db.UserAsset,
        // },],
        // order: [['createdAt', 'DESC']],
        // limit: parseInt(req.query.limit, 10),
        // });
        var query = 'SELECT * from fixunit.Like;';
        var values = {
        name: 'chris'
        };

        db.sequelize.query(query, {replacements: values})
        .spread(function (results, metadata) {
        // 쿼리 실행 성공
            console.log("실행 성공 : ", results)
            console.log("metadata : ", metadata)

        }, function (err) {
        // 쿼리 실행 에러
            console.log("실패 : ", err)
        });

        //console.log("posts : ", posts);

        res.json("posts");
    } catch (e) {
        console.error(e);
        next(e);
    }
})

module.exports = router;

/*
Query Result
SELECT * FROM Post WHERE Post.id IN (SELECT PostId FROM fixunit.Like as LikeT GROUP BY PostId )


SELECT *, COUNT(LikeT.UserId) FROM Post LEFT JOIN fixunit.Like as LikeT ON Post.id = LikeT.PostId
GROUP BY PostId;


SELECT *, COUNT(LikeT.UserId) FROM Post  INNER JOIN fixunit.Like as LikeT 
ON Post.id = LikeT.PostId
GROUP BY LikeT.PostId
ORDER BY COUNT(LikeT.UserId) DESC

같은 쿼리
SELECT * FROM UserAsset, Post WHERE UserAsset.PostId = Post.id;
SELECT * FROM UserAsset LEFT JOIN Post ON UserAsset.PostId = Post.id;


갤러리용 쿼리문 (순위별로 결과 받음)
SELECT *, COUNT(UserAsset.PostId) FROM UserAsset, Post, fixunit.Like as LikeT 
WHERE UserAsset.PostId = Post.id AND Post.id = LikeT.PostId
GROUP BY LikeT.PostId
ORDER BY COUNT(UserAsset.PostId) DESC
LIMIT 3;
*/