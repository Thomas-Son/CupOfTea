:
:
:
contenir, 1N order, 0N product
product: id, ref, quantity, price, category, comment ,label, url
appartenir, 1N product, 0N category

basket: id, quantity, price, discount
possede, 01 user, 11 basket
passer, 0N user, 11 order
order: id, ref, date, quantity, price, discount
avoir4, 0N product, 11 comment
:

:
avoir3, 1N user, 0N role
user: id, alias, email, password, address, role
poster, 0N user, 11 comment
comment: id, label, content, date
:

:
role: id, label
possede2, 01 user, 11 wishlist
:
:
:

:
:
wishlist: id, product
:
:
:

/*    */


CREATE DATABASE IF NOT EXISTS `cup_of_tea` DEFAULT CHARACTER SET UTF8MB4 COLLATE utf8mb4_unicode_ci;
USE `cup_of_tea`;

CREATE TABLE `category` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `label` VARCHAR(42),
  `description` VARCHAR(255),
  `url_image` VARCHAR(42),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE `order` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `total_amount` VARCHAR(42),
  `order_date` datetime DEFAULT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE `tea_order` (
  `tea_id` INT UNSIGNED NOT NULL,
  `order_id` INT UNSIGNED NOT NULL,
  `quantity` VARCHAR(42),
  `ref_product` VARCHAR(42),
  PRIMARY KEY (`tea_id`, `order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE `tea_packaging` (
  `packaging_id` INT UNSIGNED NOT NULL,
  `tea_id` INT UNSIGNED NOT NULL,
  `ref` VARCHAR(42),
  `price` VARCHAR(42),
  PRIMARY KEY (`packaging_id`, `tea_id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE `vote` (
  `tea_id` INT UNSIGNED NOT NULL,
  `user_id` INT UNSIGNED NOT NULL,
  `vote_count` VARCHAR(42),
  PRIMARY KEY (`tea_id`, `user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE `packaging` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `package` VARCHAR(42),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE `tea` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `label_1` VARCHAR(42),
  `label_2` VARCHAR(42),
  `description` VARCHAR(255),
  `url_tea` VARCHAR(120),
  `url_image` VARCHAR(120),
  `vote_average` VARCHAR(42),
  `our_favorite` VARCHAR(42),
  `categorie_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

CREATE TABLE `user` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `label` VARCHAR(42),
  `email` varchar(120) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` VARCHAR(42),
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;

ALTER TABLE `order` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
ALTER TABLE `tea_order` ADD FOREIGN KEY (`tea_id`) REFERENCES `tea` (`id`);
ALTER TABLE `tea_order` ADD FOREIGN KEY (`order_id`) REFERENCES `order` (`id`);
ALTER TABLE `tea_packaging` ADD FOREIGN KEY (`packaging_id`) REFERENCES `packaging` (`id`);
ALTER TABLE `tea_packaging` ADD FOREIGN KEY (`tea_id`) REFERENCES `tea` (`id`);
ALTER TABLE `vote` ADD FOREIGN KEY (`tea_id`) REFERENCES `tea` (`id`);
ALTER TABLE `vote` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
ALTER TABLE `tea` ADD FOREIGN KEY (`categorie_id`) REFERENCES `category` (`id`);