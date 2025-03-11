export const DASHBOARD_VIEWS = [
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
	"settings",
	null,
] as const;

export const PROJECT_DRAFT_VIEWS = [
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

export const SETTINGS_VIEWS = ["manage-technologies", null] as const;
