import { LOCATION_ENDPOINTS } from "./user/location.endpoints";
import { SOCIALS_ENDPOINTS } from "./user/socials.endpoint";
import { USER_ENDPOINTS } from "./user/user.endpoints";

export const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT + "";

export const ENDPOINTS = {
	base: BASE_URL,
	user: USER_ENDPOINTS,
	location: LOCATION_ENDPOINTS,
	socials: SOCIALS_ENDPOINTS,
};
