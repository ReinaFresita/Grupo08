-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-04-2023 a las 23:43:57
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `loop2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `category_id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `category_id`, `image`) VALUES
(8, 'LOOP Lata Rubia', 'La malta, el trigo, los lúpulos aromáticos le otorgan un sabor no tradicional que la hacen muy particular.', '240.00', 0, '/images/products/image-1679436127718.png'),
(9, 'LOOP Lata Negra', 'Aroma y sabor a tostado, leve dulzor, cuerpo intenso y robusto en boca, amargo medio.', '270.00', 0, '/images/products/image-1679436168646.png'),
(10, 'LOOP Lata Roja', 'Sabor a malta, leve aroma a lupulo y a cereal, cuerpo medio, refrescante.', '240.00', 0, '/images/products/image-1679436216013.png'),
(11, 'LOOP Lata IPA', 'Intenso aroma a lúpulo, frutado y dulce, de apariencia dorado profundo, espuma blanca, sabor amargo balanceado con el dulzor de la uva.', '300.00', 0, '/images/products/image-1679436263181.png'),
(12, 'LOOP Botella Rubia', 'La malta, el trigo, los lúpulos aromáticos le otorgan un sabor no tradicional que la hacen muy particular.', '350.00', 0, '/images/products/image-1679436319351.png'),
(13, 'LOOP Botella IPA', 'Intenso aroma a lúpulo, frutado y dulce, de apariencia dorado profundo, espuma blanca, sabor amargo balanceado con el dulzor de la uva.', '350.00', 0, '/images/products/image-1679436340180.png'),
(14, 'LOOP Chapa I Love Beer', '', '1000.00', 0, '/images/products/image-1679436503493.jpg'),
(15, 'LOOP Chapa Logo', '', '1250.00', 0, '/images/products/image-1679440580252.jpg'),
(16, 'LOOP Chapa Cerveza Artesanal', '', '1450.00', 0, '/images/products/image-1679443314555.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `image`) VALUES
(6, 'Alejo', 'Baert', 'alejobaert@hotmail.com', '$2a$10$gbNKuuNS8l2CsZ2lxIG3M.fC6ZaDcIR.BTcoDNmWs7D/Y1cEAXNXK', '/images/users/image-1679961327714.jpeg'),
(7, 'aasdas', '123', 'alejobaert@hotmail.com', '$2a$10$ahs/Dfmdtk1qt7n/mPEb3eqxx.vHYC/17Q1gpHYUdPvLkH59J3pWG', '/images/users/image-1680820351871.png'),
(9, 'alex', 'bort', 'alejobaert@hotmail.com', '$2a$10$Pki2wGi0VwV.zQWXMoTo.e4bmEDl49SxoQXD6Zlbfn8xkZMuYPB.q', '/images/users/image-1681172432524.png'),
(10, 'alex', 'bort', 'alejobaert@hotmail1.com', '$2a$10$FjKKuMLCMRvRhWXRt.H2/uM25W7LS.c8KT63sryjHgN6RSuScS94.', '/images/users/image-1681172446980.jpeg'),
(11, '', '', '', '$2a$10$.h7HHbWukUNDo7t.fm3cN./OmZ2bG4O42iHRnHFYj91SAwFxUkWBK', 'default-image.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
