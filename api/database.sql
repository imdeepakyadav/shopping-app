CREATE DATABASE shopping;

USE shopping;

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_link VARCHAR(255),
    category_name VARCHAR(255),
    category_image VARCHAR(255),
    open_in VARCHAR(50)
);

CREATE TABLE banners (
    id INT AUTO_INCREMENT PRIMARY KEY,
    banner_link VARCHAR(255),
    banner_title VARCHAR(255),
    banner_image VARCHAR(255),
    open_in VARCHAR(50)
);

CREATE TABLE stores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    store_title VARCHAR(255),
    store_image VARCHAR(255),
    store_url VARCHAR(255),
    store_open VARCHAR(50),
    store_offer_desc VARCHAR(255)
);

CREATE TABLE strip_banners (
    id INT AUTO_INCREMENT PRIMARY KEY,
    strip_banner_image VARCHAR(255),
    strip_banner_url VARCHAR(255),
    strip_banner_placement INT,
    open_in VARCHAR(50)
);

CREATE TABLE electronics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    electronic_image VARCHAR(255),
    electronic_name VARCHAR(255),
    electronic_url VARCHAR(255),
    electronic_desc VARCHAR(255),
    open_in VARCHAR(50)
);

CREATE TABLE top_deals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    topdeal_image VARCHAR(255),
    topdeal_name VARCHAR(255),
    topdeal_url VARCHAR(255),
    topdeal_desc VARCHAR(255),
    open_in VARCHAR(50)
);

CREATE TABLE foods (
    id INT AUTO_INCREMENT PRIMARY KEY,
    food_image VARCHAR(255),
    food_name VARCHAR(255),
    food_url VARCHAR(255),
    open_in VARCHAR(50)
);

CREATE TABLE mens_wear (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mens_image VARCHAR(255),
    mens_name VARCHAR(255),
    mens_url VARCHAR(255),
    open_in VARCHAR(50),
    mens_desc VARCHAR(255)
);

CREATE TABLE womens_wear (
    id INT AUTO_INCREMENT PRIMARY KEY,
    womens_image VARCHAR(255),
    womens_name VARCHAR(255),
    womens_url VARCHAR(255),
    open_in VARCHAR(50),
    womens_desc VARCHAR(255)
);

CREATE TABLE smartphones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    smartphone_image VARCHAR(255),
    smartphone_name VARCHAR(255),
    smartphone_url VARCHAR(255),
    open_in VARCHAR(50),
    smartphone_desc VARCHAR(255)
);

CREATE TABLE app_settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    topretailer_name VARCHAR(255),
    trending_name VARCHAR(255),
    topdeal_name VARCHAR(255),
    smartphone_name VARCHAR(255),
    women_name VARCHAR(255),
    men_name VARCHAR(255),
    food_name VARCHAR(255),
    search_url VARCHAR(255)
);

CREATE TABLE ad_settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ad_unit VARCHAR(255),
    ad_type VARCHAR(50),
    ad_network VARCHAR(50),
    ad_priority INT,
    ad_counter VARCHAR(50)
);
