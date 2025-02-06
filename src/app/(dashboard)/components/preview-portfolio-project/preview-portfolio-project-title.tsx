import Flex from "@/components/layouts/flex";
import { portfolio_project_title_jotai } from "@/data/atoms/app_data";
import { useAtomValue } from "jotai";

export default function PreviewPortfolioProjectTitle() {
	const portfolio_project_title = useAtomValue(portfolio_project_title_jotai);

	return (
		<Flex flex='column' className='shrink-0 gap-3'>
			<label className='text-xl font-semibold' htmlFor='title'>
				Project Title
			</label>
			<p>{portfolio_project_title}</p>
		</Flex>
	);
}
