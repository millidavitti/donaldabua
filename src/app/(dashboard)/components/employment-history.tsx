"use client";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";
import { CirclePlus, Trash2, X } from "lucide-react";

export default function EmploymentHistory() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);

	return (
		<>
			<Flex flex='column' className=''>
				<Flex className='h-fit items-center justify-between'>
					<p className='font-semibold lg:text-2xl'>Employment History</p>
					{false ? (
						<InteractiveIcon callback={() => {}}>
							<Trash2 size={24} />
						</InteractiveIcon>
					) : (
						<InteractiveIcon
							callback={() => {
								edit_profile_setter("edit-employment-history");
							}}
						>
							<CirclePlus size={24} />
						</InteractiveIcon>
					)}
				</Flex>
			</Flex>

			<Overlay
				stateFlag='edit-employment-history'
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] max-h-[80%]'
				>
					<Flex className='justify-between items-center shrink-0'>
						<h2 className='text-2xl font-semibold'>Add Employment History</h2>
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
						{/* Company */}
						<label className='text-xl font-semibold shrink-0' htmlFor='title'>
							Company
						</label>
						<input type='text' required className='outline p-3' />

						{/* Role */}
						<label className='text-xl font-semibold shrink-0' htmlFor='title'>
							Role
						</label>
						<input type='text' required className='outline p-3' />

						{/* Duration */}
						<Flex className='gap-3'>
							{/* Month */}
							<Flex flex='column' className='grow gap-3'>
								<label
									className='text-xl font-semibold shrink-0'
									htmlFor='title'
								>
									Month
								</label>
								<input type='text' required className='outline p-3' />
							</Flex>
							{/* Year */}
							<Flex flex='column' className='grow gap-3'>
								<label
									className='text-xl font-semibold shrink-0'
									htmlFor='title'
								>
									Year
								</label>
								<input type='number' required className='outline p-3' />
							</Flex>
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
