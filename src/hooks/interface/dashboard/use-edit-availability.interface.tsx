import { Availability } from "@/data/dashboard/dashboard-atoms/types";
import { useAtom, useAtomValue } from "jotai";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Modal from "@/components/layouts/modal";
import Button from "@/components/ui/button";
import { AVAILABILITY_OPTIONS } from "@/data/home/home-constants";
import { X } from "lucide-react";
import { useState } from "react";
import {
	mutate_profile_atom,
	profile_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import { HashLoader } from "react-spinners";

export function useAvailability() {
	const profile = useAtomValue(profile_atom);
	const availability = profile?.availability;
	const [inputAvailability, setInputAvailability] =
		useState<Availability>(availability);
	const [mutate_profile] = useAtom(mutate_profile_atom);
	const isPending = mutate_profile.isPending;
	const [context, setContext] = useState<"update" | null>(null);

	function start() {
		setContext("update");
		document.onkeydown = (e) => {
			if (e.key === "Escape") close();
		};
	}
	function close() {
		setContext(null);
		document.onkeydown = null;
	}
	function captureInput(availability: Availability) {
		setInputAvailability(availability);
	}

	async function update(availability: Availability) {
		await mutate_profile.mutateAsync({ id: profile.id, availability });
		close();
	}

	return {
		start,
		availability,
		Modal: context && (
			<Modal>
				<Flex flex='column' className='bg-light-surface gap-3 neonScan'>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Availability</h2>
						<InteractiveIcon callback={() => close()}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>
					<Flex flex='column'>
						<h3 className='text-xl font-semibold'>Hours per week</h3>
						<p>Let your leads know how much you can work.</p>
					</Flex>
					<form
						className='flex flex-col'
						onSubmit={(e) => {
							e.preventDefault();
							update(inputAvailability!);
						}}
					>
						{/* Availability */}
						<Flex flex='column' className='gap-3'>
							{AVAILABILITY_OPTIONS.map((option) => (
								<Flex className='gap-3 py-0' key={option}>
									<input
										type='radio'
										id={option}
										name='availability'
										value={option}
										required
										checked={inputAvailability === option}
										onChange={(e) =>
											captureInput(e.target.value as Availability)
										}
									/>
									<label
										htmlFor={option}
										className='w-full h-full py-3 cursor-pointer'
									>
										{option}
									</label>
								</Flex>
							))}
							<Button type='submit' className='bg-black text-light-surface'>
								Save {isPending && <HashLoader color='#fff' size={24} />}
							</Button>
						</Flex>
					</form>
				</Flex>
			</Modal>
		),
	};
}
