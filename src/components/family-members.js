"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const wifeFamily = [
	{ name: "বাসন্তী তাঁতী", relation: "ঠাকুমা", image: "/basanti.jpeg?height=300&width=300" },
	{ name: "পতিত পাবন তাঁতী", relation: "বাবা", image: "/patit.jpeg?height=300&width=300" },
	{ name: "প্রতিমা তাঁতী", relation: "মা", image: "/pratima.jpeg?height=300&width=300" },
	{ name: "প্রকৃতি তাঁতী", relation: "ছোটো বোন", image: "/prakriti.jpeg?height=300&width=300" },
	{ name: "নীলরতন তাঁতী", relation: "মেজো কাকা", image: "/placeholder.svg?height=300&width=300" },
	{
		name: "বিউটি তাঁতী",
		relation: "মেজো কাকিমা",
		image: "/biuti.jpeg?height=300&width=300",
	},
	{ name: "অঙ্কুর তাঁতী", relation: "ভাই", image: "/ankur.jpeg?height=300&width=300" },
	{ name: "ভরত তাঁতী", relation: "সেজো কাকা", image: "/placeholder.svg?height=300&width=300" },
	{
		name: "সুস্মিতা তাঁতী",
		relation: "সেজো কাকিমা",
		image: "/susmita.jpeg?height=300&width=300",
	},
];

const husbandFamily = [
	{
		name: "ডা: কৃষ্ণেন্দু মন্ডল",
		relation: "পাত্র",
		image: "/km2.jpeg?height=300&width=300",
	},
	{
		name: "ডা: নীহার রঞ্জন মন্ডল",
		relation: "বাবা",
		image: "/nihar-mondal.jpeg?height=300&width=300",
	},
	{ name: "রূপবানী মন্ডল", relation: "মা", image: "/rupbani-mondal.jpeg?height=300&width=300" },
	{
		name: "সমীরন মন্ডল",
		relation: "বড় জামাইবাবু",
		image: "/samiran-mondal.jpeg",
	},
	{ name: "মিতা মন্ডল", relation: "বড় দিদি", image: "/mita-mondal.jpeg" },
	{
		name: "গোবিন্দ হালদার",
		relation: "মেজো জামাইবাবু",
		image: "/gobinda.jpeg?height=300&width=300",
	},
	{ name: "মিঠু হালদার", relation: "মেজো দিদি", image: "/mithu-halder.jpeg" },
	{
		name: "বিজন হালদার",
		relation: "ছোট জামাইবাবু",
		image: "/bijon-halder.jpeg",
	},
	{
		name: "মিত্রা হালদার",
		relation: "ছোট দিদি",
		image: "/mitra-halder.jpeg?height=300&width=300",
	},
];

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

export function FamilyMembers() {
	return (
		<section className="py-20 px-4 bg-pink-50 bengali-font">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					className="text-3xl text-pink-600 text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Important Family Members
				</motion.h2>

				<Tabs defaultValue="wife" className="w-full">
					<TabsList className="w-full max-w-md mx-auto mb-8">
						<TabsTrigger value="wife" className="w-1/2">
							কনেপক্ষ
						</TabsTrigger>
						<TabsTrigger value="husband" className="w-1/2">
							বরপক্ষ
						</TabsTrigger>
					</TabsList>

					<TabsContent value="wife">
						<motion.div
							className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
							variants={container}
							initial="hidden"
							animate="show"
						>
							{wifeFamily.map((member, index) => (
								<motion.div
									key={member.name}
									className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
									variants={item}
								>
									<div className="relative w-40 h-40 mb-4 overflow-hidden rounded-full">
										<Image
											src={member.image}
											alt={member.name}
											fill
											className="object-cover"
										/>
									</div>
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										{member.name}
									</h3>
									<p className="text-gray-600">{member.relation}</p>
								</motion.div>
							))}
						</motion.div>
					</TabsContent>

					<TabsContent value="husband">
						<motion.div
							className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
							variants={container}
							initial="hidden"
							animate="show"
						>
							{husbandFamily.map((member, index) => (
								<motion.div
									key={member.name}
									className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
									variants={item}
								>
									<div className="relative w-40 h-40 mb-4 overflow-hidden rounded-full">
										<Image
											src={member.image}
											alt={member.name}
											fill
											className="object-cover"
										/>
									</div>
									<h3 className="text-xl font-semibold text-gray-800 mb-2">
										{member.name}
									</h3>
									<p className="text-gray-600">{member.relation}</p>
								</motion.div>
							))}
						</motion.div>
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
}
