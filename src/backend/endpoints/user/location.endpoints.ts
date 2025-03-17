import { BASE_URL } from "..";

export const LOCATION_ENDPOINTS = {
	read: (userId: string) => `${BASE_URL}/locations/public/${userId}`,
	update: (userId: string) => `${BASE_URL}/locations/private/${userId}`,
};
