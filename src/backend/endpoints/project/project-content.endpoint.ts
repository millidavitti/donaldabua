export const PROJECT_CONTENT_ENDPOINT = {
	list: (projectId: string) =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/project-content/${projectId}`,
};
