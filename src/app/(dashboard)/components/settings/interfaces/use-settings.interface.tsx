import ManageTechnologies from "@/app/(dashboard)/components/settings/views/manage-technologies";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Modal from "@/components/layouts/modal";
import Button from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HashLoader } from "react-spinners";

export default function useSettings() {
	const [isSigningOut, setIsSigingOut] = useState(false);
	const router = useRouter();
	const [context, setContext] = useState<"settings" | null>(null);
	const [settings, setSettings] = useState<"manage-technologies" | null>(null);

	function view() {
		setContext("settings");
		document.onkeydown = (e) => {
			if (e.key === "Escape") close();
		};
	}
	function close() {
		setContext(null);
		setSettings(null);
		document.onkeydown = null;
	}

	function manageTechnologies() {
		setSettings("manage-technologies");
	}

	async function signOut() {
		setIsSigingOut(true);
		router.replace("/auth/api/sign-out");
	}
	return {
		view,
		Modal: context && (
			<Modal close={close}>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] neonScan'
				>
					<Flex className='justify-between items-center shrink-0'>
						<h2 className='text-2xl font-semibold'>Settings</h2>
						<InteractiveIcon callback={close}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>
					<Flex flex='column' className='gap-3 border-0 p-0'>
						<Button type='button' onClick={manageTechnologies}>
							Manage Technologies
						</Button>
						<Button
							type='button'
							onClick={signOut}
							className='bg-black text-light-surface'
						>
							Sign Out{" "}
							{isSigningOut && <HashLoader size={24} color='#ffffff' />}
						</Button>
					</Flex>
				</Flex>

				{settings === "manage-technologies" && (
					<ManageTechnologies close={close} />
				)}
			</Modal>
		),
	};
}
