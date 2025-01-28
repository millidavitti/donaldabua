import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { profile_title_jotai } from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useSetAtom, useAtom } from "jotai";
import { EditIcon, X } from "lucide-react";

export default function EditTitle() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const [profile_title, profile_title_setter] = useAtom(profile_title_jotai);
	return (
		<>
			<Flex className='h-fit items-center justify-between'>
				<p className='font-semibold text-2xl'>{profile_title}</p>
				<InteractiveIcon
					callback={() => {
						edit_profile_setter("edit-title");
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
				<Flex flex='column' className='bg-light-surface gap-3 basis-[720px]'>
					<Flex className='justify-between items-center'>
						<Flex flex='column'>
							<h2 className='text-3xl font-semibold'>Edit your title</h2>
							<p>
								Enter a single sentence description of your professional
								skills/experience (e.g. Expert Web Designer with Ajax
								experience)
							</p>
						</Flex>
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
						<label className='text-2xl font-semibold' htmlFor='title'>
							Your title
						</label>
						<input
							type='text'
							id='title'
							required
							value={profile_title}
							onChange={(e) => {
								profile_title_setter(e.target.value);
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
