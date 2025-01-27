import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { profile_jotai } from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useAtom, useAtomValue } from "jotai";
import { MapPin, X } from "lucide-react";
import React from "react";

export default function EditProfileLocation() {
	const [edit_profile, edit_profile_setter] = useAtom(edit_profile_jotai);
	const profile = useAtomValue(profile_jotai);
	return (
		<Flex>
			<MapPin />
			<p
				onClick={() => edit_profile_setter("edit-location")}
				className='cursor-pointer'
			>
				{profile.location.city}, {profile.location.country} -{" "}
			</p>
			{/* <p>{new Date().toTimeString()}</p> */}
			<form
				className='flex left-0 bg-white data-[is-visible=true]:absolute data-[is-visible=false]:hidden'
				data-is-visible={edit_profile === "edit-location"}
				onSubmit={(e) => {
					e.preventDefault();
					edit_profile_setter(null);
				}}
			>
				<Flex flex='column' className='gap-3'>
					<label htmlFor='city'>City</label>
					<input type='text' id='city' required className='outline p-3' />
					<label htmlFor='country'>Country</label>
					<input type='text' id='country' required className='outline p-3' />
				</Flex>
				<InteractiveIcon callback={() => edit_profile_setter(null)}>
					<X className='stroke-light-error' />
				</InteractiveIcon>
			</form>
		</Flex>
	);
}
