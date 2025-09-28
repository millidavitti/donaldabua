export const PROJECT_TECHNOLOGY_ENDPOINT = {
	list: (projectId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/projects/technologies/${projectId}`,
};
