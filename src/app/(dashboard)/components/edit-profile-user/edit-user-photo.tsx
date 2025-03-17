import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { useEditUserPhotoInterface } from "@/hooks/interface/dashboard/use-edit-user-photo-interface";
import { X } from "lucide-react";
import Image from "next/image";

export default function EditUserPhoto() {
	const {
		edit_profile,
		user_image,
		cancelPhotoEdit,
		capturePhotoEdit,
		editPhoto,
		savePhotoEdit,
	} = useEditUserPhotoInterface();
	return (
		<Flex
			flex='column'
			className='relative overflow-visible z-10 mx-auto lg:mx-0'
		>
			<Flex
				className='rounded-full shrink-0 p-0 h-24 w-24 cursor-pointer active:scale-[.99] overflow-clip'
				htmlProps={{
					onClick() {
						editPhoto();
					},
				}}
			>
				{Boolean(user_image) && (
					<Image
						src={user_image}
						width={1000}
						height={1000}
						alt='donald'
						className='object-cover'
					/>
				)}
			</Flex>
			{/* Edit Profile Photo */}

			<Overlay
				stateFlag='edit-image'
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 neonScan max-w-[480px] w-full'
				>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Photo</h2>
						<InteractiveIcon
							callback={() => {
								cancelPhotoEdit();
							}}
						>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					<form
						className='flex flex-col gap-3 bg-light-surface data-[is-visible=false]:hidden'
						data-is-visible={edit_profile === "edit-image"}
						onSubmit={(e) => {
							e.preventDefault();
							savePhotoEdit();
						}}
					>
						<label className='text-lg font-semibold' htmlFor='title'>
							Provide a link to the to an image of yourself
						</label>
						<input
							type='url'
							required
							className='p-3 outline w-full'
							value={user_image}
							onChange={(e) => {
								capturePhotoEdit(e.target.value);
							}}
						/>
						<Button type='submit' className='bg-black text-light-surface'>
							Save
						</Button>
					</form>
				</Flex>
			</Overlay>
		</Flex>
	);
}
