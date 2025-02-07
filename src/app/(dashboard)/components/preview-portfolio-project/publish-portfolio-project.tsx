import Button from "@/components/ui/button";
import { portfolio_project_data_jotai } from "@/data/atoms/app_data";
import { mock_portfolio_projects_jotai } from "@/data/mock";
import { useAtom, useSetAtom } from "jotai";
import React from "react";

export default function PublishPortfolioProject() {
	const [portfolio_project_data, portfolio_project_data_setter] = useAtom(
		portfolio_project_data_jotai,
	);
	const mock_portfolio_projects_setter = useSetAtom(
		mock_portfolio_projects_jotai,
	);
	return (
		<Button
			type='button'
			className='bg-black text-light-surface'
			onClick={() => {
				mock_portfolio_projects_setter((projects) => [
					...projects,
					portfolio_project_data,
				]);
				portfolio_project_data_setter({});
			}}
		>
			Publish
		</Button>
	);
}
