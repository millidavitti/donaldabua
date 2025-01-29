import React from "react";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { profile_video_jotai } from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useAtom } from "jotai";
import { CirclePlus, Trash2, X } from "lucide-react";
import Flex from "@/components/layouts/flex";
import { validateAndEmbedYouTubeUrl } from "@/utils/validate-and-embed-youtube-url";
import { toast } from "sonner";

export default function VideoIntroduction() {
	const [edit_profile, edit_profile_setter] = useAtom(edit_profile_jotai);
	const [profile_video, profile_video_setter] = useAtom(profile_video_jotai);
	return (
		<Flex flex='column'>
			<Flex className='h-fit items-center justify-between'>
				<p className='font-semibold lg:text-2xl'>Video Introduction</p>
				{profile_video ? (
					<InteractiveIcon
						callback={() => {
							profile_video_setter(undefined);
						}}
					>
						<Trash2 size={24} />
					</InteractiveIcon>
				) : (
					<InteractiveIcon
						callback={() => {
							edit_profile_setter("edit-video");
						}}
					>
						<CirclePlus size={24} />
					</InteractiveIcon>
				)}
			</Flex>
			<form
				className='flex outline bg-light-surface data-[is-visible=false]:hidden'
				data-is-visible={edit_profile === "edit-video"}
				onSubmit={(e) => {
					e.preventDefault();
					edit_profile_setter(null);
				}}
			>
				<input
					type='text'
					required
					className='outline-none p-3 grow'
					value={profile_video || ""}
					onChange={(e) => {
						const youtubeEmbed = validateAndEmbedYouTubeUrl(e.target.value);
						if (youtubeEmbed) profile_video_setter(youtubeEmbed);
						else
							toast.info("Provided an invalid YouTube link: " + e.target.value);
					}}
				/>
				<InteractiveIcon callback={() => edit_profile_setter(null)}>
					<X className='stroke-light-error' />
				</InteractiveIcon>
			</form>
			<iframe
				src={profile_video}
				data-is-visible={Boolean(profile_video)}
				className='data-[is-visible=false]:hidden aspect-[16/9] outline-2 outline'
			/>
		</Flex>
	);
}
