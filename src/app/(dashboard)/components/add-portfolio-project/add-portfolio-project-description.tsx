import { project_description_jotai } from "@/data/atoms/app_data";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import React from "react";

export default function AddProjectDescription() {
	const [project_description, project_description_setter] = useAtom(
		project_description_jotai,
	);
	return (
		<>
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Project Description
			</label>
			<input
				type='text'
				id='portfolio-project-description'
				minLength={100}
				maxLength={250}
				required
				className={cn(
					"outline p-3 valid:outline-emerald-800",
					Boolean(project_description) && "invalid:outline-red-800",
				)}
				value={project_description}
				onChange={(e) => {
					project_description_setter(e.target.value);
				}}
			/>
		</>
	);
}
