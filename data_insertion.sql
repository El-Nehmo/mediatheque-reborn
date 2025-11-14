-- =====================================================================
-- SCRIPT DE PEUPLEMENT DE LA BASE DE DONNÉES mediatheque_db
-- =====================================================================

-- On s'assure d'utiliser la bonne base de données
USE `mediatheque_db`;

-- -----------------------------------------------------
-- 1. Insertion dans la table `roles`
-- -----------------------------------------------------
-- On insère deux rôles de base. Notez leurs IDs : 1 pour Admin, 2 pour Membre.
INSERT INTO `roles` (`id_role`, `nom_role`, `description`) VALUES
(1, 'Administrateur', 'Accès complet au système de gestion.'),
(2, 'Membre', 'Utilisateur standard pouvant louer des exemplaires.');

-- -----------------------------------------------------
-- 2. Insertion dans la table `categories`
-- -----------------------------------------------------
-- On insère quelques genres musicaux.
INSERT INTO `categories` (`id_categorie`, `nom_categorie`) VALUES
(1, 'Rock'),
(2, 'Pop'),
(3, 'Jazz'),
(4, 'Electro'),
(5, 'Hip-Hop'),
(6, 'Classique');

-- -----------------------------------------------------
-- 3. Insertion dans la table `utilisateurs`
-- -----------------------------------------------------
-- On insère quelques utilisateurs. Le mot de passe est un "hash" fictif.
-- L'utilisateur 1 est un Admin (id_role = 1), les autres sont des Membres (id_role = 2).
INSERT INTO `utilisateurs` (`nom`, `prenom`, `email`, `password_hash`, `telephone`, `rue`, `numero`, `code_postal`, `ville`, `id_role`) VALUES
('Dubois', 'Marie', 'marie.dubois@example.com', 'hashed_password_123', '0478112233', 'Rue de la Gare', '10', '5000', 'Namur', 2),
('Lambert', 'Jean', 'jean.lambert@example.com', 'hashed_password_456', '0475445566', 'Avenue des Arts', '25B', '1000', 'Bruxelles', 2),
('Durand', 'Alice', 'alice.durand@example.com', 'hashed_password_789', '0499887766', 'Boulevard Central', '1', '6000', 'Charleroi', 2),
('Admin', 'Super', 'admin@mediatheque.com', 'admin_password_hash', '010123456', 'Rue de l\'Admin', '1', '1348', 'Louvain-la-Neuve', 1);

-- -----------------------------------------------------
-- 4. Insertion dans la table `albums`
-- -----------------------------------------------------
-- On insère quelques albums célèbres.
INSERT INTO `albums` (`id_album`, `titre`, `artiste`, `maison_disque`, `annee_sortie`, `nb_pistes`, `ean`) VALUES
(1, 'The Dark Side of the Moon', 'Pink Floyd', 'Harvest Records', 1973, 10, '5099902987623'),
(2, 'Abbey Road', 'The Beatles', 'Apple Records', 1969, 17, '077774644624'),
(3, 'Thriller', 'Michael Jackson', 'Epic Records', 1982, 9, '07464381122'),
(4, 'Random Access Memories', 'Daft Punk', 'Columbia Records', 2013, 13, '888837168625');

-- -----------------------------------------------------
-- 5. Table de liaison `album_categories`
-- -----------------------------------------------------
-- On lie nos albums à leurs catégories.
INSERT INTO `album_categories` (`id_album`, `id_categorie`) VALUES
(1, 1), -- The Dark Side of the Moon -> Rock
(2, 1), -- Abbey Road -> Rock
(2, 2), -- Abbey Road -> Pop
(3, 2), -- Thriller -> Pop
(4, 4); -- Random Access Memories -> Electro

-- -----------------------------------------------------
-- 6. Insertion dans la table `exemplaires`
-- -----------------------------------------------------
-- On crée plusieurs exemplaires pour nos albums.
-- Par défaut, leur statut est 'Disponible'.
INSERT INTO `exemplaires` (`num_inventaire`, `etat`, `statut`, `date_achat`, `id_album`) VALUES
('INV001', 'Neuf', 'Disponible', '2023-01-15', 1),
('INV002', 'Bon', 'Disponible', '2023-01-15', 1),
('INV003', 'Neuf', 'Disponible', '2023-02-20', 2),
('INV004', 'Usé', 'Disponible', '2023-02-20', 2),
('INV005', 'Bon', 'Disponible', '2023-03-10', 3),
('INV006', 'Neuf', 'Disponible', '2023-05-01', 4),
('INV007', 'Neuf', 'Disponible', '2023-05-01', 4);

-- -----------------------------------------------------
-- 7. Insertion dans la table `locations`
-- -----------------------------------------------------
-- On simule quelques locations.
-- NOTE : L'insertion ici va automatiquement déclencher le trigger `trg_apres_insert_location`,
-- qui mettra à jour le statut des exemplaires concernés ('INV002', 'INV005') en 'Loué'.
INSERT INTO `locations` (`date_location`, `date_retour_prevue`, `date_retour_reelle`, `montant_location`, `statut`, `id_utilisateur`, `id_exemplaire`) VALUES
-- Une location terminée, retournée à temps.
('2025-09-01 10:00:00', '2025-09-15 10:00:00', '2025-09-14 18:00:00', 3.50, 'Terminée', 1, 1),
-- Une location en cours.
('2025-10-10 14:30:00', '2025-10-24 14:30:00', NULL, 3.50, 'En cours', 2, 2),
-- Une autre location en cours.
('2025-10-15 11:00:00', '2025-10-29 11:00:00', NULL, 3.50, 'En cours', 3, 5);

-- -----------------------------------------------------
-- 8. Mise à jour d'une location pour tester les triggers de retour et de pénalités
-- -----------------------------------------------------
-- On simule le retour en retard de la première location pour tester les autres triggers.
-- NOTE : Cette commande UPDATE va déclencher :
-- 1. `trg_avant_update_location_penalites` pour calculer les pénalités (2 jours de retard * 0.50 = 1.00).
-- 2. `trg_apres_update_location` pour remettre le statut de l'exemplaire 'INV001' à 'Disponible'.
UPDATE `locations`
SET
  `date_retour_reelle` = '2025-09-17 12:00:00', -- Retourné 2 jours en retard
  `statut` = 'Terminée'
WHERE `id_location` = 1;


-- -----------------------------------------------------
-- 9. Insertion dans la table `paiements`
-- -----------------------------------------------------
-- On ajoute les paiements pour les locations terminées.
INSERT INTO `paiements` (`montant`, `moyen`, `statut`, `date_paiement`, `id_location`) VALUES
-- Paiement de la location + pénalité pour la location 1 (3.50 + 1.00 = 4.50)
(4.50, 'Carte', 'Validé', '2025-09-17 12:05:00', 1);

-- Fin du script
SELECT 'Le peuplement de la base de données est terminé avec succès.' AS `Statut`;