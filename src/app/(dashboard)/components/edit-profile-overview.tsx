import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { profile_overview_jotai } from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useAtom, useSetAtom } from "jotai";
import { EditIcon, X } from "lucide-react";

export default function EditProfileOverview() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const [profile_overview, profile_overview_setter] = useAtom(
		profile_overview_jotai,
	);
	return (
		<>
			<Flex>
				<Flex className='grow max-h-[320px]'>
					<p>{profile_overview}</p>
				</Flex>
				<InteractiveIcon
					callback={() => {
						edit_profile_setter("edit-profile-overview");
					}}
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
					className='bg-light-surface gap-3 basis-[720px] max-h-[80%]'
				>
					<Flex className='justify-between items-center shrink-0'>
						<h2 className='text-2xl font-semibold'>Profile overview</h2>
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
						<label className='text-xl font-semibold shrink-0' htmlFor='title'>
							Your title
						</label>
						<textarea
							id='profile-overview'
							required
							rows={20}
							value={profile_overview}
							onChange={(e) => {
								profile_overview_setter(e.target.value);
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
