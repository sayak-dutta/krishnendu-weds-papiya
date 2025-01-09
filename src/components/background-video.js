"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

export default function BackgroundVideo({ src, fallbackImageSrc }) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return (
			<Image
				src={fallbackImageSrc}
				alt="Wedding background"
				fill
				className="object-cover brightness-80"
				priority
			/>
		);
	}

	return (
		<video
			src={src}
			width={"100%"}
			alt="Wedding background video"
			fill="true"
			className="object-cover brightness-80"
			priority="true"
			muted
			loop
			autoPlay
		/>
	);
}
