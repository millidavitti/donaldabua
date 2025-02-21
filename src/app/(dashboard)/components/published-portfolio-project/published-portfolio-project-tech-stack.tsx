import Flex from "@/components/layouts/flex";
import { X } from "lucide-react";
import React from "react";

export default function PublishedProjectTechStack({
	techStack,
}: {
	techStack: string[];
}) {
	return (
		<>
			{/* Tech Stack */}
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Tech Stack
			</label>
			<Flex className='gap-3 flex-wrap shrink-0'>
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
		</>
	);
}
