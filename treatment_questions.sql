-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: treatment
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `questions` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `treatmentId` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `questions` (`questions`),
  UNIQUE KEY `questions_2` (`questions`),
  UNIQUE KEY `questions_3` (`questions`),
  UNIQUE KEY `questions_4` (`questions`),
  UNIQUE KEY `questions_5` (`questions`),
  UNIQUE KEY `questions_6` (`questions`),
  UNIQUE KEY `questions_7` (`questions`),
  UNIQUE KEY `questions_8` (`questions`),
  UNIQUE KEY `questions_9` (`questions`),
  UNIQUE KEY `questions_10` (`questions`),
  UNIQUE KEY `questions_11` (`questions`),
  UNIQUE KEY `questions_12` (`questions`),
  UNIQUE KEY `questions_13` (`questions`),
  UNIQUE KEY `questions_14` (`questions`),
  UNIQUE KEY `questions_15` (`questions`),
  UNIQUE KEY `questions_16` (`questions`),
  UNIQUE KEY `questions_17` (`questions`),
  UNIQUE KEY `questions_18` (`questions`),
  UNIQUE KEY `questions_19` (`questions`),
  UNIQUE KEY `questions_20` (`questions`),
  KEY `treatmentId` (`treatmentId`),
  CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`treatmentId`) REFERENCES `treatments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'How much weight have you lost in the past month','2024-08-22 19:12:58','2024-08-22 19:12:58',1),(2,'Have you noticed a significant change in appetite or eating habits?','2024-08-22 19:12:58','2024-08-22 19:12:58',1),(3,'Are you experiencing any additional symptoms such as nausea or vomiting?','2024-08-22 19:12:58','2024-08-22 19:12:58',1),(4,'Is the weight loss associated with any other medical conditions or treatments?','2024-08-22 19:12:58','2024-08-22 19:12:58',1),(5,'How long have you been experiencing this weight loss?','2024-08-22 19:12:58','2024-08-22 19:12:58',1),(6,'When did you first experience chest pain?','2024-08-22 19:12:58','2024-08-22 19:12:58',2),(7,'Can you describe the type of pain (e.g., sharp, dull, pressure)?','2024-08-22 19:12:58','2024-08-22 19:12:58',2),(8,'Is the chest pain associated with physical activity or rest?','2024-08-22 19:12:58','2024-08-22 19:12:58',2),(9,'Have you experienced any other symptoms such as shortness of breath or sweating?','2024-08-22 19:12:58','2024-08-22 19:12:58',2),(10,'Do you have any history of heart disease or risk factors such as high blood pressure?','2024-08-22 19:12:58','2024-08-22 19:12:58',2),(11,'Have you measured your blood pressure recently, and what were the readings?','2024-08-22 19:12:58','2024-08-22 19:12:58',3),(12,'Are you experiencing symptoms such as headaches or dizziness?','2024-08-22 19:12:58','2024-08-22 19:12:58',3),(13,'Do you have a history of hypertension or cardiovascular diseases?','2024-08-22 19:12:58','2024-08-22 19:12:58',3),(14,'Are you currently taking any medication for high blood pressure?','2024-08-22 19:12:58','2024-08-22 19:12:58',3),(15,'Have you made any recent changes to your diet or lifestyle that could affect your blood pressure?','2024-08-22 19:12:58','2024-08-22 19:12:58',3),(16,'When do you experience shortness of breath (e.g., during exercise, at rest)?','2024-08-22 19:12:58','2024-08-22 19:12:58',4),(17,'How severe is the shortness of breath (e.g., mild, moderate, severe)?','2024-08-22 19:12:58','2024-08-22 19:12:58',4),(18,'Are you experiencing any additional symptoms like chest pain or coughing?','2024-08-22 19:12:58','2024-08-22 19:12:58',4),(19,'Do you have a history of respiratory conditions like asthma or COPD?','2024-08-22 19:12:58','2024-08-22 19:12:58',4),(20,'Have you been exposed to any allergens or irritants recently?','2024-08-22 19:12:58','2024-08-22 19:12:58',4),(21,'How long have you been experiencing fatigue?','2024-08-22 19:12:58','2024-08-22 19:12:58',5),(22,'Are there specific times of the day when you feel more fatigued?','2024-08-22 19:12:58','2024-08-22 19:12:58',5),(23,'Do you have any other symptoms such as weakness or difficulty concentrating?','2024-08-22 19:12:58','2024-08-22 19:12:58',5),(24,'Have you recently experienced any major life changes or stress?','2024-08-22 19:12:58','2024-08-22 19:12:58',5),(25,'Are you getting enough sleep, and is the quality of your sleep good?','2024-08-22 19:12:58','2024-08-22 19:12:58',5),(26,NULL,'2024-08-22 19:05:05','2024-08-22 19:05:05',1),(27,NULL,'2024-08-22 19:05:05','2024-08-22 19:05:05',1),(28,NULL,'2024-08-22 19:05:05','2024-08-22 19:05:05',1),(29,NULL,'2024-08-22 19:05:05','2024-08-22 19:05:05',1),(30,NULL,'2024-08-22 19:05:05','2024-08-22 19:05:05',1),(31,NULL,'2024-08-22 19:07:02','2024-08-22 19:07:02',1),(32,NULL,'2024-08-22 19:07:02','2024-08-22 19:07:02',1),(33,NULL,'2024-08-22 19:07:02','2024-08-22 19:07:02',1),(34,NULL,'2024-08-22 19:07:02','2024-08-22 19:07:02',1),(35,NULL,'2024-08-22 19:07:02','2024-08-22 19:07:02',1),(36,NULL,'2024-08-22 19:07:02','2024-08-22 19:07:02',1),(37,NULL,'2024-08-22 19:07:02','2024-08-22 19:07:02',1),(38,NULL,'2024-08-22 19:07:02','2024-08-22 19:07:02',1),(39,NULL,'2024-08-22 19:07:02','2024-08-22 19:07:02',1),(40,NULL,'2024-08-22 19:07:02','2024-08-22 19:07:02',1),(41,NULL,'2024-08-22 19:13:29','2024-08-22 19:13:29',1),(42,NULL,'2024-08-22 19:13:29','2024-08-22 19:13:29',1),(43,NULL,'2024-08-22 19:13:29','2024-08-22 19:13:29',1),(44,NULL,'2024-08-22 19:13:29','2024-08-22 19:13:29',1),(45,NULL,'2024-08-22 19:13:29','2024-08-22 19:13:29',1),(46,NULL,'2024-08-22 19:13:29','2024-08-22 19:13:29',1),(47,NULL,'2024-08-22 19:13:29','2024-08-22 19:13:29',1),(48,NULL,'2024-08-22 19:13:29','2024-08-22 19:13:29',1),(49,NULL,'2024-08-22 19:13:29','2024-08-22 19:13:29',1),(50,NULL,'2024-08-22 19:13:29','2024-08-22 19:13:29',1),(51,NULL,'2024-08-22 19:13:29','2024-08-22 19:13:29',1),(52,NULL,'2024-08-22 19:13:29','2024-08-22 19:13:29',1),(53,NULL,'2024-08-22 19:13:29','2024-08-22 19:13:29',1),(54,NULL,'2024-08-22 19:13:29','2024-08-22 19:13:29',1),(55,NULL,'2024-08-22 19:13:29','2024-08-22 19:13:29',1),(56,NULL,'2024-08-22 19:13:29','2024-08-22 19:13:29',1),(57,NULL,'2024-08-22 19:13:29','2024-08-22 19:13:29',1),(58,NULL,'2024-08-22 19:13:29','2024-08-22 19:13:29',1),(59,NULL,'2024-08-22 19:13:29','2024-08-22 19:13:29',1),(60,NULL,'2024-08-22 19:13:29','2024-08-22 19:13:29',1);
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-23  2:55:19
