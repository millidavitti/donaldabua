import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { profile_hours_per_week_jotai } from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useAtom, useSetAtom } from "jotai";
import { EditIcon, X } from "lucide-react";
import React from "react";

export default function EditAvailability() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const [profile_hours_per_week, profile_hours_per_week_setter] = useAtom(
		profile_hours_per_week_jotai,
	);

	return (
		<>
			<Flex flex='column' className='gap-3'>
				<Flex className='h-fit items-center justify-between'>
					<p className='font-semibold lg:text-2xl'>Hours Per Week</p>
					<InteractiveIcon
						callback={() => {
							edit_profile_setter("edit-hours-per-week");
						}}
					>
						<EditIcon size={24} />
					</InteractiveIcon>
				</Flex>
				<Flex>
					<p className='lg:text-xl text-sm'>{profile_hours_per_week}</p>
				</Flex>
			</Flex>
			<Overlay
				stateFlag='edit-hours-per-week'
				className='flex justify-center items-center'
			>
				<Flex flex='column' className='bg-light-surface gap-3'>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Availability</h2>
						<InteractiveIcon callback={() => edit_profile_setter(null)}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>
					<Flex flex='column'>
						<h3 className='text-xl font-semibold'>Hours per week</h3>
						<p>Let your leads know how much you can work.</p>
					</Flex>
					<form
						className='flex flex-col'
						onSubmit={(e) => {
							e.preventDefault();
							edit_profile_setter(null);
						}}
					>
						{/* Availability Options */}
						<Flex flex='column' className='gap-3'>
							{availabilityOptions.map((option) => (
								<Flex className='gap-3' key={option}>
									<input
										type='radio'
										id={option}
										name='availability'
										value={option}
										required
										checked={profile_hours_per_week === option}
										onChange={(e) =>
											profile_hours_per_week_setter(e.target.value)
										}
									/>
									<label htmlFor={option}>{option}</label>
								</Flex>
							))}
							<Button type='submit' className='bg-black text-light-surface'>
								Save
							</Button>
						</Flex>
					</form>
				</Flex>
			</Overlay>
		</>
	);
}

const availabilityOptions = [
	"More than 30 hrs/week",
	"Less than 30 hrs/week",
	"As needed - open to offers",
	"None",
];
