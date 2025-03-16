import { BASE_URL } from "..";

export const LOCATION_ENDPOINTS = {
	read: (userId: string) => `${BASE_URL}/user-locations/public/${userId}`,
	update: (userId: string) => `${BASE_URL}/user-locations/private/${userId}`,
};
