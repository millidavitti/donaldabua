import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Modal from "@/components/layouts/modal";
import Button from "@/components/ui/button";
import { input_project_content_atom } from "@/data/data";
import { content_hover_state_jotai } from "@/data/dashboard/dashboard-atoms/dashboard-ui-state";
import { validateAndEmbedYouTubeUrl } from "@/utils/validate-and-embed-youtube-url";
import { createId } from "@paralleldrive/cuid2";
import { useSetAtom } from "jotai";
import { X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function useDraftVideo() {
	const [url, setUrl] = useState("");
	const set_content_hover_state = useSetAtom(content_hover_state_jotai);
	const set_input_project_content = useSetAtom(input_project_content_atom);
	const [context, setContext] = useState<"add-project-video" | null>(null);
	const start = () => {
		setContext("add-project-video");
	};
	const add = (url: string) => {
		set_input_project_content((content) => [
			...content,
			{
				id: createId(),
				url,
				position: content.length,
				type: "video",
			},
		]);
		close();
	};
	const close = () => {
		setUrl("");
		setContext(null);
	};
	return {
		start,
		set_content_hover_state,
		Modal: context && (
			<Modal close={close}>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] neonScan'
				>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Link to a Video</h2>
						<InteractiveIcon callback={close}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>
					{/* Nested Form */}
					<Flex flex='column' className='gap-3'>
						<label className='text-xl font-semibold' htmlFor='title'>
							Paste a link to your YouTube
						</label>

						<input
							type='url'
							id='add-portfolio-project-video'
							required
							value={url}
							onChange={(e) => {
								const youtubeEmbed = validateAndEmbedYouTubeUrl(e.target.value);
								if (youtubeEmbed) setUrl(youtubeEmbed);
								else
									toast.info(
										"Provided an invalid YouTube link: " + e.target.value,
									);
							}}
							className='border p-3'
						/>

						{url && (
							<iframe
								src={url}
								className='aspect-[16/9] outline-2 outline neonScan'
								loading='lazy'
							/>
						)}
						<Button
							className='bg-black text-light-surface'
							onClick={() => {
								const formElement = document.querySelector(
									"#add-portfolio-project-video",
								);
								if ((formElement as HTMLInputElement).validity.valid) add(url);
							}}
						>
							Add
						</Button>
					</Flex>
				</Flex>
			</Modal>
		),
	};
}
