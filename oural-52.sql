
CREATE TABLE `Vehicules` ( 
   `id_vehicule` INT NOT NULL AUTO_INCREMENT,
   `nom_vehicule` VARCHAR(200) NOT NULL,
   `date_mise_circulation` DATE NOT NULL,
   `id_type_vehicule` INT NOT NULL,
   `id_modele` INT NOT NULL,
    PRIMARY KEY (
   `id_vehicule`
    )
);
CREATE TABLE `marques` ( 
   `id_marque` INT NOT NULL AUTO_INCREMENT,
   `nom_marque` VARCHAR(50),
    PRIMARY KEY (
   `id_marque`
    )
);
CREATE TABLE `type_vehicule` ( 
   `id_type_vehicule` INT NOT NULL AUTO_INCREMENT,
   `nom_type_vehicule` VARCHAR(200) NOT NULL,
   `doc_pdf` VARCHAR(200),
    PRIMARY KEY (
   `id_type_vehicule`
    )
);
CREATE TABLE `pieces_detachees` ( 
   `id_p_d` INT NOT NULL AUTO_INCREMENT,
   `nom_p_d` VARCHAR(150) NOT NULL,
   `id_type_p_d` INT NOT NULL,
   `photo` VARCHAR(150),
   `longueur` INT,
   `largeur` INT,
   `diametre` INT,
   `doc_pdf` VARCHAR(200),
   `localisation` VARCHAR(150),
    PRIMARY KEY (
   `id_p_d`
    )
);
CREATE TABLE `liens_p_d` ( 
   `id_vehicule` INT NOT NULL,
   `id_p_d` INT NOT NULL,
    PRIMARY KEY (
   `id_vehicule`,
   `id_p_d`
    )
);
CREATE TABLE `type_p_d` ( 
   `id_type_p_d` INT NOT NULL AUTO_INCREMENT,
   `nom_type_p_d` VARCHAR(200) NOT NULL,
   `etat` VARCHAR(150),
    PRIMARY KEY (
   `id_type_p_d`
    )
);
CREATE TABLE `sous_type_p_d` ( 
   `id_stype_p_d` INT NOT NULL AUTO_INCREMENT,
   `nom_stype` VARCHAR(150) NOT NULL,
   `id_type_p_d` INT NOT NULL,
    PRIMARY KEY (
   `id_stype_p_d`
    )
);
CREATE TABLE `modele` ( 
   `id_modele` INT NOT NULL AUTO_INCREMENT,
   `nom_modele` VARCHAR(100) NOT NULL,
   `id_marque` INT NOT NULL,
    PRIMARY KEY (
   `id_modele`
    )
)
 COMMENT = 'modele de véhicule pour une parque donnée';
ALTER TABLE `Vehicules` 
  ADD CONSTRAINT `type_vehicule-Vehicules`
  FOREIGN KEY ( 
   `id_type_vehicule`
)   REFERENCES `type_vehicule`( 
   `id_type_vehicule`
) ;


ALTER TABLE `liens_p_d` 
  ADD CONSTRAINT `Vehicules-liens_p_d`
  FOREIGN KEY ( 
   `id_vehicule`
)   REFERENCES `Vehicules`( 
   `id_vehicule`
) ;


ALTER TABLE `liens_p_d` 
  ADD CONSTRAINT `pieces_detachees-liens_p_d`
  FOREIGN KEY ( 
   `id_p_d`
)   REFERENCES `pieces_detachees`( 
   `id_p_d`
) ;


ALTER TABLE `pieces_detachees` 
  ADD CONSTRAINT `type_p_d-pieces_detachees`
  FOREIGN KEY ( 
   `id_type_p_d`
)   REFERENCES `type_p_d`( 
   `id_type_p_d`
) ;


ALTER TABLE `sous_type_p_d` 
  ADD CONSTRAINT `type_p_d-sous_type_p_d`
  FOREIGN KEY ( 
   `id_type_p_d`
)   REFERENCES `type_p_d`( 
   `id_type_p_d`
) ;


ALTER TABLE `modele` 
  ADD CONSTRAINT `marques-modele`
  FOREIGN KEY ( 
   `id_marque`
)   REFERENCES `marques`( 
   `id_marque`
) ;


ALTER TABLE `Vehicules` 
  ADD CONSTRAINT `modele-Vehicules`
  FOREIGN KEY ( 
   `id_modele`
)   REFERENCES `modele`( 
   `id_modele`
) ;