"use client";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { EditIcon, X } from "lucide-react";
import ProfileTechnology from "../profile-technology";
import AddProfileTechnologies from "../add-profile-technologies";
import useEditProfileTechnologiesInterface from "@/hooks/interface/dashboard/use-edit-profile-technologies-interface";
import { HashLoader } from "react-spinners";

export default function EditProfileTechnologies() {
	const {
		cancelTechnologiesEdit,
		editTechnologies,
		profile_technologies_snapshot,
		saveTechnologiesEdit,
		api_task,
	} = useEditProfileTechnologiesInterface();
	return (
		<>
			<Flex
				flex='column'
				className='grow gap-3 shrink-0 max-h-[480px] border-0 p-0'
			>
				{/* Header */}
				<Flex className='justify-between items-center shrink-0'>
					<h2 className='lg:text-2xl font-semibold'>Profile Technologies</h2>
					<InteractiveIcon
						callback={() => {
							editTechnologies();
						}}
					>
						<EditIcon size={24} />
					</InteractiveIcon>
				</Flex>
				{/* Stack */}

				{Boolean(profile_technologies_snapshot.length) && (
					<Flex className='gap-3 flex-wrap shrink-0'>
						{profile_technologies_snapshot.map((technology, i) => (
							<ProfileTechnology
								tech={technology}
								key={technology.id}
								index={i}
							/>
						))}
					</Flex>
				)}
			</Flex>

			<Overlay
				stateFlag='edit-profile-technologies'
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] max-h-[80%] neonScan transition'
				>
					<Flex className='justify-between items-center shrink-0'>
						<h2 className='text-xl font-semibold'>Edit Profile Technologies</h2>
						<InteractiveIcon
							callback={() => {
								cancelTechnologiesEdit();
							}}
						>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					<form
						className='flex flex-col gap-3'
						onSubmit={(e) => {
							e.preventDefault();
							saveTechnologiesEdit();
						}}
					>
						<label
							className='text-xl font-semibold shrink-0'
							htmlFor='tech-stack'
						>
							Technology
						</label>
						<Flex flex='column' className='gap-3 border-0 p-0'>
							{/* <AddProfileTechnologies /> */}
						</Flex>
						<Button type='submit' className='bg-black text-light-surface'>
							Save
							{api_task === "save-technologies-edit" && (
								<HashLoader color='#ffffff' size={24} />
							)}
						</Button>
					</form>
				</Flex>
			</Overlay>
		</>
	);
}
