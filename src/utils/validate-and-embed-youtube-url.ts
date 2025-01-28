export function validateAndEmbedYouTubeUrl(value: string) {
	const youtubeUrlPattern = new RegExp(
		"^(https?://)?(www.)?youtube.com(/.*)?$|^(https?://)?(www.)?youtu.be(/.*)?$",
	);
	// youtubeUrlPattern.test(value)
	// 	? youtube_url_setter((url) => ({
	// 			...url,
	// 			captured: value
	// 				.replace("youtu.be/", "youtube.com/embed/")
	// 				.replace("youtube.com/watch?v=", "youtube.com/embed/")
	// 				.replace(/\?[^=]+=([^&]+)(&[^=]+=([^&]+))*/, "")
	// 				.replace(/\?.*$/, "")
	// 				.replace(/\&.*$/, ""),
	// 	  }))
	// 	: value.length == 1
	// 	? toast.info(
	// 			"You can only paste or edit valid Youtube links. Provide a valid Youtube link to proceed.",
	// 	  )
	// 	: toast.info("You provided an invalid youtube link: " + value);

	return youtubeUrlPattern.test(value)
		? value
				.replace("youtu.be/", "youtube.com/embed/")
				.replace("youtube.com/watch?v=", "youtube.com/embed/")
				.replace(/\?[^=]+=([^&]+)(&[^=]+=([^&]+))*/, "")
				.replace(/\?.*$/, "")
				.replace(/\&.*$/, "")
		: null;
}
