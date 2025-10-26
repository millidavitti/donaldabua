import { input_project_atom } from "@/data/data";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";

export default function DraftTitle() {
	const [input_project, set_input_project] = useAtom(input_project_atom);

	return (
		<>
			{/* Project Title */}
			<label
				className='text-xl font-semibold shrink-0'
				htmlFor='draft-project-title'
			>
				Title
			</label>
			<input
				type='text'
				id='draft-project-title'
				required
				className={cn(
					"border p-3 shrink-0 valid:outline-emerald-600",
					Boolean(input_project.title) && "invalid:outline-red-600",
				)}
				value={input_project.title}
				onChange={(e) => {
					set_input_project({ ...input_project, title: e.target.value });
				}}
			/>
		</>
	);
}
