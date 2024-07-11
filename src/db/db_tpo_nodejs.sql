-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.33 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.7.0.6850
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando estructura para tabla db_tpo_nodejs.destinos
CREATE TABLE IF NOT EXISTS `destinos` (
  `id_destino` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_destino`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla db_tpo_nodejs.destinos: ~0 rows (aproximadamente)
DELETE FROM `destinos`;

-- Volcando estructura para tabla db_tpo_nodejs.facturacion
CREATE TABLE IF NOT EXISTS `facturacion` (
  `id_factura` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_factura`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla db_tpo_nodejs.facturacion: ~0 rows (aproximadamente)
DELETE FROM `facturacion`;

-- Volcando estructura para tabla db_tpo_nodejs.paquete_viajes
CREATE TABLE IF NOT EXISTS `paquete_viajes` (
  `id_alojamiento` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `ubicacion` varchar(50) DEFAULT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `capacidad` int DEFAULT NULL,
  `precio` decimal(20,2) DEFAULT NULL,
  PRIMARY KEY (`id_alojamiento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla db_tpo_nodejs.paquete_viajes: ~0 rows (aproximadamente)
DELETE FROM `paquete_viajes`;

-- Volcando estructura para tabla db_tpo_nodejs.reservas
CREATE TABLE IF NOT EXISTS `reservas` (
  `id_reserva` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `id_viaje` int NOT NULL,
  `fecha_reserva` datetime NOT NULL,
  PRIMARY KEY (`id_reserva`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla db_tpo_nodejs.reservas: ~0 rows (aproximadamente)
DELETE FROM `reservas`;

-- Volcando estructura para tabla db_tpo_nodejs.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `apellido` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `dni` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `nombre_usuario` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `numero_telefono` varchar(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `numero_celular` varchar(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `ciudad` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `provincia` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `pais` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `imagen` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `fecha_registro` datetime DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` datetime DEFAULT NULL,
  `rol` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'Usuario',
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla db_tpo_nodejs.usuarios: ~113 rows (aproximadamente)
DELETE FROM `usuarios`;
INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellido`, `dni`, `nombre_usuario`, `email`, `contrasena`, `numero_telefono`, `numero_celular`, `direccion`, `ciudad`, `provincia`, `pais`, `imagen`, `fecha_registro`, `fecha_actualizacion`, `rol`) VALUES
	(1, 'Ismael Carter', 'Mann', '29070726', 'admin', 'admin@admin.com', '123', '455-584-1603', '951-533-3898', '3814 Bergstrom Pine', 'West Mariane', 'Alaska', 'France', NULL, '2024-06-16 19:55:05', '2024-06-16 06:44:58', 'Usuario'),
	(2, 'Olga Donnelly', 'McGlynn', '34307033', 'Maureen91', 'Geo63@gmail.com', '5KqJLZg_mVgmxeE', '592-831-4613', '290-813-1514', '135 Heller Crossroad', 'North Brownton', 'Tennessee', 'Swaziland', NULL, '2024-06-16 19:55:05', '2024-06-16 14:22:35', 'Editor'),
	(3, 'Annie Jerde DVM', 'Powlowski', '44683281', 'Orin18', 'Magdalen21@gmail.com', 'PE__2udq8nUxZBZ', '888-829-8846', '309-871-4808', '10601 Schowalter Crossroad', 'Ernietown', 'Oregon', 'Reunion', NULL, '2024-06-16 19:55:05', '2024-06-15 20:37:32', 'Baneado'),
	(4, 'Irving Hammes', 'McGlynn', '29978172', 'Tate_Blanda', 'Lambert_Hauck0@yahoo.com', 'cu5q1ZfZJ2QVgsB', '308-394-4321', '455-792-1908', '8618 Edgar Place', 'Lake Elsinore', 'Colorado', 'Guernsey', NULL, '2024-06-16 19:55:05', '2024-06-15 18:34:23', 'Usuario'),
	(5, 'Karen Frami III', 'Cassin', '12291460', 'Antonette.Nader98', 'Tyra_Oberbrunner86@gmail.com', 'P9eDz_sPnvab1Sp', '432-951-1998', '303-823-4219', '1586 Delta Cliffs', 'West Jewellburgh', 'Colorado', 'Western Sahara', NULL, '2024-06-16 19:55:05', '2024-06-16 05:46:25', 'Baneado'),
	(6, 'Ismael Treutel', 'Bartoletti', '33470835', 'Miracle7', 'Mara_Greenholt@yahoo.com', 'QWMmd422kJ8Ni5s', '460-745-3822', '201-562-3503', '23692 Vandervort Alley', 'Morissetteville', 'New Jersey', 'Honduras', NULL, '2024-06-16 19:55:05', '2024-06-15 21:11:18', 'Admin'),
	(7, 'Harvey Monahan', 'Oberbrunner', '31677192', 'Piper90', 'Christina_Kozey94@hotmail.com', 'drEyOFvlb7GwSYo', '928-743-3827', '459-479-3158', '478 Jerde Mountain', 'Miramar', 'Missouri', 'Uzbekistan', NULL, '2024-06-16 19:55:05', '2024-06-16 11:24:13', 'Baneado'),
	(8, 'Marjorie Cole', 'Rempel', '32654698', 'Hayden.West', 'Fanny_Thiel@gmail.com', 'RqRzdCdqXnwXclC', '829-673-0549', '511-439-9798', '17358 Terrance Coves', 'Homenickfort', 'Oklahoma', 'Armenia', NULL, '2024-06-16 19:55:05', '2024-06-16 01:49:03', 'Baneado'),
	(9, 'Clifton Effertz', 'Von', '45863453', 'Merl.Daniel58', 'Rodger_Koepp17@gmail.com', 'm_eN9iGPB6dcU7g', '297-296-0905', '527-332-7189', '9651 Alysha Corner', 'Corkerymouth', 'Colorado', 'Singapore', NULL, '2024-06-16 19:55:05', '2024-06-16 07:32:09', 'Suspendido'),
	(10, 'Nellie Mante', 'Flatley', '21185831', 'Patricia19', 'Hope39@yahoo.com', 'DM0nBEW5q6D_81k', '977-919-4757', '812-218-6300', '1143 Ida Overpass', 'North Jaymouth', 'Kentucky', 'Portugal', NULL, '2024-06-16 19:55:05', '2024-06-16 05:45:38', 'Usuario'),
	(11, 'Betsy Johnson', 'Mills', '26851378', 'Blanca.Zulauf', 'Mariela29@hotmail.com', 'HFyfz9Oyxud9lqc', '404-218-6734', '668-570-4105', '64985 Smitham Knolls', 'Schroederfurt', 'New Mexico', 'Cape Verde', NULL, '2024-06-16 19:55:05', '2024-06-16 16:36:12', 'Editor'),
	(12, 'Damon Nienow DDS', 'Morissette', '17860563', 'Rebekah.Hand96', 'Jayson_Considine70@hotmail.com', 'T20WF8IhKJp8N_x', '793-340-0364', '638-468-7581', '8487 Dickinson Estates', 'Kileyview', 'Alaska', 'Vanuatu', NULL, '2024-06-16 19:55:05', '2024-06-16 08:00:35', 'SuperUsuario'),
	(13, 'Mrs. Muriel Predovic', 'Carroll', '43630583', 'Naomi28', 'Juston86@hotmail.com', 'sBCcnefTnUle31U', '934-897-3524', '936-923-5736', '311 Aufderhar Via', 'South Tonimouth', 'Michigan', 'Sudan', NULL, '2024-06-16 19:55:05', '2024-06-15 20:38:35', 'Usuario'),
	(14, 'Bertha Weber', 'Jenkins', '44124817', 'Myles_Mertz', 'Vernice80@hotmail.com', 'NladJhpqjxB3SPr', '205-619-0574', '233-879-7630', '20014 Wilhelm Mission', 'Ritchiestad', 'Iowa', 'Uzbekistan', NULL, '2024-06-16 19:55:05', '2024-06-16 06:36:49', 'Moderador'),
	(15, 'Clint Hegmann', 'Kutch', '45631213', 'Shea23', 'Braxton.Pacocha88@yahoo.com', 'nZ1kKb8ptHwz_Z8', '505-461-5317', '796-392-9688', '5415 Josephine Gardens', 'Eleanorebury', 'New Mexico', 'Mauritania', NULL, '2024-06-16 19:55:05', '2024-06-16 00:58:47', 'Baneado'),
	(16, 'Mr. Marlon Prohaska', 'Leuschke', '18588076', 'Brennon_Carter', 'Kelley_Stokes@yahoo.com', 'JgBOKmA7qh8GT7t', '268-983-7616', '278-388-1881', '534 Marc Tunnel', 'Lizethmouth', 'Hawaii', 'Pakistan', NULL, '2024-06-16 19:55:05', '2024-06-16 05:56:18', 'Eliminado'),
	(17, 'Seth Yundt', 'Flatley', '30649302', 'Adelle.Schulist24', 'Gudrun0@yahoo.com', 'On4Y0SI0yVWhaNo', '938-692-1622', '439-967-1370', '39103 Williamson Inlet', 'Port Dejuan', 'Maine', 'Timor-Leste', NULL, '2024-06-16 19:55:05', '2024-06-15 20:35:06', 'Eliminado'),
	(18, 'Mrs. Shaun Osinski', 'Renner', '28630491', 'Geovanni_OConnell', 'Addison.Abshire78@yahoo.com', 'QQN1OnvPhBcC_S_', '270-784-7972', '266-908-5099', '149 Carissa Dam', 'North Verda', 'Idaho', 'Bosnia and Herzegovina', NULL, '2024-06-16 19:55:05', '2024-06-16 16:31:08', 'Baneado'),
	(19, 'Bert Swift', 'Dicki', '48735379', 'Mitchell.Cummerata', 'Tony.Pollich@hotmail.com', '8C1tu3go2EioVcC', '628-550-4032', '259-760-5285', '90805 Antonio Trail', 'Elkhart', 'Kansas', 'Mauritius', NULL, '2024-06-16 19:55:05', '2024-06-15 22:58:18', 'SuperUsuario'),
	(20, 'Lucy Hamill', 'Stokes', '42671668', 'Ellis.Huel10', 'Winona95@gmail.com', 'GXYrXLuWiq2XF3S', '324-423-0447', '983-216-3330', '3576 McCullough Keys', 'Herzogshire', 'West Virginia', 'Lesotho', NULL, '2024-06-16 19:55:05', '2024-06-16 14:52:08', 'Admin'),
	(21, 'Ms. Eula Bogisich', 'Robel', '22547540', 'Marques_Lowe', 'Mavis_Cronin@hotmail.com', 'cMRxvLflLlQOwp6', '543-910-9815', '744-462-8344', '1869 Alexanne Keys', 'Morissetteburgh', 'Delaware', 'Philippines', NULL, '2024-06-16 19:55:05', '2024-06-16 06:09:53', 'Baneado'),
	(22, 'Maggie O\'Kon', 'Hahn', '37940982', 'Jackson_Barton', 'Petra5@hotmail.com', 'sCgn3PF99B_A1Uv', '784-765-7202', '713-386-3620', '65083 Osinski Manor', 'Kulasfurt', 'Maine', 'Guinea-Bissau', NULL, '2024-06-16 19:55:05', '2024-06-16 10:10:29', 'Suspendido'),
	(23, 'Sheryl Ferry', 'McLaughlin', '43263088', 'Weston_Balistreri65', 'Mohammed_Farrell82@gmail.com', 'w0fG7luE2Opa8s1', '678-510-5460', '246-393-3088', '409 Valerie Village', 'Pine Hills', 'Mississippi', 'Gambia', NULL, '2024-06-16 19:55:05', '2024-06-16 01:30:23', 'Baneado'),
	(24, 'Chris Blanda', 'Hayes', '45282826', 'Jess_Hansen', 'Wellington_Hermann@gmail.com', 'AZcbQwKSm8_K7Z1', '406-337-3465', '984-472-5145', '372 Schinner Forks', 'North Lavinia', 'North Dakota', 'Wallis and Futuna', NULL, '2024-06-16 19:55:05', '2024-06-15 18:32:03', 'SuperUsuario'),
	(25, 'Roland Reichert', 'Becker', '34042645', 'Alexandro.Borer74', 'Shanel.Hamill@gmail.com', 'hnGNv2cyfH0im2c', '570-855-0713', '547-537-6874', '23755 Predovic Turnpike', 'Port Royal', 'Maryland', 'Maldives', NULL, '2024-06-16 19:55:05', '2024-06-16 11:47:44', 'Eliminado'),
	(26, 'Eugene Halvorson', 'Stamm', '11828299', 'Woodrow_Stroman', 'Rusty44@gmail.com', '0U6rD2Ips21uL4y', '709-565-8177', '360-364-8531', '27829 Rau Mission', 'New Imani', 'Virginia', 'Costa Rica', NULL, '2024-06-16 19:55:05', '2024-06-16 07:46:41', 'Eliminado'),
	(27, 'Delia Schaden', 'Schaden', '12259867', 'Floyd_Monahan85', 'General26@yahoo.com', 'wEDAOe4tHqWgZup', '666-652-2723', '436-675-4014', '492 Joesph Stream', 'Burleson', 'Wisconsin', 'Belarus', NULL, '2024-06-16 19:55:05', '2024-06-16 02:51:42', 'Admin'),
	(28, 'Patrick Rempel', 'Deckow', '41588216', 'Justine57', 'Nayeli_Conroy@hotmail.com', 'Gf1cD0Tx5i1ggaR', '487-931-9765', '912-479-8996', '183 Benjamin Plains', 'Walkerfort', 'Alaska', 'San Marino', NULL, '2024-06-16 19:55:05', '2024-06-16 15:00:09', 'Admin'),
	(29, 'Mrs. Joann Schinner', 'Bradtke', '17197844', 'Tressa_Borer', 'Ayana.Sporer@yahoo.com', '7TRC4HvAEW1Cr49', '436-933-1404', '388-689-2012', '3898 Bayer Rapids', 'Santa Rosa', 'Idaho', 'Azerbaijan', NULL, '2024-06-16 19:55:05', '2024-06-16 13:36:42', 'Admin'),
	(30, 'Traci Gaylord V', 'Wyman', '12444822', 'Jaime_Kilback', 'Sim_Orn@yahoo.com', 'zScDc801IR6akJ9', '999-635-8577', '732-468-0748', '999 Charlotte Squares', 'Nyasiaborough', 'New York', 'Tunisia', NULL, '2024-06-16 19:55:05', '2024-06-15 22:41:43', 'Moderador'),
	(31, 'Kristy Becker', 'Moen', '29800200', 'Bret_Ernser', 'Jacquelyn69@gmail.com', 'aC8a5KVfwxgl54W', '592-283-3384', '604-728-1440', '83898 Ledner Haven', 'North Karl', 'Louisiana', 'Svalbard & Jan Mayen Islands', NULL, '2024-06-16 19:55:05', '2024-06-16 00:32:47', 'Usuario'),
	(32, 'Jana Dibbert', 'Mills', '21356489', 'Clovis.Simonis70', 'Vivianne21@hotmail.com', 'DLau_9zuO92EEab', '578-869-4108', '498-785-9482', '96073 Cruickshank Lake', 'Haleighside', 'Rhode Island', 'Heard Island and McDonald Islands', NULL, '2024-06-16 19:55:05', '2024-06-16 12:58:07', 'Admin'),
	(33, 'Miss Gretchen Conn', 'Jacobs', '24327866', 'Roberta53', 'Dwight.Larkin32@gmail.com', 'SUrDofdqF385OZT', '448-585-4380', '855-573-4860', '91840 Ziemann Trail', 'Abbottfurt', 'Washington', 'Armenia', NULL, '2024-06-16 19:55:05', '2024-06-16 15:05:18', 'SuperUsuario'),
	(34, 'Mrs. Emily Cartwright', 'Bradtke', '10727618', 'Adan.Moen97', 'Bella47@hotmail.com', '_yjdm5jMNz0svb2', '383-739-6843', '730-724-1127', '02265 Alejandra Burgs', 'Edmond', 'Tennessee', 'Cayman Islands', NULL, '2024-06-16 19:55:05', '2024-06-16 07:39:00', 'Admin'),
	(35, 'Lowell Davis Jr.', 'Schneider', '45575092', 'Cristal.DuBuque', 'Keira.Rempel@gmail.com', 'q13_B96esbLi3Mx', '891-332-7350', '617-635-4975', '4422 Kasandra Ports', 'Legrosside', 'South Carolina', 'Jordan', NULL, '2024-06-16 19:55:05', '2024-06-16 10:46:26', 'Editor'),
	(36, 'Lorene Zulauf', 'Schumm', '29186724', 'Catharine_Anderson31', 'Keshaun.Kautzer71@hotmail.com', 'TfODtCJ6F7hcEj9', '777-589-3386', '344-934-0922', '59635 Selmer Freeway', 'Millerfort', 'Vermont', 'Singapore', NULL, '2024-06-16 19:55:05', '2024-06-15 18:39:10', 'Baneado'),
	(37, 'Cesar Kohler', 'Ernser', '17697718', 'Kallie_Nienow', 'Dane96@hotmail.com', '7_ozt5l2RrU9j8M', '417-895-6871', '773-636-8386', '29983 Clifton Canyon', 'La Mesa', 'North Dakota', 'Wallis and Futuna', NULL, '2024-06-16 19:55:05', '2024-06-15 23:21:38', 'Moderador'),
	(38, 'Angie Langosh', 'Ledner', '12817971', 'Brady35', 'Brody_Homenick91@hotmail.com', 'PrIh62qVZOv2op2', '560-718-0358', '891-555-0121', '9760 Kali Key', 'New Jakayla', 'Montana', 'Chad', NULL, '2024-06-16 19:55:05', '2024-06-15 18:26:30', 'Editor'),
	(39, 'Austin Schmeler', 'Upton', '26849591', 'Joan_Mayer89', 'Seamus.Hahn96@hotmail.com', 'R_VE_ffKHO4cQEC', '637-532-3241', '514-383-2601', '700 Kuhn Forks', 'Savannahburgh', 'Arkansas', 'Australia', NULL, '2024-06-16 19:55:05', '2024-06-16 15:37:20', 'Moderador'),
	(40, 'Sharon Collins', 'Hintz', '24226622', 'Cara.Funk90', 'Lina.Bosco@hotmail.com', 'd82oFq1V_x7TEJo', '603-337-9633', '901-676-3253', '16546 Rohan Avenue', 'Eldonbury', 'Florida', 'Tanzania', NULL, '2024-06-16 19:55:05', '2024-06-16 08:09:49', 'Baneado'),
	(41, 'Terrance Schuster', 'Durgan', '42436392', 'Brandt8', 'Wilfred29@hotmail.com', 'wP6k_hsek5ENAgl', '898-311-9487', '272-569-6345', '062 Spencer Road', 'Langfort', 'Mississippi', 'Ethiopia', NULL, '2024-06-16 19:55:05', '2024-06-15 19:14:39', 'Editor'),
	(42, 'Pearl Walker', 'Franecki', '28508331', 'Cara_Ward65', 'Oma.Weissnat@hotmail.com', 'bZzOKagDyKOr_pX', '565-724-2691', '420-564-2456', '68044 Douglas Row', 'North Aylin', 'Pennsylvania', 'Puerto Rico', NULL, '2024-06-16 19:55:05', '2024-06-16 07:26:50', 'Moderador'),
	(43, 'Melissa Bednar', 'Kassulke', '41961611', 'Tate_Schimmel45', 'Desmond.Schumm20@hotmail.com', 'XVdGhMKIjWsh1aC', '252-486-8599', '992-202-0562', '2809 Lewis Port', 'Lake Ayana', 'Missouri', 'Argentina', NULL, '2024-06-16 19:55:05', '2024-06-16 00:30:59', 'Admin'),
	(44, 'Spencer Satterfield', 'Schulist', '49502770', 'Marquis.Powlowski', 'Helena.Hodkiewicz@gmail.com', 'MJj1OW95eClcOkQ', '620-655-5255', '344-812-1808', '9675 Wiegand Groves', 'Stillwater', 'Arizona', 'Zambia', NULL, '2024-06-16 19:55:05', '2024-06-16 10:12:17', 'Usuario'),
	(45, 'Jerome Williamson', 'Stracke', '36264543', 'Frankie_Abernathy4', 'Spencer.Zemlak48@yahoo.com', 'IFO8uCSjhgWYcrk', '393-417-4112', '305-892-4175', '1389 Eveline Plain', 'Fritschborough', 'Virginia', 'Fiji', NULL, '2024-06-16 19:55:05', '2024-06-16 01:43:19', 'Suspendido'),
	(46, 'Gretchen Orn III', 'Huels', '16767337', 'Myrtie.Medhurst', 'Shana40@gmail.com', 'JH9rgdlgSeWY2Vc', '660-458-1806', '663-968-1664', '357 Margot Trail', 'Estellebury', 'Michigan', 'Tunisia', NULL, '2024-06-16 19:55:05', '2024-06-16 08:35:23', 'Suspendido'),
	(47, 'Jean Treutel', 'Wunsch', '35494913', 'Carson_Hettinger92', 'Giles.Lynch@gmail.com', 'FpO9k3GzAFwo14c', '722-653-1914', '383-381-2657', '8275 Oren Keys', 'Salem', 'Oregon', 'United Kingdom', NULL, '2024-06-16 19:55:05', '2024-06-15 16:58:14', 'Eliminado'),
	(48, 'Chris Kuhic', 'Kunde', '24286052', 'Shawn.Satterfield', 'Chauncey.Sipes97@gmail.com', '_2RcA6N2tT48tMK', '649-690-0095', '269-300-8293', '175 Yasmeen Stream', 'Auburn', 'Nebraska', 'Papua New Guinea', NULL, '2024-06-16 19:55:05', '2024-06-15 21:41:59', 'Eliminado'),
	(49, 'Peggy Wolff', 'Wiegand', '25980885', 'Viva_Pollich85', 'Uriel_Connelly@yahoo.com', '2QAGcpyDcWb_RVo', '379-603-2265', '279-717-4310', '463 Stefan Hills', 'Baumbachbury', 'South Dakota', 'Singapore', NULL, '2024-06-16 19:55:05', '2024-06-16 01:18:22', 'Admin'),
	(50, 'Anita Stamm', 'Bernier', '16545763', 'Jada.Murazik', 'Alivia23@gmail.com', 'cctnnzsxDRJw_RX', '865-886-8654', '783-984-6405', '064 Zachariah Islands', 'North Jeanneside', 'Minnesota', 'Thailand', NULL, '2024-06-16 19:55:05', '2024-06-15 18:51:29', 'Editor');
	
-- Volcando estructura para tabla db_tpo_nodejs.vuelos
CREATE TABLE IF NOT EXISTS `vuelos` (
  `id_vuelo` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_vuelo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla db_tpo_nodejs.vuelos: ~0 rows (aproximadamente)
DELETE FROM `vuelos`;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;


