import { PING_ENDPOINTS } from "./ping.endpoints";
import { PROFILE_ENDPOINTS } from "./profile/profile.endpoint";
import { LOCATION_ENDPOINTS } from "./user/location.endpoints";
import { SOCIALS_ENDPOINTS } from "./user/socials.endpoint";
import { USER_ENDPOINTS } from "./user/user.endpoints";
import { PROFILE_TECHNOLOGY_ENDPOINTS } from "./profile/profile-technology.endpoint";
import { PROJECT_ENDPOINTS } from "./project/project.endpoint";

export const ENDPOINTS = {
	user: USER_ENDPOINTS,
	location: LOCATION_ENDPOINTS,
	socials: SOCIALS_ENDPOINTS,
	ping: PING_ENDPOINTS,
	profile: PROFILE_ENDPOINTS,
	profileTechnology: PROFILE_TECHNOLOGY_ENDPOINTS,
	project: PROJECT_ENDPOINTS,
};
