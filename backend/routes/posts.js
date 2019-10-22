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
                through: {
                    attributes: ['id'],
                    as: 'Likers',
                   // where: {UserId: User.id, PostId: Post.id}
                },
            }
            ],
            //order: [['createdAt', 'DESC'], ['updateAt', 'ASC']]
            order: [['createdAt', 'DESC'], ],
            limit: parseInt(req.query.limit, 10),
        });


// Executing (default): SELECT `Post`.*, `Users`.`id`, `Users`.`nickname`, `Users->Likers`.`createdAt`, `Users->Likers`.`updatedAt`, `Users->Likers`.`PostId`,`Users->Likers`.`UserId`,
// `UserAssets`.`id`, `UserAssets`.`src`, `UserAssets`.`dataType`, `UserAssets`.`createdAt`, `UserAssets`.`updatedAt`,`UserAssets`.`PostId`, `UserAssets`.`UserId`,
// `Comments`.`id`, `Comments`.`content`, `Comments`.`createdAt`, `Comments`.`updatedAt`, `Comments`.`UserId`, `Comments`.`PostId` 
// FROM (SELECT `Post`.`id`, `Post`.`description`, `Post`.`category`, `Post`.`publicScope`, `Post`.`copyright`, `Post`.`createdAt`, `Post`.`updatedAt`, `Post`.`RetweetId`, `Post`.`UserId` 
//       FROM `Post` ORDER BY `Post`.`createdAt` DESC LIMIT 10) 
//       LEFT OUTER JOIN ( `Like` AS `Users->Likers` INNER JOIN `User` AS `Users` ON `Users`.`id` = `Users->Likers`.`UserId`) 
// ON `Post`.`id` = `Users->Likers`.`PostId` 
// LEFT OUTER JOIN `UserAsset` ON `Post`.`id` = `UserAssets`.`PostId` 
// LEFT OUTER JOIN `Comment`  ON `Post`.`id` = `Comments`.`PostId` 
// ORDER BY `Post`.`createdAt` DESC

        res.json(posts);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;