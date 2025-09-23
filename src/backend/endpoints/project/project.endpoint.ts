export const PROJECT_ENDPOINT = {
	list: (profileId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/projects/${profileId}`,
	create: (profileId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/projects/${profileId}`,
	update: (projectId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/projects/${projectId}`,
	delete: (projectId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/projects/${projectId}`,
};
