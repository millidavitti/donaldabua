import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { profile_hourly_rate_jotai } from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useAtom, useSetAtom } from "jotai";
import { EditIcon, X } from "lucide-react";
import React from "react";

export default function EditHourlyRate() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const [profile_hourly_rate, profile_hourly_rate_setter] = useAtom(
		profile_hourly_rate_jotai,
	);
	return (
		<>
			<Flex className='h-fit items-center justify-between grow'>
				<p className='font-semibold lg:text-2xl'>${profile_hourly_rate}/hr</p>
				<InteractiveIcon
					callback={() => {
						edit_profile_setter("edit-hourly-rate");
					}}
				>
					<EditIcon size={24} />
				</InteractiveIcon>
			</Flex>
			{/* Overlays */}
			<Overlay
				stateFlag='edit-hourly-rate'
				className='flex justify-center items-center'
			>
				<Flex flex='column' className='bg-light-surface gap-3 basis-[480px]'>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Set hourly rate</h2>
						<InteractiveIcon callback={() => edit_profile_setter(null)}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					<form
						className='flex flex-col gap-3'
						onSubmit={(e) => {
							e.preventDefault();
							edit_profile_setter(null);
						}}
					>
						<label className='text-xl font-semibold' htmlFor='title'>
							Your title
						</label>
						<input
							type='number'
							id='title'
							required
							value={profile_hourly_rate || ""}
							onChange={(e) => {
								profile_hourly_rate_setter(+e.target.value);
							}}
							className='outline p-3'
						/>
						<Button type='submit' className='bg-black text-light-surface'>
							Save
						</Button>
					</form>
				</Flex>
			</Overlay>
		</>
	);
}
