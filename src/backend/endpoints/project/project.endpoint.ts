export const PROJECT_ENDPOINTS = {
	list: (profileId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/projects/${profileId}`,
	create: (profileId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/projects/private/${profileId}`,
	update: (projectId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/projects/private/${projectId}`,
	delete: (projectId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/projects/private/${projectId}`,
};
