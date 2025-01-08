"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const images = [
	"/placeholder.svg?height=600&width=800",
	"/placeholder.svg?height=600&width=800",
	"/placeholder.svg?height=600&width=800",
	"/placeholder.svg?height=600&width=800",
	"/placeholder.svg?height=600&width=800",
	"/placeholder.svg?height=600&width=800",
];

const GallerySlide = ({ images }) => (
	<div className="grid grid-cols-3 grid-rows-2 gap-2 h-[600px]">
		{images.map((src, index) => (
			<div key={index} className={`relative ${index === 0 ? "col-span-2 row-span-2" : ""}`}>
				<Image
					src={src}
					alt={`Wedding photo ${index + 1}`}
					fill
					className="object-cover rounded-lg"
				/>
			</div>
		))}
	</div>
);

export function Gallery() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
	};

	return (
		<section className="py-20 px-4 bg-white">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					className="text-3xl text-pink-600 text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Our Wedding Gallery
				</motion.h2>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<Slider {...settings}>
						<GallerySlide images={images.slice(0, 6)} />
						<GallerySlide images={images.slice(3).concat(images.slice(0, 3))} />
					</Slider>
				</motion.div>
			</div>
		</section>
	);
}
