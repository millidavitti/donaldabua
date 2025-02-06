import { portfolio_project_description_jotai } from "@/data/atoms/app_data";
import { useAtom } from "jotai";
import React from "react";

export default function AddPortfolioProjectDescription() {
	const [portfolio_project_description, portfolio_project_description_setter] =
		useAtom(portfolio_project_description_jotai);
	return (
		<>
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Project Description
			</label>
			<input
				type='text'
				required
				className='outline p-3 valid:outline-emerald-800 invalid:outline-red-800'
				value={portfolio_project_description}
				onChange={(e) => {
					portfolio_project_description_setter(e.target.value);
				}}
			/>
		</>
	);
}
