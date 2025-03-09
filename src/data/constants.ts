export const EDIT_PROFILE_STATES = [
	"edit-image",
	"edit-location",
	"edit-name",
	"edit-video",
	"edit-hours-per-week",
	"edit-title",
	"edit-hourly-rate",
	"edit-profile-overview",
	"edit-profile-technologies",
	"edit-employment-history",
	"edit-socials",
	"edit-portfolio",
	"edit-published-project",
	"view-project",
	"create-profile",
	null,
] as const;

export const EDIT_PROJECT_STATES = [
	"edit-project-video",
	"edit-project-image",
	"edit-project-markdown",
	null,
] as const;

export const AVAILABILITY_OPTIONS = [
	"More than 30 hrs/week",
	"Less than 30 hrs/week",
	"As needed - open to offers",
	"None",
] as const;
