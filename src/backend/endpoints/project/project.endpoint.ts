export const PROJECT_ENDPOINT = {
	list: (profileId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/projects/${profileId}`,
	create: (profileId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/projects/${profileId}`,
	update: () => `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/projects`,
	delete: (projectId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/projects/${projectId}`,
};
