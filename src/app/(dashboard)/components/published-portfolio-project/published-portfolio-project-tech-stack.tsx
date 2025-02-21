import Flex from "@/components/layouts/flex";
import { project_technologies_jotai } from "@/data/atoms/app_data";
import { useAtomValue } from "jotai";
import { X } from "lucide-react";
import React from "react";

export default function PublishedProjectTechStack() {
	const project_technologies = useAtomValue(project_technologies_jotai);

	return (
		<>
			{/* Technologies */}
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Technologies
			</label>
			<Flex className='gap-3 flex-wrap shrink-0'>
				{project_technologies.map((tech) => (
					<Flex className='gap-3 items-center' key={tech.id}>
						<p className='shrink-0 font-medium'>{tech.name}</p>
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
