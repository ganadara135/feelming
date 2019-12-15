Select *, @rownum := @rownum+1 AS RNUM,  
        (SELECT COUNT(UserId) FROM UserAsset WHERE dataType != 'profileImg') as total         
    FROM UserAsset, (SELECT @rownum := 0) AS R                                                  
    WHERE UserAsset.id > 0 AND dataType != 'profileImg' AND UserAsset.UserId = 2 
    ORDER BY UserAsset.createdAt ASC 
    LIMIT 5;


SELECT Post.id, Post.title, Post.publicScope, KeywordTag.keyword, KeywordTag.id, COUNT(KeywordTagId) AS totalUsed 
 FROM Post LEFT OUTER JOIN ( PostKeywordTag INNER JOIN KeywordTag ON KeywordTag.id = PostKeywordTag.KeywordTagId) 
 ON Post.id = PostKeywordTag.PostId WHERE Post.UserId = 2  GROUP BY PostKeywordTag.KeywordTagId 



SELECT *,  COUNT(KeywordTagId) AS totalUsed 
 from Post LEFT OUTER JOIN ( PostKeywordTag INNER JOIN KeywordTag ON KeywordTag.id = PostKeywordTag.KeywordTagId) 
 ON Post.id = PostKeywordTag.PostId WHERE Post.UserId = 2  GROUP BY PostKeywordTag.KeywordTagId 






SELECT KeywordTagList.keyword, KeywordTagList.src, KeywordTagList.dataType, KeywordTagList.fileType, @rownum := @rownum+1 AS RNUM, 
    (SELECT COUNT(UserId) FROM UserAsset WHERE dataType != 'profileImg') as total  
FROM ( SELECT KeywordTag.keyword, UserAsset.src, UserAsset.dataType, UserAsset.fileType FROM UserAsset INNER JOIN Post ON UserAsset.PostId = Post.id 
    LEFT OUTER JOIN ( PostKeywordTag INNER JOIN KeywordTag ON KeywordTag.id = PostKeywordTag.KeywordTagId) 
    ON Post.id = PostKeywordTag.PostId WHERE Post.UserId = 2  GROUP BY PostKeywordTag.KeywordTagId 
) as KeywordTagList, (SELECT @rownum := 0) AS R




SELECT KeywordTag.keyword, UserAsset.src, UserAsset.dataType, UserAsset.fileType, @rownum := @rownum+1 AS RNUM, 
       (SELECT COUNT(UserId) FROM UserAsset WHERE dataType != 'profileImg') as total
 FROM UserAsset INNER JOIN Post ON UserAsset.PostId = Post.id 
    LEFT OUTER JOIN ( PostKeywordTag INNER JOIN KeywordTag ON KeywordTag.id = PostKeywordTag.KeywordTagId) 
    ON Post.id = PostKeywordTag.PostId WHERE Post.UserId = 2  GROUP BY PostKeywordTag.KeywordTagId





