"use client";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useSetAtom } from "jotai";
import { EditIcon, X } from "lucide-react";
import { useState } from "react";
import TechStack from "../tech-stack";

export default function EditProfileTechStack() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const [tech, setTech] = useState("");
	return (
		<>
			<Flex flex='column' className='grow gap-3 shrink-0 max-h-[480px]'>
				{/* Header */}
				<Flex className='justify-between items-center shrink-0'>
					<h2 className='lg:text-2xl font-semibold'>Tech Stack</h2>
					<InteractiveIcon
						callback={() => {
							edit_profile_setter("edit-tech-stack");
						}}
					>
						<EditIcon size={24} />
					</InteractiveIcon>
				</Flex>
				{/* Stack */}
				<TechStack />
			</Flex>

			<Overlay
				stateFlag='edit-tech-stack'
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] max-h-[80%] neonScan'
				>
					<Flex className='justify-between items-center shrink-0'>
						<h2 className='text-xl font-semibold'>Edit Tech Stack</h2>
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
						<label
							className='text-xl font-semibold shrink-0'
							htmlFor='tech-stack'
						>
							Tech
						</label>
						<Flex flex='column' className='gap-3'>
							<TechStack />
							<input
								id='tech-stack'
								required
								value={tech}
								onChange={(e) => {
									setTech(e.target.value);
								}}
								className='outline p-3'
							/>
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
