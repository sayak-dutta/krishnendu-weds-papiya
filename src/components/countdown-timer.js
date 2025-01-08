"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CountdownTimer({ targetDate }) {
	const [timeLeft, setTimeLeft] = useState({
		hours: 0,
		days: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const timer = setInterval(() => {
			const now = new Date().getTime();
			const target = new Date(targetDate).getTime();
			const difference = target - now;

			if (difference > 0) {
				setTimeLeft({
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
					minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
					seconds: Math.floor((difference % (1000 * 60)) / 1000),
				});
			}
		}, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	const countItem = {
		hidden: { opacity: 0, scale: 0.8 },
		show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
	};

	return (
		<div className="flex justify-center gap-1 md:gap-4">
			<motion.div
				className="bg-white rounded-lg p-4 min-w-[100px] shadow-md"
				variants={countItem}
				initial="hidden"
				animate="show"
			>
				<div className="text-4xl font-bold text-pink-600">{timeLeft.days}</div>
				<div className="text-sm text-gray-600">Days</div>
			</motion.div>
			<motion.div
				className="bg-white rounded-lg p-4 min-w-[100px] shadow-md"
				variants={countItem}
				initial="hidden"
				animate="show"
				transition={{ delay: 0.1 }}
			>
				<div className="text-4xl font-bold text-pink-600">{timeLeft.hours}</div>
				<div className="text-sm text-gray-600">Hours</div>
			</motion.div>
			<motion.div
				className="bg-white rounded-lg p-4 min-w-[100px] shadow-md"
				variants={countItem}
				initial="hidden"
				animate="show"
				transition={{ delay: 0.2 }}
			>
				<div className="text-4xl font-bold text-pink-600">{timeLeft.minutes}</div>
				<div className="text-sm text-gray-600">Minutes</div>
			</motion.div>
			<motion.div
				className="bg-white rounded-lg p-4 min-w-[100px] shadow-md"
				variants={countItem}
				initial="hidden"
				animate="show"
				transition={{ delay: 0.3 }}
			>
				<div className="text-4xl font-bold text-pink-600">{timeLeft.seconds}</div>
				<div className="text-sm text-gray-600">Seconds</div>
			</motion.div>
		</div>
	);
}