SELECT *,  COUNT(KeywordTagId) AS aKeywordTotal 
 from Post LEFT OUTER JOIN ( PostKeywordTag INNER JOIN KeywordTag ON KeywordTag.id = PostKeywordTag.KeywordTagId) 
 ON Post.id = PostKeywordTag.PostId WHERE Post.UserId = 2  GROUP BY PostKeywordTag.KeywordTagId )



 SELECT `Post`.*, `KeywordTags`.`id`, `KeywordTags`.`keyword`, `KeywordTags`.`createdAt`, `KeywordTags`.`updatedAt`, `KeywordTags->PostKeywordTag`.`createdAt`, 
 `KeywordTags->PostKeywordTag`.`updatedAt`, `KeywordTags->PostKeywordTag`.`KeywordTagId`, `KeywordTags->PostKeywordTag`.`PostId`, `User`.`id`, `User`.`nickname`,
  `UserAssets`.`id`, `UserAssets`.`src`, `UserAssets`.`dataType`, `UserAssets`.`fileType`, `UserAssets`.`createdAt`, `UserAssets`.`updatedAt`, `UserAssets`.`PostId`,
  `UserAssets`.`UserId` 
  FROM (SELECT `Post`.`id`, `Post`.`description`, `Post`.`title`, `Post`.`category`, `Post`.`publicScope`, `Post`.`copyright`, `Post`.`createdAt`,
   `Post`.`updatedAt`, `Post`.`UserId` FROM `Post` 
   WHERE ( SELECT `PostKeywordTag`.`KeywordTagId` FROM `PostKeywordTag` INNER JOIN `KeywordTag` ON `PostKeywordTag`.`KeywordTagId` = `KeywordTag`.`id` 
   WHERE (`Post`.`id` = `PostKeywordTag`.`PostId`) LIMIT 1 ) IS NOT NULL ORDER BY `Post`.`createdAt` DESC LIMIT 10) AS `Post` 
   INNER JOIN ( `PostKeywordTag` AS `KeywordTags->PostKeywordTag` INNER JOIN `KeywordTag` ON `KeywordTags`.`id` = `KeywordTags->PostKeywordTag`.`KeywordTagId`) 
   ON `Post`.`id` = `KeywordTags->PostKeywordTag`.`PostId` LEFT OUTER JOIN `User` AS `User` ON `Post`.`UserId` = `User`.`id` 
   LEFT OUTER JOIN `UserAsset` AS `UserAssets` ON `Post`.`id` = `UserAssets`.`PostId` ORDER BY `Post`.`createdAt` DESC;





SELECT `Post`.*, `KeywordTags`.`id` AS `KeywordTags.id`, `KeywordTags`.`keyword` AS `KeywordTags.keyword`, `KeywordTags`.`createdAt` AS `KeywordTags.createdAt`, `KeywordTags`.`updatedAt` AS `KeywordTags.updatedAt`, `KeywordTags->PostKeywordTag`.`createdAt` AS `KeywordTags.PostKeywordTag.createdAt`, `KeywordTags->PostKeywordTag`.`updatedAt` AS `KeywordTags.PostKeywordTag.updatedAt`, `KeywordTags->PostKeywordTag`.`KeywordTagId` AS `KeywordTags.PostKeywordTag.KeywordTagId`, `KeywordTags->PostKeywordTag`.`PostId` AS `KeywordTags.PostKeywordTag.PostId`, `UserAssets`.`id` AS `UserAssets.id`, `UserAssets`.`src` AS `UserAssets.src`, `UserAssets`.`dataType` AS `UserAssets.dataType`, `UserAssets`.`fileType` AS `UserAssets.fileType`, `UserAssets`.`createdAt` AS `UserAssets.createdAt`, `UserAssets`.`updatedAt` AS `UserAssets.updatedAt`, `UserAssets`.`PostId` AS `UserAssets.PostId`, `UserAssets`.`UserId` AS `UserAssets.UserId` FROM (SELECT `Post`.`id`, `Post`.`description`, `Post`.`title`, `Post`.`category`, `Post`.`publicScope`, `Post`.`copyright`, `Post`.`createdAt`, `Post`.`updatedAt`, `Post`.`UserId`, `User`.`id` AS `User.id`, `User`.`nickname` AS `User.nickname` FROM `Post` AS `Post` INNER JOIN `User` AS `User` ON `Post`.`UserId` = `User`.`id` AND `User`.`id` = 'Post.UserId' WHERE ( SELECT `PostId` FROM `UserAsset` AS `UserAssets` WHERE (`UserAssets`.`PostId` = 'Post.id' AND `UserAssets`.`PostId` = `Post`.`id`) LIMIT 1 ) IS NOT NULL ORDER BY `Post`.`createdAt` DESC LIMIT 5) AS `Post` LEFT OUTER JOIN ( `PostKeywordTag` AS `KeywordTags->PostKeywordTag` INNER JOIN `KeywordTag` AS `KeywordTags` ON `KeywordTags`.`id` = `KeywordTags->PostKeywordTag`.`KeywordTagId`) ON `Post`.`id` = `KeywordTags->PostKeywordTag`.`PostId` INNER JOIN `UserAsset` AS `UserAssets` ON `Post`.`id` = `UserAssets`.`PostId` AND `UserAssets`.`PostId` = 'Post.id' ORDER BY `Post`.`createdAt` DESC;