import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import useCreateProfileInterface from "@/hooks/interface/use-create-profile-interface";
import { X } from "lucide-react";
import { HashLoader } from "react-spinners";

export default function CreateProfile() {
	const {
		cancelProfileCreation,
		captureProfileTitle,
		createProfile,
		profileTitle,
		saveProfile,
		api_task,
	} = useCreateProfileInterface();
	return (
		<>
			<Button type='button' onClick={createProfile} className='self-start'>
				Create Profile
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
							Create Profile{" "}
							{api_task === "create-profile" && (
								<HashLoader size={24} color='#fff' />
							)}
						</Button>
					</form>
				</Flex>
			</Overlay>
		</>
	);
}
