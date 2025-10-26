import { Technology } from "@/data/home/home-atoms/home-data";

export default function useEditProfileTechnologiesInterface() {
	function editTechnologies() {}

	function cancelTechnologiesEdit() {}

	async function saveTechnologiesEdit() {}
	return {
		editTechnologies,
		cancelTechnologiesEdit,
		saveTechnologiesEdit,
		profile_technologies_snapshot: [] as Technology[],
		api_task: "",
	};
}
