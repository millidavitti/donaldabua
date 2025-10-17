import { validateAndEmbedYouTubeUrl } from "@/utils/validate-and-embed-youtube-url";
import { useAtom } from "jotai";
import { toast } from "sonner";
import {
	mutate_user_atom,
	payload_view_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import { useState } from "react";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Modal from "@/components/layouts/modal";
import Button from "@/components/ui/button";
import { X } from "lucide-react";

export function useEditIntroVideo() {
	const [video, setVideo] = useState("");
	const [payload_view] = useAtom(payload_view_atom);
	const [mutate_user] = useAtom(mutate_user_atom);
	const [context, setContext] = useState<"add-intro-video" | null>(null);

	const start = () => {
		setContext("add-intro-video");
		document.onkeydown = (e) => {
			if (e.key === "Escape") close();
		};
	};
	function close() {
		setContext(null);
		document.onkeydown = null;
	}

	async function save() {
		await mutate_user.mutateAsync({ video });
		close();
	}

	async function remove() {
		await mutate_user.mutateAsync({ video: null });
	}

	function captureInput(url: string) {
		const youtubeEmbed = validateAndEmbedYouTubeUrl(url);
		if (youtubeEmbed) setVideo(youtubeEmbed);
		else toast.info("Provide a valid YouTube link: " + url);
	}

	return {
		video: payload_view.data?.user.video || "",
		start,
		remove,
		Modal: context && (
			<Modal>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 neonScan max-w-[480px] w-full'
				>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Video</h2>
						<InteractiveIcon
							callback={() => {
								close();
							}}
						>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					<form
						className='flex flex-col gap-3 bg-light-surface'
						onSubmit={(e) => {
							e.preventDefault();
							save();
						}}
					>
						<label className='text-lg font-semibold' htmlFor='title'>
							Please provide a YouTube link for your video introduction
						</label>
						<input
							type='url'
							className='border p-3 grow'
							defaultValue={video}
							onChange={(e) => {
								captureInput(e.target.value);
							}}
						/>
						<Button type='submit' className='bg-black text-light-surface'>
							Save
						</Button>
					</form>
				</Flex>
			</Modal>
		),
	};
}
