import Flex from "@/components/layouts/flex";
import { X } from "lucide-react";
import React from "react";

export default function TechStack() {
	return (
		<Flex className='gap-3 flex-wrap shrink-0 grow'>
			{techStack.map((tech) => (
				<Flex className='gap-3 items-center' key={tech}>
					<p className='shrink-0 font-medium'>{tech}</p>
					<X
						size={24}
						className='stroke-light-error cursor-pointer active:scale-[.95]'
					/>
				</Flex>
			))}
		</Flex>
	);
}

const techStack = [
	"Next JS",
	"Express",
	"Node",
	"Prisma",
	"Neo4j",
	"Typescript",
	"Github",
	"Azure",
];
