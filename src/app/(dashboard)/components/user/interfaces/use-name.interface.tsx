import { useAtom } from "jotai";
import {
	mutate_user_atom,
	payload_view_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import { useState } from "react";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Modal from "@/components/layouts/modal";
import Button from "@/components/ui/button";
import { X } from "lucide-react";

export function useName() {
	const [inputName, setInputName] = useState<string | null>(null);
	const [mutate_user] = useAtom(mutate_user_atom);
	const [payload_view] = useAtom(payload_view_atom);
	const [context, setContext] = useState<"edit-name" | null>(null);
	const isPending = mutate_user.isPending;
	function edit() {
		setContext("edit-name");
		document.onkeydown = (e) => {
			if (e.key == "Escape") close();
		};
	}
	function close() {
		setContext(null);
		setInputName(null);
		document.onkeydown = null;
	}

	async function save() {
		await mutate_user.mutateAsync({ name: inputName! });
		close();
	}

	function captureInput(name: string) {
		setInputName(name);
	}
	return {
		name: payload_view.data?.user.name,
		edit,
		Modal: context && (
			<Modal close={close}>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 neonScan max-w-[480px] w-full'
				>
					<Flex className='items-center justify-between'>
						<h2 className='text-2xl font-semibold'>Name</h2>
						<InteractiveIcon
							callback={() => {
								close();
							}}
						>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					<form
						className='flex flex-col gap-3 bg-light-surface data-[is-visible=false]:hidden'
						onSubmit={(e) => {
							e.preventDefault();
							save();
						}}
					>
						<label className='text-lg font-semibold' htmlFor='title'>
							A name you want to be address with
						</label>
						<input
							type='text'
							required
							className='p-3 border'
							value={inputName ?? payload_view.data?.user.name}
							onChange={(e) => {
								captureInput(e.target.value);
							}}
						/>
						<Button
							type='submit'
							className='bg-black text-light-surface'
							disabled={isPending}
						>
							Save
						</Button>
					</form>
				</Flex>
			</Modal>
		),
	};
}
