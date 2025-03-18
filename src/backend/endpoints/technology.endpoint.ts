export const TECHNOLOGY_ENDPOINT = {
	list: () => `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/technologies`,
	update: () =>
		`${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/technologies/private`,
};
