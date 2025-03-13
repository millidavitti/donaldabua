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
	"select-profile",
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

export const SOCIAL_PLATFORMS = [
	"Facebook",
	"Instagram",
	"Twitter",
	"X",
	"TikTok",
	"LinkedIn",
	"Snapchat",
	"Pinterest",
	"Reddit",
	"YouTube",
	"WhatsApp",
	"Telegram",
	"Discord",
	"WeChat",
	"Threads",
	"Tumblr",
] as const;

export const SOCIAL_PLATFORM_ICONS = {
	Facebook: "/social-media-icons/facebook.svg",
	Instagram: "/social-media-icons/instagram.svg",
	Twitter: "/social-media-icons/twitter.svg",
	X: "/social-media-icons/twitter.svg",
	TikTok: "/social-media-icons/tik-tok.svg",
	LinkedIn: "/social-media-icons/linkedin.svg",
	Snapchat: "/social-media-icons/snapchat.svg",
	Pinterest: "/social-media-icons/pinterest.svg",
	Reddit: "/social-media-icons/reddit.svg",
	YouTube: "/social-media-icons/youtube.svg",
	WhatsApp: "/social-media-icons/whatsapp.svg",
	Telegram: "/social-media-icons/telegram.svg",
	Discord: "/social-media-icons/discord.svg",
	WeChat: "/social-media-icons/wechat.svg",
	Threads: "/social-media-icons/threads.svg",
	Tumblr: "/social-media-icons/tumblr.svg",
} as const;
