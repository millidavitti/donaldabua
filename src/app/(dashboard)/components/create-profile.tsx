import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import useCreateProfileInterface from "@/hooks/interface/use-create-profile-interface";
import { CirclePlus, X } from "lucide-react";

export default function CreateProfile() {
	const {
		cancelProfileCreation,
		captureProfileTitle,
		createProfile,
		profileTitle,
		saveProfile,
	} = useCreateProfileInterface();
	return (
		<Flex className='self-start'>
			<Button type='button' onClick={createProfile}>
				<span>Create Profile</span>
				<CirclePlus size={24} />
			</Button>

			<Overlay
				stateFlag='create-profile'
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] neonScan'
				>
					<Flex className='justify-between items-center'>
						<Flex flex='column'>
							<h2 className='text-2xl font-semibold'>Add Profile Title</h2>
							<p>
								Enter a single sentence description of your professional
								skills/experience (e.g. Expert Web Designer with Ajax
								experience)
							</p>
						</Flex>
						<InteractiveIcon callback={() => cancelProfileCreation()}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					<form
						className='flex flex-col gap-3'
						onSubmit={(e) => {
							e.preventDefault();
							saveProfile();
						}}
					>
						<label className='text-xl font-semibold' htmlFor='title'>
							Your title
						</label>
						<input
							type='text'
							id='title'
							required
							value={profileTitle}
							onChange={(e) => {
								captureProfileTitle(e.target.value);
							}}
							className='outline p-3'
						/>
						<Button type='submit' className='bg-black text-light-surface'>
							Create Profile
						</Button>
					</form>
				</Flex>
			</Overlay>
		</Flex>
	);
}
