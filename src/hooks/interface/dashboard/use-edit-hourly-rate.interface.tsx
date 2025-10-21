import { useAtom, useAtomValue } from "jotai";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Modal from "@/components/layouts/modal";
import Button from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

import {
	mutate_profile_atom,
	profile_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import { HashLoader } from "react-spinners";

export function useHourlyRate() {
	const [inputHourlyRate, setInputHourlyRate] = useState<number | null>(null);
	const profile = useAtomValue(profile_atom);
	const [mutate_profile] = useAtom(mutate_profile_atom);
	const isPending = mutate_profile.isPending;
	const [context, setContext] = useState<"update-hourly-rate" | null>(null);
	const hourlyRate = profile?.hourlyRate;

	const start = () => {
		setContext("update-hourly-rate");
		document.onkeydown = (e) => {
			if (e.key === "Escape") close();
		};
	};

	const close = () => {
		setContext(null);
		setInputHourlyRate(null);
		document.onkeydown = null;
	};

	async function update(hourlyRate: number) {
		await mutate_profile.mutateAsync({ id: profile.id, hourlyRate });
		close();
	}

	const captureInput = (hourlyRate: number) => {
		setInputHourlyRate(hourlyRate);
	};

	return {
		start,
		hourlyRate: profile?.hourlyRate,
		Modal: context && (
			<Modal>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[480px] neonScan'
				>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Set hourly rate</h2>
						<InteractiveIcon callback={() => close()}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					<form
						className='flex flex-col gap-3'
						onSubmit={(e) => {
							e.preventDefault();
							update(inputHourlyRate!);
						}}
					>
						<label className='text-xl font-semibold' htmlFor='title'>
							Your title
						</label>
						<input
							type='number'
							id='title'
							required
							value={inputHourlyRate ?? hourlyRate}
							onChange={(e) => {
								captureInput(+e.target.value);
							}}
							className='border p-3'
						/>
						<Button type='submit' className='bg-black text-light-surface'>
							Save {isPending && <HashLoader color='#fff' size={24} />}
						</Button>
					</form>
				</Flex>
			</Modal>
		),
	};
}
