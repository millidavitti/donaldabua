import { portfolio_project_description_jotai } from "@/data/atoms/app_data";
import { useAtomValue } from "jotai";
import React from "react";

export default function PreviewPortfolioProjectDescription() {
	const portfolio_project_description = useAtomValue(
		portfolio_project_description_jotai,
	);

	return (
		<>
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Project Description
			</label>
			<p>{portfolio_project_description}</p>
		</>
	);
}
