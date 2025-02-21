import Flex from "@/components/layouts/flex";
import { project_technologies_jotai } from "@/data/atoms/app_data";
import { useAtomValue } from "jotai";
import { X } from "lucide-react";
import React from "react";

export default function PreviewProjectTechnologies() {
	const project_tech_stack = useAtomValue(project_technologies_jotai);

	return (
		<>
			{/* Tech Stack */}
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Tech Stack
			</label>
			<Flex className='gap-3 flex-wrap shrink-0'>
				{project_tech_stack.map((tech) => (
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
