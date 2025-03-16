export function validateAndEmbedYouTubeUrl(value: string) {
	const youtubeUrlPattern = new RegExp(
		"^(https?://)?(www.)?youtube.com(/.*)?$|^(https?://)?(www.)?youtu.be(/.*)?$",
	);

	return youtubeUrlPattern.test(value)
		? value
				.replace("youtu.be/", "youtube.com/embed/")
				.replace("youtube.com/watch?v=", "youtube.com/embed/")
				.replace(/\?[^=]+=([^&]+)(&[^=]+=([^&]+))*/, "")
				.replace(/\?.*$/, "")
				.replace(/\&.*$/, "")
		: null;
}
