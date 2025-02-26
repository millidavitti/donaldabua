import { project_title_jotai } from "@/data/atoms/app_data";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";

export default function DraftProjectTitle() {
	const [project_title, project_title_setter] = useAtom(project_title_jotai);

	return (
		<>
			{/* Project Title */}
			<label className='text-xl font-semibold shrink-0' htmlFor='project-title'>
				Project Title
			</label>
			<input
				type='text'
				id='project-title'
				required
				className={cn(
					"outline p-3 shrink-0 valid:outline-emerald-600",
					Boolean(project_title) && "invalid:outline-red-600",
				)}
				value={project_title}
				onChange={(e) => {
					project_title_setter(e.target.value);
				}}
			/>
		</>
	);
}
