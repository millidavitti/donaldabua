import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useAtom } from "jotai";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function EditProfilePhoto() {
	const [edit_profile, edit_profile_setter] = useAtom(edit_profile_jotai);

	return (
		<Flex flex='column' className='relative overflow-visible z-10'>
			<Flex
				className='rounded-full shrink-0 p-0 h-24 w-24 cursor-pointer active:scale-[.99] overflow-clip'
				htmlProps={{
					onClick() {
						edit_profile_setter(
							edit_profile === "edit-image" ? null : "edit-image",
						);
					},
				}}
			>
				<Image src='/stud.jpg' width={1000} height={1000} alt='donald' />
			</Flex>
			{/* Edit Profile Photo */}
			<form
				className='outline bg-white flex data-[is-visible=true]:absolute data-[is-visible=false]:hidden'
				data-is-visible={edit_profile === "edit-image"}
				onSubmit={(e) => {
					e.preventDefault();
					edit_profile_setter(null);
				}}
			>
				<input type='url' required className='p-3 outline-none' />
				<InteractiveIcon callback={() => edit_profile_setter(null)}>
					<X className='stroke-light-error' />
				</InteractiveIcon>
			</form>
		</Flex>
	);
}
