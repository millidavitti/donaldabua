import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { userEditUserNameInterface } from "@/hooks/interface/user-edit-user-name-interface";
import { X } from "lucide-react";

export default function EditUserName() {
	const {
		cancelNameEdit,
		captureNameEdit,
		edit_profile,
		saveNameEdit,
		user_name,
		editName,
	} = userEditUserNameInterface();
	return (
		<>
			<h2
				className='font-bold text-4xl cursor-pointer data-[is-visible=false]:absolute data-[is-visible=true]:hidden'
				onClick={() => {
					editName();
				}}
			>
				{user_name}
			</h2>
			<Overlay
				stateFlag='edit-name'
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 neonScan max-w-[480px] w-full'
				>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Name</h2>
						<InteractiveIcon
							callback={() => {
								cancelNameEdit();
							}}
						>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					<form
						className='flex flex-col gap-3 bg-light-surface data-[is-visible=false]:hidden'
						data-is-visible={edit_profile === "edit-name"}
						onSubmit={(e) => {
							e.preventDefault();
							saveNameEdit();
						}}
					>
						<label className='text-lg font-semibold' htmlFor='title'>
							A name you want to be address with
						</label>
						<input
							type='text'
							required
							className='outline p-3'
							value={user_name}
							onChange={(e) => {
								captureNameEdit(e.target.value);
							}}
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
