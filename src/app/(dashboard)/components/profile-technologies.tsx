import Flex from "@/components/layouts/flex";
import { X } from "lucide-react";
import React from "react";

export default function ProfileTechnologies() {
	return (
		<Flex className='gap-3 flex-wrap shrink-0 grow'>
			{techStack.map((tech) => (
				<Flex className='gap-3 items-center' key={tech.id}>
					<p className='shrink-0 font-medium'>{tech.name}</p>
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
	{ id: 1, name: "Next JS" },
	{ id: 2, name: "Express" },
	{ id: 3, name: "Node" },
	{ id: 4, name: "Prisma" },
	{ id: 5, name: "Neo4j" },
	{ id: 6, name: "Typescript" },
	{ id: 7, name: "Github" },
	{ id: 8, name: "Azure" },
];
