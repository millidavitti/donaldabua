import Flex from "@/components/layouts/flex";
import { project_technologies_jotai } from "@/data/atoms/app_data";
import { useAtom } from "jotai";
import { X } from "lucide-react";
import React from "react";

export default function AddProjectTechnologies() {
	const [project_technologies, project_technologies_setter] = useAtom(
		project_technologies_jotai,
	);
	return (
		<>
			{" "}
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Tech Stack
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
			<input
				type='text'
				required
				className='outline p-3'
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						if ((e.target as HTMLInputElement).value)
							project_technologies_setter((tech) => {
								return {
									...tech,
									name: (e.target as HTMLInputElement).value,
								};
							});
						(e.target as HTMLInputElement).value = "";
					}
				}}
			/>
		</>
	);
}
