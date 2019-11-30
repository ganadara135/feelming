const express = require('express');
const db = require('../models');
const router = express.Router();
const { isLoggedIn } = require('./middleware');


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
        console.log("req.params.tag : ", req.params.tag);
        console.log("decodeURIComponent(req.params.tag) : ", decodeURIComponent(req.params.tag));
        let whereKeywordTag = {};
        if(req.params.tag !== 'undefined' ){
            whereKeywordTag = {
                keyword: {
                    [db.Sequelize.Op.like]: "%"+ decodeURIComponent(req.params.tag)+"%"
                }
            }
        }
        // console.log(" whereKeywordTag.where : ", whereKeywordTag.where)
        // console.log(" whereKeywordTag : ", whereKeywordTag)
        // //let test = whereKeywordTag.where;

        //console.log(" test : ", test)
        const posts = await db.Post.findAll( {
            where,
            
            include: [{
                model: db.KeywordTag,
                where: whereKeywordTag
                // where: { keyword: {
                //     [db.Sequelize.Op.like]: "%"+ decodeURIComponent(req.params.tag)+"%"
                // }},
            },
            //db.UserAsset,
            {        // 나중에 해제
                model: db.User,
                attributes: ['id', 'nickname'],
                //where: { id: 'Post.UserId'},
            },
            {
                model: db.UserAsset,
                //where: {PostId: 'Post.id'}
            }
            ],
            order: [['createdAt', 'DESC']],
            limit: parseInt(req.query.limit, 10),
        });
        res.json(posts);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

// router.get('/', async (req, res, next ) => {
//     try {
//         // let where = {};
//         // if (parseInt(req.query.lastId, 10)) {
//         //     where = {
//         //         id: {
//         //             [db.Sequelize.Op.lt]: parseInt(req.query.lastId, 10),
//         //         },
//         //     };
//         // }
//         // //console.log("req.query.limit : ", req.query.limit);
//         // console.log("req.query : ", req.query);

//         // const posts = await db.Post.findAll( {
//         //     where,
//         //     include: [{
//         //         model: db.User,
//         //         through: 'Like',
//         //         attributes: ['id', 'nickname'],
//         //     },{
//         //     model: db.UserAsset,
//         // },],
//         // order: [['createdAt', 'DESC']],
//         // limit: parseInt(req.query.limit, 10),
//         // });
//         var query = 'SELECT * from fixunit.Like;';
//         var values = {
//         name: 'chris'
//         };

//         db.sequelize.query(query, {replacements: values})
//         .spread(function (results, metadata) {
//         // 쿼리 실행 성공
//             console.log("실행 성공 : ", results)
//             console.log("metadata : ", metadata)

//         }, function (err) {
//         // 쿼리 실행 에러
//             console.log("실패 : ", err)
//         });

//         //console.log("posts : ", posts);

//         res.json("posts");
//     } catch (e) {
//         console.error(e);
//         next(e);
//     }
// })


router.post('/MyKeyword', isLoggedIn, async (req, res, next ) => {
    console.log("++++++++++++++++++++++++++++++++++++++++")
    try {
        console.log("-------------req.user : ", req.user.id); 
        const query = `SELECT *,  COUNT(KeywordTagId) AS aKeywordTotal 
        from Post LEFT OUTER JOIN ( PostKeywordTag INNER JOIN KeywordTag ON KeywordTag.id = PostKeywordTag.KeywordTagId) 
        ON Post.id = PostKeywordTag.PostId WHERE Post.UserId = 2  GROUP BY PostKeywordTag.PostId;` 

        // const result = await db.Post.findAll( {
        //     where: { UserId: parseInt(req.user.id, 10) },
        //     include: [{
        //         model: db.KeywordTag,
        //         attributes: ['keyword'],
        //     },
        //     ],
        //     group: ['keyword'],
        // });

        await db.sequelize.query(query)
            .then(function(result){
                console.log("result[0] : ", result[0])
                res.json(result[0])
            });

        //res.json(result);
    } catch (e) {
        console.error(e);
        next(e);
    }
})

module.exports = router;

// SELECT `Post`.`id`, DISTINCT(`KeywordTag`.`keyword`) AS `keyword`, `KeywordTags`.`id` AS `KeywordTags.id`, 
// `KeywordTags`.`keyword` AS `KeywordTags.keyword`, `KeywordTags`.`createdAt` AS `KeywordTags.createdAt`, 
// `KeywordTags`.`updatedAt` AS `KeywordTags.updatedAt`, `KeywordTags->PostKeywordTag`.`createdAt` AS `KeywordTags.PostKeywordTag.createdAt`, 
// `KeywordTags->PostKeywordTag`.`updatedAt` AS `KeywordTags.PostKeywordTag.updatedAt`, `KeywordTags->PostKeywordTag`.`KeywordTagId` AS `KeywordTags.PostKeywordTag.KeywordTagId`,
//  `KeywordTags->PostKeywordTag`.`PostId` AS `KeywordTags.PostKeywordTag.PostId` FROM `Post` AS `Post` 
//  LEFT OUTER JOIN ( `PostKeywordTag` AS `KeywordTags->PostKeywordTag` INNER JOIN `KeywordTag` AS `KeywordTags` 
//  ON `KeywordTags`.`id` = `KeywordTags->PostKeywordTag`.`KeywordTagId`) 
//  ON `Post`.`id` = `KeywordTags->PostKeywordTag`.`PostId` WHERE `Post`.`UserId` = 2;

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