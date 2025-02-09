import React from "react";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { profile_user_video_jotai } from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useAtom } from "jotai";
import { CirclePlus, Trash2, X } from "lucide-react";
import Flex from "@/components/layouts/flex";
import { validateAndEmbedYouTubeUrl } from "@/utils/validate-and-embed-youtube-url";
import { toast } from "sonner";

export default function EditProfileUserVideoIntroduction() {
	const [edit_profile, edit_profile_setter] = useAtom(edit_profile_jotai);
	const [profile_user_video, profile_user_video_setter] = useAtom(
		profile_user_video_jotai,
	);
	return (
		<Flex flex='column'>
			<Flex className='h-fit items-center justify-between'>
				<p className='font-semibold lg:text-2xl'>Video Introduction</p>
				{profile_user_video ? (
					<InteractiveIcon
						callback={() => {
							profile_user_video_setter("");
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
					value={profile_user_video || ""}
					onChange={(e) => {
						const youtubeEmbed = validateAndEmbedYouTubeUrl(e.target.value);
						if (youtubeEmbed) profile_user_video_setter(youtubeEmbed);
						else
							toast.info("Provided an invalid YouTube link: " + e.target.value);
					}}
				/>
				<InteractiveIcon callback={() => edit_profile_setter(null)}>
					<X className='stroke-light-error' />
				</InteractiveIcon>
			</form>
			<iframe
				src={profile_user_video}
				data-is-visible={Boolean(profile_user_video)}
				className='data-[is-visible=false]:hidden aspect-[16/9] outline-2 outline'
			/>
		</Flex>
	);
}
