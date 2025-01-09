"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimatePresence, motion } from "framer-motion";

function createImgSrc(count) {
	const images = [];
	for (let i = 1; i < count; i++) {
		images.push(`/${i}.jpeg`);
		console.log(images);
	}
	return images;
}

const Lightbox = ({ src, onClose }) => (
	<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
		onClick={onClose}
	>
		<div className="relative w-full h-full max-w-4xl max-h-4xl">
			<Image src={src} alt="Full size image" fill className="object-contain" />
		</div>
	</motion.div>
);

export function Gallery() {
	const [images, setImages] = useState([]);
	const [lightboxImage, setLightboxImage] = useState(null);

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
	};

	useEffect(() => {
		setImages(createImgSrc(13));
	}, []);

	return (
		<section className="pt-12 px-4 bg-white bg-[url(/artwork.png)] md:bg-none bg-contain bg-no-repeat">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl text-pink-600 text-center bg-white mb-12 mt-[11rem] md:mt-2">
					Our Wedding Gallery
				</h2>
				<Slider {...settings}>
					{images.map((src, index) => (
						<div key={index} className="outline-none">
							<div
								className="aspect-video relative cursor-pointer"
								onClick={() => setLightboxImage(src)}
							>
								<Image
									src={src}
									alt={`Wedding photo ${index + 1}`}
									fill
									className="object-cover rounded-lg"
								/>
							</div>
						</div>
					))}
				</Slider>
				<AnimatePresence>
					{lightboxImage && (
						<Lightbox src={lightboxImage} onClose={() => setLightboxImage(null)} />
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}
