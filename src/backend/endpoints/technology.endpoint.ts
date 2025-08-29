export const TECHNOLOGY_ENDPOINT = {
	getTechnologies: () =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/technologies`,
	update: () =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/technologies/private`,
};
