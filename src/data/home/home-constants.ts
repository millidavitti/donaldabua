export const VAULT_VIEWS = ["view-project", "select-profile", null] as const;

export const AVAILABILITY_OPTIONS = [
	"More than 30 hrs/week",
	"Less than 30 hrs/week",
	"As needed - open to offers",
	"None",
] as const;

export const SOCIAL_PLATFORMS = [
	"Facebook",
	"Instagram",
	"X / Twitter",
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
	"X / Twitter": "/social-media-icons/twitter.svg",
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

export const DELAY = 200;

export const ANIMATIONS = ["neonScan", "swing-in-top-fwd"] as const;
export type AnimationClass = (typeof ANIMATIONS)[number];
