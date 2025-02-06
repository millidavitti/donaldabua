import { portfolio_project_title_jotai } from "@/data/atoms/app_data";
import { useAtom } from "jotai";

export default function AddPortfolioProjectTitle() {
	const [portfolio_project_title, portfolio_project_title_setter] = useAtom(
		portfolio_project_title_jotai,
	);
	return (
		<>
			{/* Project Title */}
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Project Title
			</label>
			<input
				type='text'
				required
				className='outline p-3 shrink-0 valid:outline-emerald-800 invalid:outline-red-800'
				value={portfolio_project_title}
				onChange={(e) => {
					portfolio_project_title_setter(e.target.value);
				}}
			/>
		</>
	);
}
