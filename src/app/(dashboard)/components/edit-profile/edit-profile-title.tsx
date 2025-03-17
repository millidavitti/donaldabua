import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { useEditProfileTitleInterface } from "@/hooks/interface/dashboard-interface/use-edit-profile-title-interface";
import { EditIcon, X } from "lucide-react";

export default function EditProfileTitle() {
	const {
		cancelTitleEdit,
		captureTitleEdit,
		editTitle,
		profile_title,
		saveTitleEdit,
	} = useEditProfileTitleInterface();
	return (
		<>
			<Flex className='h-fit items-center justify-between grow'>
				<p className='font-semibold lg:text-2xl'>{profile_title}</p>
				<InteractiveIcon
					callback={() => {
						editTitle();
					}}
				>
					<EditIcon size={24} />
				</InteractiveIcon>
			</Flex>
			{/* Overlays */}
			<Overlay
				stateFlag='edit-title'
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] neonScan'
				>
					<Flex className='justify-between items-center'>
						<Flex flex='column'>
							<h2 className='text-2xl font-semibold'>Edit your title</h2>
							<p>
								Enter a single sentence description of your professional
								skills/experience (e.g. Expert Web Designer with Ajax
								experience)
							</p>
						</Flex>
						<InteractiveIcon callback={() => cancelTitleEdit()}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					<form
						className='flex flex-col gap-3'
						onSubmit={(e) => {
							e.preventDefault();
							saveTitleEdit();
						}}
					>
						<label className='text-xl font-semibold' htmlFor='title'>
							Your title
						</label>
						<input
							type='text'
							id='title'
							required
							value={profile_title}
							onChange={(e) => {
								captureTitleEdit(e.target.value);
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
