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

export function useEditProfileOverview() {
	const [inputOverview, setInputOverview] = useState<string | null>(null);
	const profile = useAtomValue(profile_atom);
	const overview = profile?.overview ?? "";
	const [mutate_profile] = useAtom(mutate_profile_atom);
	const isPending = mutate_profile.isPending;
	const [context, setContext] = useState<"update" | null>(null);

	const start = () => {
		setContext("update");
		document.onkeydown = (e) => {
			if (e.key === "Escape") close();
		};
	};

	const close = () => {
		setContext(null);
		setInputOverview(null);
		document.onkeydown = null;
	};

	async function update(overview: string) {
		await mutate_profile.mutateAsync({ id: profile.id, overview });
		close();
	}

	const captureInput = (overview: string) => {
		setInputOverview(overview);
	};
	return {
		start,
		overview,
		Modal: context && (
			<Modal>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] max-h-[80%] neonScan'
				>
					<Flex className='justify-between items-center shrink-0'>
						<h2 className='text-2xl font-semibold'>Profile Overview</h2>
						<InteractiveIcon callback={close}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					<form
						className='flex flex-col gap-3'
						onSubmit={(e) => {
							e.preventDefault();
							update(inputOverview!);
						}}
					>
						<textarea
							id='profile-overview'
							required
							rows={20}
							value={inputOverview ?? overview}
							onChange={(e) => {
								captureInput(e.target.value);
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
