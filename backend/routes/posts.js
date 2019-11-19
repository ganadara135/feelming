const express = require('express');
const db = require('../models');
const router = express.Router();

// const app = express();
// const Cache = require('lru-cache');
// const ssrCache = new Cache({
//     max: 20, // not more than 20 results will be cached
//     maxAge: 1000 * 60 * 5, // 5 mins
// });

// async function renderAndCache(req, res, pagePath, queryParams) {
//     const key = req.url;
//     // if page is in cache, server from cache
//     if (ssrCache.has(key)) {
//         res.setHeader('x-cache', 'HIT');
//         res.send(ssrCache.get(key));
//         return;
//     }
//     try {
//         // if not in cache, render the page into HTML
//         const html = await app.renderToHTML(req, res, pagePath,
//         queryParams);
        
//         // if something wrong with the request, let's skip the cache
//         if (res.statusCode !== 200) {
//         res.send(html);
//         return;
//         }
//         ssrCache.set(key, html);
        
//         res.setHeader('x-cache', 'MISS');
//         res.send(html);
//     } catch (err) {
//         app.renderError(err, req, res, pagePath, queryParams);
//     }
// }

// 현재 등록돼 있는 모든 작품을 끌어옴
router.get('/', async (req, res, next) => {
   // renderAndCache(req, res, '/');
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


// 요청자 등록한 모든 미디어 자료 전달해줌
router.get('/myMedia', async (req, res, next) => {
  //  console.log("req.query : ", req.query)
    try {

        const query = `Select *, @rownum := @rownum+1 AS RNUM, 
                            (SELECT COUNT(UserId) FROM UserAsset) as total 
                       FROM UserAsset, (SELECT @rownum := ${parseInt(req.query.lastId, 10)}) AS R 
                       WHERE id > ${parseInt(req.query.lastId, 10)} 
                       ORDER BY createdAt ASC 
                       LIMIT ${parseInt(req.query.limit, 10)}`;

     //   console.log("query  : ", query);

        await db.sequelize.query(query)
            .then(function(result){
                console.log("result[0] : ", result[0])
                res.json(result[0])
            });
    

// SELECT `id`, `src`, `dataType`, `fileType`, `createdAt`, `updatedAt`, `PostId`, `UserId`, 
// (SELECT COUNT(*) FROM UserAsset) AS `total` FROM `UserAsset` AS `UserAsset` ORDER BY `UserAsset`.`createdAt` DESC LIMIT 5;

// Select *, 
//        (SELECT COUNT(UserId) FROM UserAsset) as total
// FROM UserAsset;

// 행번호 넣은 쿼리 
// Select *, @rownum := @rownum+1 AS RNUM,
//         (SELECT COUNT(UserId) FROM UserAsset) as total
// FROM UserAsset, (SELECT @rownum := 0) AS R;

  //      res.json(myMediaAll);
    } catch (e) {
        console.error(e);
        next(e);
    }
});


// 요청자가 관심 표현했던(좋아요, 팔로우, 협력요청했던) 모든 미디어 자료 전달해줌
router.get('/myRelatedMedia', async (req, res, next) => {
    console.log("req.query in myRelatedMedia  : ", req.query)
    try {
        // let where = {};
        // if (parseInt(req.query.lastId, 10)) {
        //     where = {
        //         id: {
        //             [db.Sequelize.Op.lt]: parseInt(req.query.lastId, 10), //less than
        //         },
        //     };
        // }
        // const myRelatedMediaAll = await db.UserAsset.findAll({
        //     where,
        //     order: [['createdAt', 'DESC'], ],
        //     limit: parseInt(req.query.limit, 10),
        // });

        const query = `Select *, @rownum := @rownum+1 AS RNUM, 
                            (SELECT COUNT(UserId) FROM UserAsset) as total 
                       FROM UserAsset, (SELECT @rownum := ${parseInt(req.query.lastId, 10)}) AS R 
                       WHERE id > ${parseInt(req.query.lastId, 10)} 
                       ORDER BY createdAt ASC 
                       LIMIT ${parseInt(req.query.limit, 10)}`;

        await db.sequelize.query(query)
        .then(function(result){
            console.log("result[0] : ", result[0])
            res.json(result[0])
        });

        //res.json(myRelatedMediaAll);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;