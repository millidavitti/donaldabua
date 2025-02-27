"use client";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useAtomValue, useSetAtom } from "jotai";
import { EditIcon, X } from "lucide-react";
import ProfileTechnologies from "../profile-technologies";
import AddProfileTechnologies from "../add-profile-technologies";
import { profile_technologies_jotai } from "@/data/atoms/app_data";

export default function EditProfileTechnologies() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const profile_technologies = useAtomValue(profile_technologies_jotai);
	return (
		<>
			<Flex flex='column' className='grow gap-3 shrink-0 max-h-[480px]'>
				{/* Header */}
				<Flex className='justify-between items-center shrink-0'>
					<h2 className='lg:text-2xl font-semibold'>Technologies</h2>
					<InteractiveIcon
						callback={() => {
							edit_profile_setter("edit-tech-stack");
						}}
					>
						<EditIcon size={24} />
					</InteractiveIcon>
				</Flex>
				{/* Stack */}

				<Flex className='gap-3 flex-wrap shrink-0 grow'>
					{profile_technologies.map((technology) => (
						<ProfileTechnologies tech={technology} key={technology.id} />
					))}
				</Flex>
			</Flex>

			<Overlay
				stateFlag='edit-tech-stack'
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] max-h-[80%] neonScan transition'
				>
					<Flex className='justify-between items-center shrink-0'>
						<h2 className='text-xl font-semibold'>Edit Profile Technologies</h2>
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
						<label
							className='text-xl font-semibold shrink-0'
							htmlFor='tech-stack'
						>
							Tech
						</label>
						<Flex flex='column' className='gap-3'>
							<AddProfileTechnologies />
						</Flex>
						<Button type='submit' className='bg-black text-light-surface'>
							Save
						</Button>
					</form>
				</Flex>
			</Overlay>
		</>
	);
}
