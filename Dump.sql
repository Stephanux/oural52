-- MySQL dump 10.13  Distrib 5.6.23, for Win64 (x86_64)
--
-- Host: 172.30.155.24    Database: oural52
-- ------------------------------------------------------
-- Server version	5.5.5-10.3.31-MariaDB-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Vehicules`
--

DROP TABLE IF EXISTS `Vehicules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Vehicules` (
  `id_vehicule` int(11) NOT NULL AUTO_INCREMENT,
  `nom_vehicule` varchar(200) NOT NULL,
  `date_mise_circulation` date NOT NULL,
  `id_type_vehicule` int(11) NOT NULL,
  `id_modele` int(11) NOT NULL,
  PRIMARY KEY (`id_vehicule`),
  KEY `type_vehicule-Vehicules` (`id_type_vehicule`),
  KEY `modele-Vehicules` (`id_modele`),
  CONSTRAINT `modele-Vehicules` FOREIGN KEY (`id_modele`) REFERENCES `modele` (`id_modele`),
  CONSTRAINT `type_vehicule-Vehicules` FOREIGN KEY (`id_type_vehicule`) REFERENCES `type_vehicule` (`id_type_vehicule`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Vehicules`
--

LOCK TABLES `Vehicules` WRITE;
/*!40000 ALTER TABLE `Vehicules` DISABLE KEYS */;
INSERT INTO `Vehicules` VALUES (2,'bobs','2021-09-02',4,2),(10,'boby','2020-06-19',6,2),(12,'fytyuyy','2021-09-03',5,2),(13,'rt444','2021-09-09',2,2);
/*!40000 ALTER TABLE `Vehicules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `liens_p_d`
--

DROP TABLE IF EXISTS `liens_p_d`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `liens_p_d` (
  `id_vehicule` int(11) NOT NULL,
  `id_p_d` int(11) NOT NULL,
  PRIMARY KEY (`id_vehicule`,`id_p_d`),
  KEY `pieces_detachees-liens_p_d` (`id_p_d`),
  CONSTRAINT `Vehicules-liens_p_d` FOREIGN KEY (`id_vehicule`) REFERENCES `Vehicules` (`id_vehicule`),
  CONSTRAINT `pieces_detachees-liens_p_d` FOREIGN KEY (`id_p_d`) REFERENCES `pieces_detachees` (`id_p_d`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `liens_p_d`
--

LOCK TABLES `liens_p_d` WRITE;
/*!40000 ALTER TABLE `liens_p_d` DISABLE KEYS */;
INSERT INTO `liens_p_d` VALUES (2,33);
/*!40000 ALTER TABLE `liens_p_d` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marques`
--

DROP TABLE IF EXISTS `marques`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marques` (
  `id_marque` int(11) NOT NULL AUTO_INCREMENT,
  `nom_marque` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_marque`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marques`
--

LOCK TABLES `marques` WRITE;
/*!40000 ALTER TABLE `marques` DISABLE KEYS */;
INSERT INTO `marques` VALUES (2,'Mercedes'),(3,'Honda');
/*!40000 ALTER TABLE `marques` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modele`
--

DROP TABLE IF EXISTS `modele`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `modele` (
  `id_modele` int(11) NOT NULL AUTO_INCREMENT,
  `nom_modele` varchar(100) NOT NULL,
  `id_marque` int(11) NOT NULL,
  PRIMARY KEY (`id_modele`),
  KEY `marques-modele` (`id_marque`),
  CONSTRAINT `marques-modele` FOREIGN KEY (`id_marque`) REFERENCES `marques` (`id_marque`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COMMENT='modele de véhicule pour une parque donnée';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modele`
--

LOCK TABLES `modele` WRITE;
/*!40000 ALTER TABLE `modele` DISABLE KEYS */;
INSERT INTO `modele` VALUES (2,'m8',2),(3,'s52',3);
/*!40000 ALTER TABLE `modele` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pieces_detachees`
--

DROP TABLE IF EXISTS `pieces_detachees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pieces_detachees` (
  `id_p_d` int(11) NOT NULL AUTO_INCREMENT,
  `nom_p_d` varchar(150) NOT NULL,
  `photo` varchar(150) DEFAULT NULL,
  `longueur` int(11) DEFAULT NULL,
  `largeur` int(11) DEFAULT NULL,
  `diametre` int(11) DEFAULT NULL,
  `doc_pdf` varchar(200) DEFAULT NULL,
  `localisation` varchar(150) DEFAULT NULL,
  `etat` varchar(100) DEFAULT NULL,
  `id_stype_p_d` int(11) NOT NULL,
  PRIMARY KEY (`id_p_d`),
  KEY `sous_type_p_d-pieces_detachees` (`id_stype_p_d`),
  CONSTRAINT `sous_type_p_d-pieces_detachees` FOREIGN KEY (`id_stype_p_d`) REFERENCES `sous_type_p_d` (`id_stype_p_d`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pieces_detachees`
--

LOCK TABLES `pieces_detachees` WRITE;
/*!40000 ALTER TABLE `pieces_detachees` DISABLE KEYS */;
INSERT INTO `pieces_detachees` VALUES (7,'la jolie pièce','',5,5,5,'','ici','propre',2),(9,'la pièce ada','',5,5,5,'','ici','propre',3),(30,'la jolie pièces','',5,5,5,'','ici','la',2),(33,'la pièce','',5,5,5,'','ici','la',2);
/*!40000 ALTER TABLE `pieces_detachees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sous_type_p_d`
--

DROP TABLE IF EXISTS `sous_type_p_d`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sous_type_p_d` (
  `id_stype_p_d` int(11) NOT NULL AUTO_INCREMENT,
  `nom_stype` varchar(150) NOT NULL,
  `id_type_p_d` int(11) NOT NULL,
  PRIMARY KEY (`id_stype_p_d`),
  KEY `type_p_d-sous_type_p_d` (`id_type_p_d`),
  CONSTRAINT `type_p_d-sous_type_p_d` FOREIGN KEY (`id_type_p_d`) REFERENCES `type_p_d` (`id_type_p_d`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sous_type_p_d`
--

LOCK TABLES `sous_type_p_d` WRITE;
/*!40000 ALTER TABLE `sous_type_p_d` DISABLE KEYS */;
INSERT INTO `sous_type_p_d` VALUES (2,'haut-moteur',1),(3,'carbu',2);
/*!40000 ALTER TABLE `sous_type_p_d` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_p_d`
--

DROP TABLE IF EXISTS `type_p_d`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type_p_d` (
  `id_type_p_d` int(11) NOT NULL AUTO_INCREMENT,
  `nom_type_p_d` varchar(200) NOT NULL,
  PRIMARY KEY (`id_type_p_d`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_p_d`
--

LOCK TABLES `type_p_d` WRITE;
/*!40000 ALTER TABLE `type_p_d` DISABLE KEYS */;
INSERT INTO `type_p_d` VALUES (1,'moteur'),(2,'boîte');
/*!40000 ALTER TABLE `type_p_d` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_vehicule`
--

DROP TABLE IF EXISTS `type_vehicule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type_vehicule` (
  `id_type_vehicule` int(11) NOT NULL AUTO_INCREMENT,
  `nom_type_vehicule` varchar(200) NOT NULL,
  `doc_pdf` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_type_vehicule`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_vehicule`
--

LOCK TABLES `type_vehicule` WRITE;
/*!40000 ALTER TABLE `type_vehicule` DISABLE KEYS */;
INSERT INTO `type_vehicule` VALUES (2,'voiture','B - Child Properties.pdf'),(4,'moto',''),(5,'scoot',''),(6,'tracteur','');
/*!40000 ALTER TABLE `type_vehicule` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-15 10:06:20
