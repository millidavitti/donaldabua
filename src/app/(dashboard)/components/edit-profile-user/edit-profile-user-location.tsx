import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { profile_user_location_jotai } from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useAtom } from "jotai";
import { MapPin, X } from "lucide-react";
import React from "react";

export default function EditProfileUserLocation() {
	const [edit_profile, edit_profile_setter] = useAtom(edit_profile_jotai);
	const [profile_user_location, profile_user_location_setter] = useAtom(
		profile_user_location_jotai,
	);
	return (
		<Flex className='gap-3'>
			<MapPin />
			<p
				onClick={() => edit_profile_setter("edit-location")}
				className='cursor-pointer'
			>
				{profile_user_location?.city}, {profile_user_location?.country} -{" "}
			</p>
			{/* <p>{new Date().toTimeString()}</p> */}
			<form
				className='flex left-0 bg-light-surface data-[is-visible=true]:absolute data-[is-visible=false]:hidden'
				data-is-visible={edit_profile === "edit-location"}
				onSubmit={(e) => {
					e.preventDefault();
					edit_profile_setter(null);
				}}
			>
				<Flex flex='column' className='gap-3'>
					<label htmlFor='city'>City</label>
					<input
						type='text'
						id='city'
						required
						className='outline p-3'
						value={profile_user_location?.city}
						onChange={(e) => {
							profile_user_location_setter((location) => ({
								...location!,
								city: e.target.value,
							}));
						}}
					/>
					<label htmlFor='country'>Country</label>
					<input
						type='text'
						id='country'
						required
						className='outline p-3'
						value={profile_user_location?.country}
						onChange={(e) => {
							profile_user_location_setter((location) => ({
								...location!,
								country: e.target.value,
							}));
						}}
					/>
					<button type='submit' style={{ display: "none" }}></button>
				</Flex>
				<InteractiveIcon
					callback={() => edit_profile_setter(null)}
					className='self-start'
				>
					<X className='stroke-light-error' />
				</InteractiveIcon>
			</form>
		</Flex>
	);
}
