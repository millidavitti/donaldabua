import InteractiveIcon from "@/components/layouts/interactive_icon";
import { profile_name_jotai } from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useAtom } from "jotai";
import { X } from "lucide-react";
import React from "react";

export default function EditProfileName() {
	const [edit_profile, edit_profile_setter] = useAtom(edit_profile_jotai);
	const [profile_name, profile_name_setter] = useAtom(profile_name_jotai);

	return (
		<>
			<h2
				className='font-bold text-4xl cursor-pointer data-[is-visible=false]:absolute data-[is-visible=true]:hidden'
				onClick={() => {
					edit_profile_setter(
						edit_profile === "edit-name" ? null : "edit-name",
					);
				}}
			>
				{profile_name}
			</h2>
			<form
				className='flex outline bg-light-surface data-[is-visible=true]:absolute data-[is-visible=false]:hidden'
				data-is-visible={edit_profile === "edit-name"}
				onSubmit={(e) => {
					e.preventDefault();
					edit_profile_setter(null);
				}}
			>
				<input
					type='text'
					required
					className='outline-none p-3'
					value={profile_name}
					onChange={(e) => {
						profile_name_setter(e.target.value);
					}}
				/>
				<InteractiveIcon callback={() => edit_profile_setter(null)}>
					<X className='stroke-light-error' />
				</InteractiveIcon>
			</form>
		</>
	);
}
