/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80021
Source Host           : localhost:3306
Source Database       : acid

Target Server Type    : MYSQL
Target Server Version : 80021
File Encoding         : 65001

Date: 2020-08-28 18:29:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `date` datetime NOT NULL,
  `headerpic` varchar(255) DEFAULT NULL,
  `describe` varchar(255) DEFAULT NULL,
  `view` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '0',
  `parent` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('1', 'acid02', '我的第一篇文章', 'Category： Preparation Installation Rollback Actually, the reason why I wrote this article in English is that I didn’t want to translate so many lists into Chinese lol. As I’m used to speak German for such long time, maybe there’s some grammar mistakes,', '2020-08-01 10:50:38', 'http://49.234.69.185/api/images/Thearticle/aci01.jpg', 'mistakes,', '90', 'CSS');
INSERT INTO `article` VALUES ('2', 'acid02', 'hahha', '9918', '2020-08-12 12:12:12', 'http://49.234.69.185/api/images/Thearticle/aci02.jpg', null, null, 'CSS');
INSERT INTO `article` VALUES ('3', 'acid02', 'hahha', '9918', '2020-08-12 12:12:12', 'http://49.234.69.185/api/images/Thearticle/aci03.jpg', null, null, 'JS');

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `link` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `parent` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `quantity` int(255) unsigned zerofill DEFAULT '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', null, 'css', 'CSS', 'acid02', '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');

-- ----------------------------
-- Table structure for label
-- ----------------------------
DROP TABLE IF EXISTS `label`;
CREATE TABLE `label` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `date` datetime NOT NULL,
  `headerpic` varchar(255) DEFAULT NULL,
  `describe` varchar(255) DEFAULT NULL,
  `view` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '0',
  `parent` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of label
-- ----------------------------
INSERT INTO `label` VALUES ('1', 'acid02', '标签', '2312', '2020-08-13 10:50:38', 'http://49.234.69.185/api/images/Thearticle/aci04.jpg', null, '90', '日常');
INSERT INTO `label` VALUES ('2', 'acid02', 'hahha', '9918', '2020-08-12 12:12:12', 'http://49.234.69.185/api/images/Thearticle/aci05.jpg', null, null, 'socketio');
INSERT INTO `label` VALUES ('3', 'acid02', 'hahha', '9918', '2020-08-12 12:12:12', 'http://49.234.69.185/api/images/Thearticle/aci06.jpg', null, null, 'socketio');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `useravatar` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date` datetime NOT NULL,
  `isAdmin` tinyint(1) unsigned zerofill NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', null, null, 'acid02', '123456', '2020-08-11 12:11:42', '1');
