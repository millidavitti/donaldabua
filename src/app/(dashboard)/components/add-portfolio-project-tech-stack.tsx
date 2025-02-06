import Flex from "@/components/layouts/flex";
import { portfolio_project_tech_stack_jotai } from "@/data/atoms/app_data";
import { useAtom } from "jotai";
import { X } from "lucide-react";
import React from "react";

export default function AddPortfolioProjectTechStack() {
	const [portfolio_project_tech_stack, portfolio_project_tech_stack_setter] =
		useAtom(portfolio_project_tech_stack_jotai);
	return (
		<>
			{" "}
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Tech Stack
			</label>
			<Flex className='gap-3 flex-wrap shrink-0'>
				{portfolio_project_tech_stack.map((tech) => (
					<Flex className='gap-3 items-center' key={tech}>
						<p className='shrink-0 font-medium'>{tech}</p>
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
				className='outline p-3 valid:outline-emerald-800'
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						if ((e.target as HTMLInputElement).value)
							portfolio_project_tech_stack_setter((stack) => [
								...stack,
								(e.target as HTMLInputElement).value,
							]);
						(e.target as HTMLInputElement).value = "";
					}
				}}
			/>
		</>
	);
}
