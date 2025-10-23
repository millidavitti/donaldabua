import { useAtom } from "jotai";
import {
	mutate_location_atom,
	payload_view_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import { useState } from "react";
import Modal from "@/components/layouts/modal";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Button from "@/components/ui/button";
import { X } from "lucide-react";

export function useLocation() {
	const [inputLocation, setInputLocation] = useState({
		city: null,
		country: null,
	});
	const [context, setContext] = useState<"edit-location" | null>(null);
	const [payload_view] = useAtom(payload_view_atom);
	const [mutate_location] = useAtom(mutate_location_atom);
	const location = payload_view.data?.location;
	const start = () => {
		setContext("edit-location");
		document.onkeydown = (e) => {
			if (e.key === "Escape") close();
		};
	};
	const close = () => {
		setContext(null);
		setInputLocation({
			city: null,
			country: null,
		});
		document.onkeydown = null;
	};

	const save = async () => {
		await mutate_location.mutateAsync({
			city: inputLocation.city!,
			country: inputLocation.country!,
		});
		close();
	};

	const captureInput = (key: "city" | "country", value: string) => {
		setInputLocation((prev) => ({ ...prev, [key]: value }));
	};
	return {
		start,
		location,
		Modal: context && (
			<Modal close={close}>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 neonScan max-w-[480px] w-full'
				>
					<Flex className='items-center justify-between'>
						<h2 className='text-2xl font-semibold'>Location</h2>
						<InteractiveIcon callback={close}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					<form
						className='flex flex-col gap-3 bg-light-surface'
						onSubmit={(e) => {
							e.preventDefault();
							save();
						}}
					>
						<Flex flex='column' className='gap-3 p-0 border-0'>
							<label htmlFor='city'>City</label>
							<input
								type='text'
								id='city'
								required
								className='p-3 border'
								value={inputLocation?.city ?? location.city}
								onChange={(e) => captureInput("city", e.target.value)}
							/>
							<label htmlFor='country'>Country</label>
							<input
								type='text'
								id='country'
								required
								className='p-3 border'
								value={inputLocation?.country ?? location.country}
								onChange={(e) => {
									captureInput("country", e.target.value);
								}}
							/>
						</Flex>
						<Button type='submit' className='bg-black text-light-surface'>
							Save
						</Button>
					</form>
				</Flex>
			</Modal>
		),
	};
}
