import { project_description_jotai } from "@/data/atoms/app_data";
import { useAtomValue } from "jotai";
import React from "react";

export default function PreviewProjectDescription() {
	const project_description = useAtomValue(project_description_jotai);

	return (
		<>
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Project Description
			</label>
			<p>{project_description}</p>
		</>
	);
}
