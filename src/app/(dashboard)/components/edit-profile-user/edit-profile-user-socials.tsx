"use client";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { dashboard_view_jotai } from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";
import { CirclePlus, X } from "lucide-react";

export default function EditProfileUserSocials() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);

	return (
		<>
			<Flex flex='column' className='grow'>
				<Flex className='h-fit items-center justify-between'>
					<p className='font-semibold lg:text-2xl'>Socials</p>
					<InteractiveIcon
						callback={() => {
							dashboard_view_setter("edit-socials");
						}}
					>
						<CirclePlus size={24} />
					</InteractiveIcon>
				</Flex>
				{/* Added Socials */}
			</Flex>
			<Overlay
				stateFlag='edit-socials'
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] max-h-[80%] neonScan'
				>
					<Flex className='justify-between items-center shrink-0'>
						<h2 className='text-2xl font-semibold'>Add Socials</h2>
						<InteractiveIcon callback={() => dashboard_view_setter(null)}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					{/* Form */}
					<form
						className='flex flex-col gap-3'
						onSubmit={(e) => {
							e.preventDefault();
							dashboard_view_setter(null);
						}}
					>
						<Flex flex='column' className='gap-3'>
							<label className='text-xl font-semibold shrink-0' htmlFor='title'>
								Platform
							</label>
							<input type='text' required className='outline p-3' />
						</Flex>
						<Flex flex='column' className='gap-3'>
							<label className='text-xl font-semibold shrink-0' htmlFor='title'>
								Link
							</label>
							<input type='url' required className='outline p-3' />
						</Flex>
						<Button type='submit' className='bg-black text-light-surface'>
							Save
						</Button>
					</form>
				</Flex>
			</Overlay>
		</>
	);
}
