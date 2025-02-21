import {
	defaultStore,
	project_description_jotai,
	project_thumbnail_jotai,
	project_title_jotai,
	projects_jotai,
} from "@/data/atoms/app_data";
import {
	edit_profile_jotai,
	project_to_edit_jotai,
} from "@/data/atoms/ui_state";
import { createId } from "@paralleldrive/cuid2";
import { useAtomValue, useSetAtom } from "jotai";
import useResetProjectFormFields from "../use-reset-portfolio-project-form-fields";

export default function usePublishPortfolioProjectInterface() {
	const projects_setter = useSetAtom(projects_jotai);
	const project_to_edit = useAtomValue(project_to_edit_jotai);
	const edit_profile = useAtomValue(edit_profile_jotai);
	const resetProjectFormFields = useResetProjectFormFields();

	function publishProject() {
		projects_setter((projects) => [
			...projects,
			{
				id: createId(),
				description: defaultStore.get(project_description_jotai),
				thumbnail: defaultStore.get(project_thumbnail_jotai),
				title: defaultStore.get(project_title_jotai),
			},
		]);

		resetProjectFormFields();
	}

	function savePublishedProjectEdit() {
		projects_setter((projects) =>
			projects.map((project) => {
				if (project_to_edit! === project.id)
					return {
						id: createId(),
						description: defaultStore.get(project_description_jotai),
						thumbnail: defaultStore.get(project_thumbnail_jotai),
						title: defaultStore.get(project_title_jotai),
					};
				return project;
			}),
		);
		resetProjectFormFields();
	}

	return {
		publishProject,
		savePublishedProjectEdit,
		editProfileState: edit_profile,
	};
}
