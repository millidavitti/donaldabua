import { input_project_atom } from "@/data/data";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";

export default function DraftDeployment() {
	const [input_project, set_input_project] = useAtom(input_project_atom);

	return (
		<>
			{/* Project Deployment */}
			<label
				className='text-xl font-semibold shrink-0'
				htmlFor='draft-project-deployment'
			>
				Deployment
			</label>
			<input
				type='text'
				id='draft-project-deployment'
				required
				className={cn(
					"border p-3 shrink-0 valid:outline-emerald-600",
					Boolean(input_project.deployment) && "invalid:outline-red-600",
				)}
				value={input_project.deployment || ""}
				onChange={(e) => {
					set_input_project({ ...input_project, deployment: e.target.value });
				}}
			/>
		</>
	);
}
