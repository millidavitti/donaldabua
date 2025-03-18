import { PING_ENDPOINT } from "./ping.endpoints";
import { PROFILE_ENDPOINT } from "./profile/profile.endpoint";
import { LOCATION_ENDPOINT } from "./user/location.endpoints";
import { SOCIALS_ENDPOINT } from "./user/socials.endpoint";
import { USER_ENDPOINT } from "./user/user.endpoints";
import { PROFILE_TECHNOLOGY_ENDPOINT } from "./profile/profile-technology.endpoint";
import { PROJECT_ENDPOINT } from "./project/project.endpoint";
import { PROJECT_CONTENT_ENDPOINT } from "./project/project-content.endpoint";
import { PROJECT_TECHNOLOGY_ENDPOINT } from "./project/project-technology.endpoint";
import { TECHNOLOGY_ENDPOINT } from "./technology.endpoint";

export const ENDPOINTS = {
	user: USER_ENDPOINT,
	location: LOCATION_ENDPOINT,
	socials: SOCIALS_ENDPOINT,
	ping: PING_ENDPOINT,
	profile: PROFILE_ENDPOINT,
	profileTechnology: PROFILE_TECHNOLOGY_ENDPOINT,
	project: PROJECT_ENDPOINT,
	projectContent: PROJECT_CONTENT_ENDPOINT,
	projectTechnology: PROJECT_TECHNOLOGY_ENDPOINT,
	technology: TECHNOLOGY_ENDPOINT,
};
