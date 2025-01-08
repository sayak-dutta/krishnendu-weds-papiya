"use client";

import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/countdown-timer";
import { motion } from "framer-motion";
import { FamilyMembers } from "@/components/family-members";
import { Gallery } from "@/components/gallery";
import BackgroundVideo from "@/components/background-video";
import Link from "next/link";

export default function WeddingInvitation() {
	return (
		<main className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative h-fit overflow-hidden">
				<BackgroundVideo
					src="/trailer.mp4"
					fallbackImageSrc="/placeholder.svg?height=1080&width=1920"
				/>
				<div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 z-10">
					{/* <p
						className="mb-4 text-lg"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						To Allah The Most Loving
					</p> */}
					{/* <p
						className="mb-8 text-lg max-w-2xl"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						With Your blessing, you brought us together in a holy marriage bond
					</p> */}
					<motion.div
						className=" bengali-font"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<Image
							src="/icon-header.png"
							width={300}
							height={100}
							className="w-40 md:w-auto mx-auto"
							alt="icon"
						/>
					</motion.div>
					<motion.h2
						className="text-5xl lg:text-6xl font-script mb-6"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						Krishnendu & Papiya
					</motion.h2>
					<motion.p
						className="text-3xl font-semibold"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.8 }}
					>
						24 January 2025
					</motion.p>
				</div>
			</section>

			{/* Meet The Couple Section */}
			<section className="py-8 px-2 bg-pink-50">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl text-pink-600 mb-4">Meet The Happy Couple</h2>

					<div className="grid md:grid-cols-2 gap-12">
						<motion.div
							className="flex flex-col items-center"
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<div className="relative w-64 h-64 mb-4">
								<div className="absolute inset-0 rounded-full border-4 border-pink-200" />
								<Image
									src="/km1.jpeg?height=256&width=256"
									alt="Groom"
									width={256}
									height={256}
									className="rounded-full"
								/>
							</div>
							<h3 className="text-4xl font-script text-pink-600 mb-2">
								Dr. Krishnendu Mondal
							</h3>
							<p className="text-gray-600 mb-4">Son of</p>
							<p className="text-gray-800 mb-6">
								Dr. Nihar Ranjan Mondal & Mrs. Rupbani Mondal
							</p>
							<div className="flex gap-4">
								<a href="#" className="text-pink-600 hover:text-pink-700">
									<Instagram className="w-5 h-5" />
								</a>
								<a href="#" className="text-pink-600 hover:text-pink-700">
									<Twitter className="w-5 h-5" />
								</a>
								<a href="#" className="text-pink-600 hover:text-pink-700">
									<Facebook className="w-5 h-5" />
								</a>
							</div>
						</motion.div>

						<motion.div
							className="flex flex-col items-center"
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<div className="relative w-64 h-64 mb-4">
								<div className="absolute inset-0 rounded-full border-4 border-pink-200" />
								<Image
									src="/pt.jpeg?height=256&width=256"
									alt="Bride"
									width={256}
									height={256}
									className="rounded-full "
								/>
							</div>
							<h3 className="text-4xl font-script text-pink-600 mb-2">
								Dietician Papiya Tanti
							</h3>
							<p className="text-gray-600 mb-4">Daughter of</p>
							<p className="text-gray-800 mb-6">
								Mr. Patit Paban Tanti. & Mrs. Pratima Tanti
							</p>
							<div className="flex gap-4">
								<a href="#" className="text-pink-600 hover:text-pink-700">
									<Instagram className="w-5 h-5" />
								</a>
								<a href="#" className="text-pink-600 hover:text-pink-700">
									<Twitter className="w-5 h-5" />
								</a>
								<a href="#" className="text-pink-600 hover:text-pink-700">
									<Facebook className="w-5 h-5" />
								</a>
							</div>
						</motion.div>
					</div>
					<Image
						src="/knot.png"
						alt="knot"
						width={100}
						height={100}
						style={{ width: "100%" }}
						className="md:hidden"
					/>
				</div>
			</section>

			{/* Wedding Info Section */}
			<section className="py-20 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl text-pink-600 mb-8">We&apos;re Getting Married</h2>
					<div className="mb-8">
						{/* <h3 className="text-2xl font-arabic mb-4">
							Assalamualaikum Warahmatullahi Wabarakatuh
						</h3> */}
						{/* <p className="text-gray-600 max-w-2xl mx-auto">
							By asking for the grace and blessing of Allah SWT, We intend to hold a
							wedding celebration for our sons and daughters, which Allah SWT willing
							will be held on:
						</p> */}
					</div>

					<p className="text-3xl font-semibold mb-4 animate-fade-in bengali-font">
						অপেক্ষার আর মাত্র{" "}
					</p>

					<CountdownTimer targetDate="2025-01-24" />

					<div className="grid md:grid-cols-2 gap-8 mt-16">
						<Card>
							<CardContent className="p-6 text-center">
								<div className="mb-4">
									<Image
										src="/biye-icon.png"
										alt="Wedding rings"
										width={120}
										height={80}
										className="mx-auto"
									/>
								</div>
								<h3 className="text-2xl font-semibold mb-2 bengali-font">
									শুভ বিবাহ
								</h3>
								<p className="text-gray-600 text-xl mb-2 bengali-font">
									১০ই মাঘ ১৪৩১
								</p>
								<p className=" mb-4">24 January 2025</p>
								<h4 className="font-semibold mb-2 text-2xl bengali-font">
									{" "}
									স্থান{" "}
								</h4>
								<p className="text-gray-600 text-xl mb-2 bengali-font">
									নিজ বাসভবনে, কুল্পী পুরাতন বাজার আটচালার সন্নিকটে।
								</p>
								<Link href="https://maps.app.goo.gl/k2gMDgHhPLd7o3B26">
									<Button
										variant="secondary"
										className="mt-12 bg-pink-500 text-white hover:bg-pink-600"
									>
										Open Maps
									</Button>
								</Link>
							</CardContent>
						</Card>

						<Card>
							<CardContent className="p-6 text-center">
								<div className="mb-4">
									<Image
										src="/pritibhoj.png"
										alt="Party icon"
										width={150}
										height={80}
										className="mx-auto"
									/>
								</div>
								<h3 className="text-2xl font-semibold mb-2 bengali-font">
									প্রীতিভোজ
								</h3>
								<p className="text-gray-600 text-xl mb-4 bengali-font">
									১২ই মাঘ ১৪৩১
								</p>
								<h4 className="font-semibold mb-2">Bride&apos;s house</h4>
								<p className="text-gray-600 text-sm mb-4">
									Jl. Jakarta Raya No.21, Cicaheum,
									<br />
									Kiaracondong, Kota Bandung,
									<br />
									40282
								</p>
								<Link href={"https://maps.app.goo.gl/qv3jbwAFXG5CWXFa9"}>
									<Button
										variant="secondary"
										className="mt-12 bg-pink-500 text-white hover:bg-pink-600"
									>
										Open Maps
									</Button>
								</Link>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<FamilyMembers />

			{/* <Gallery /> */}

			{/* Map Section */}
			<section className="h-[400px] w-full">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7985117905477!2d107.6082378!3d-6.9175957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64c5e8866e5%3A0x37be7ac9d575f7ed!2sGedung%20Sate!5e0!3m2!1sen!2sid!4v1645524559349!5m2!1sen!2sid"
					width="100%"
					height="100%"
					style={{ border: 0 }}
					allowFullScreen
					loading="lazy"
				/>
			</section>
		</main>
	);
}
