import { input_project_atom } from "@/data/dashboard/dashboard-atoms/data";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";

export default function DraftDescription() {
	const [input_project, set_input_project] = useAtom(input_project_atom);
	return (
		<>
			<label
				className='text-xl font-semibold shrink-0'
				htmlFor='draft-project-description'
			>
				Description
			</label>
			<input
				type='text'
				id='draft-project-description'
				minLength={100}
				maxLength={250}
				required
				className={cn(
					"border p-3 valid:outline-emerald-600 shrink-0",
					Boolean(input_project.description) && "invalid:outline-red-600",
				)}
				value={input_project.description}
				onChange={(e) => {
					set_input_project({ ...input_project, description: e.target.value });
				}}
			/>
		</>
	);
}
