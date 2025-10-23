import {
	Social,
	SocialPlatforms,
} from "@/data/dashboard/dashboard-atoms/types";
import { waitForDialog } from "@/utils/wait-for-dialog";
import { useAtom } from "jotai";
import {
	create_social_atom,
	delete_social_atom,
	input_social_atom,
	mutate_social_atom,
	payload_view_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import { Children, ReactElement, ReactNode, useState } from "react";
import Button from "@/components/ui/button";
import { HashLoader } from "react-spinners";
import SelectSocialPlatform from "@/app/(dashboard)/components/select-social-platform";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Modal from "@/components/layouts/modal";
import { X } from "lucide-react";
import { useResetAtom } from "jotai/utils";
import useDialog from "@/hooks/use-dialog";

export default function useSocials(children?: ReactNode) {
	const slots: { [key: string | "update"]: ReactElement } = {};
	const [input_social, set_input_social] = useAtom(input_social_atom);
	const reset_input_social = useResetAtom(input_social_atom);
	const { closeDialog, displayDialog } = useDialog();
	const [create_social] = useAtom(create_social_atom);
	const [payload_view] = useAtom(payload_view_atom);
	const [mutate_social] = useAtom(mutate_social_atom);
	const [delete_social] = useAtom(delete_social_atom);
	const [context, setContext] = useState<"create" | "update" | null>(null);
	const isPending = create_social.isPending || mutate_social.isPending;
	const isFetching = payload_view.isFetching;

	const close = () => {
		setContext(null);
		reset_input_social();
		document.onkeydown = null;
	};

	const start = (ctx: "create" | "update", social?: Social) => {
		setContext(ctx);
		if (ctx === "update") set_input_social(social!);
		document.onkeydown = (e) => {
			if (e.key === "Escape") close();
		};
	};

	const captureInput = (url: SocialPlatforms) => {
		set_input_social({ ...input_social, profile: url });
	};

	async function create() {
		await create_social.mutateAsync(input_social);
		setContext(null);
	}

	async function update(inputSocial: Social) {
		await mutate_social.mutateAsync(inputSocial);
		setContext(null);
	}

	async function remove(social: Social) {
		displayDialog();
		if (await new Promise(waitForDialog()))
			await delete_social.mutateAsync(social.id!);
		closeDialog();
	}

	Children.forEach(children, (child) => {
		const el = child as ReactElement;
		const props = el.props as HTMLElement;
		slots[props.slot] = el;
	});

	return {
		start,
		remove,
		socials: payload_view.data?.socials as Social[],
		isFetching,
		slots,
		Modal: context && (
			<Modal close={close}>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] max-h-[80%] neonScan'
				>
					<Flex className='items-center justify-between shrink-0'>
						<h2 className='text-2xl font-semibold'>
							{context === "create" ? "Add Socials" : "Update Socials"}
						</h2>
						<InteractiveIcon callback={() => close()}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					<form
						className='flex flex-col gap-3'
						onSubmit={(e) => {
							e.preventDefault();
							if (context === "create") create();
							else if (context === "update") update(input_social);
						}}
					>
						<SelectSocialPlatform />
						<Flex flex='column' className='gap-3'>
							<label className='text-xl font-semibold shrink-0' htmlFor='title'>
								Profile
							</label>
							<input
								type='url'
								required
								className='p-3 border'
								value={input_social.profile}
								onChange={(e) =>
									captureInput(e.target.value as SocialPlatforms)
								}
							/>
						</Flex>
						<Button type='submit' className='bg-black text-light-surface'>
							{context === "create" ? "Add Account" : "Update Account"}{" "}
							{isPending && <HashLoader color='#fff' size={24} />}
						</Button>
					</form>
				</Flex>
			</Modal>
		),
	};
}
