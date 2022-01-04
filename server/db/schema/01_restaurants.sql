-- Table for Restaurants
DROP TABLE IF EXISTS restaurants CASCADE;
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  location VARCHAR(255),
  price_range INTEGER NOT NULL
);