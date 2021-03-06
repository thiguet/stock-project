-- MySQL Script generated by MySQL Workbench
-- Wed Dec 25 23:23:30 2019
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema stock
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema stock
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `stock` DEFAULT CHARACTER SET utf8 ;
USE `stock` ;

-- -----------------------------------------------------
-- Table `stock`.`product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stock`.`product` ;

CREATE TABLE IF NOT EXISTS `stock`.`product` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NAME` VARCHAR(80) NOT NULL,
  `PRICE` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `stock`.`stock`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `stock`.`stock` ;

CREATE TABLE IF NOT EXISTS `stock`.`stock` (
  `STOCK_ID` INT NOT NULL AUTO_INCREMENT,
  `PRODUCT_ID` INT NOT NULL,
  `QTD` INT(11) NOT NULL,
  PRIMARY KEY (`STOCK_ID`),
  CONSTRAINT `fk_stock_product`
    FOREIGN KEY (`PRODUCT_ID`)
    REFERENCES `stock`.`product` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_stock_product_idx` ON `stock`.`stock` (`PRODUCT_ID` ASC);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
