import { USER_ENDPOINTS } from "./user.endpoints";

export const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "";

export const ENDPOINTS = {
	base: BASE_URL,
	user: USER_ENDPOINTS,
};
