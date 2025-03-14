import InteractiveIcon from "@/components/layouts/interactive_icon";
import { X } from "lucide-react";
import Flex from "@/components/layouts/flex";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import DeleteUserVideoOption from "./delete-user-video-option";
import AddUserVideoOption from "./add-user-video-option";
import { useEditUserVideoInterface } from "@/hooks/interface/use-edit-user-video-interface";

export default function EditUserVideo() {
	const { cancelVideoEdit, captureVideoEdit, saveVideoEdit, user_video } =
		useEditUserVideoInterface();
	return (
		<Flex flex='column' className='h-[258px]'>
			<Flex className='h-fit items-center justify-between'>
				<p className='font-semibold lg:text-2xl'>Video Introduction</p>
				{user_video ? <DeleteUserVideoOption /> : <AddUserVideoOption />}
			</Flex>
			{Boolean(user_video) && (
				<iframe
					src={user_video!}
					data-is-visible={Boolean(user_video)}
					className='data-[is-visible=false]:hidden aspect-[16/9] outline-2 outline'
					loading='lazy'
				/>
			)}
			<Overlay
				stateFlag='edit-video'
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 neonScan max-w-[480px] w-full'
				>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Video</h2>
						<InteractiveIcon
							callback={() => {
								cancelVideoEdit();
							}}
						>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					<form
						className='flex flex-col gap-3 bg-light-surface'
						onSubmit={(e) => {
							e.preventDefault();
							saveVideoEdit();
						}}
					>
						<label className='text-lg font-semibold' htmlFor='title'>
							Please provide a YouTube link for your video introduction
						</label>
						<input
							type='text'
							className='outline p-3 grow'
							value={user_video || ""}
							onChange={(e) => {
								captureVideoEdit(e.target.value);
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
