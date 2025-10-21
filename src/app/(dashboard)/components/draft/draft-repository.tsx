import { input_project_atom } from "@/data/dashboard/dashboard-atoms/data";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";

export default function DraftRepository() {
	const [input_project, set_input_project] = useAtom(input_project_atom);

	return (
		<>
			{/* Project Repository */}
			<label
				className='text-xl font-semibold shrink-0'
				htmlFor='draft-project-repository'
			>
				Repository
			</label>
			<input
				type='text'
				id='draft-project-repository'
				required
				className={cn(
					"border p-3 shrink-0 valid:outline-emerald-600",
					Boolean(input_project.repository) && "invalid:outline-red-600",
				)}
				value={input_project.repository || ""}
				onChange={(e) => {
					set_input_project({ ...input_project, repository: e.target.value });
				}}
			/>
		</>
	);
}
