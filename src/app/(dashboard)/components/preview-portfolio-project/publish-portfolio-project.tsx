import Button from "@/components/ui/button";
import {
	portfolio_project_data_jotai,
	PortfolioProjectData,
} from "@/data/atoms/app_data";
import { createId } from "@paralleldrive/cuid2";
import { useAtomValue } from "jotai";
import React from "react";

export default function PublishPortfolioProject() {
	const portfolio_project_data = useAtomValue(portfolio_project_data_jotai);
	return (
		<Button
			type='button'
			className='bg-black text-light-surface'
			onClick={() => {
				console.log(portfolio_project_data);
			}}
		>
			Publish
		</Button>
	);
}
