import { useAtom, useAtomValue } from "jotai";
import { useResetDraft } from "../../../../../hooks/use-reset-project-draft";
import {
	create_project_atom,
	input_project_atom,
	input_project_technologies_atom,
	input_project_content_atom,
	mutate_project_atom,
} from "@/data/data";
import { usePortfolio } from "@/app/(dashboard)/components/profile/interfaces/use-portfolio.interface";

export function usePublish() {
	const input_project_content = useAtomValue(input_project_content_atom);
	const input_project_technologies = useAtomValue(
		input_project_technologies_atom,
	);

	const resetProjectDraft = useResetDraft();
	const [create_project] = useAtom(create_project_atom);
	const [mutate_project] = useAtom(mutate_project_atom);
	const input_project = useAtomValue(input_project_atom);
	const [context, set_context] = useAtom(usePortfolio.context_atom);
	const close = () => {
		set_context(null);
		resetProjectDraft();
	};
	const create = async () => {
		await create_project.mutateAsync({
			content: input_project_content,
			project: input_project,
			technologies: input_project_technologies,
		});
		close();
	};

	const update = async () => {
		await mutate_project.mutateAsync({
			content: input_project_content,
			project: input_project,
			technologies: input_project_technologies,
		});
		close();
	};

	const publish = async () => {
		switch (context) {
			case "preview-draft":
				await create();
				break;
			case "preview-update":
				await update();
				break;
			default:
				break;
		}
	};

	return {
		publish,
		isPending: create_project.isPending,
		context,
	};
}
