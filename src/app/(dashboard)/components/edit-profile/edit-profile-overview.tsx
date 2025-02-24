import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { EditIcon, X } from "lucide-react";
import md from "md";
import parse from "html-react-parser";
import { useEditProfileOverviewInterface } from "@/hooks/interface/use-edit-profile-overview-interface";
export default function EditProfileOverview() {
	const {
		cancelOverviewEdit,
		captureOverviewEdit,
		editOverview,
		profile_overview,
		saveOverviewEdit,
	} = useEditProfileOverviewInterface();
	return (
		<>
			<Flex className='gap-3'>
				<Flex className='grow max-h-[320px]'>
					<div className='shrink-0 w-full'>{parse(md(profile_overview))}</div>
				</Flex>
				<InteractiveIcon
					callback={() => {
						editOverview();
					}}
					className='self-start'
				>
					<EditIcon size={24} />
				</InteractiveIcon>
			</Flex>
			<Overlay
				stateFlag='edit-profile-overview'
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] max-h-[80%] neonScan'
				>
					<Flex className='justify-between items-center shrink-0'>
						<h2 className='text-2xl font-semibold'>Profile overview</h2>
						<InteractiveIcon callback={() => cancelOverviewEdit()}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					<form
						className='flex flex-col gap-3'
						onSubmit={(e) => {
							e.preventDefault();
							saveOverviewEdit();
						}}
					>
						<label className='text-xl font-semibold shrink-0' htmlFor='title'>
							Your title
						</label>
						<textarea
							id='profile-overview'
							required
							rows={20}
							value={profile_overview}
							onChange={(e) => {
								captureOverviewEdit(e.target.value);
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
