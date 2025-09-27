export default function useEditProfileTechnologiesInterface() {
	function editTechnologies() {}

	function cancelTechnologiesEdit() {}

	async function saveTechnologiesEdit() {}
	return {
		editTechnologies,
		cancelTechnologiesEdit,
		saveTechnologiesEdit,
		profile_technologies_snapshot: [],
		api_task: "",
	};
}
