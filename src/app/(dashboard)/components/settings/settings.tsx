"use client";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import { SettingsIcon, X } from "lucide-react";
import Button from "@/components/ui/button";
import SettingsView from "./settings-view";
import { HashLoader } from "react-spinners";
import useSettingsInterface from "@/hooks/interface/dashboard/use-settings-interface";

export default function Settings() {
	const { api_task, close, display, manageTechnologies, signOut } =
		useSettingsInterface();
	return (
		<>
			<InteractiveIcon callback={() => display()}>
				<SettingsIcon />
			</InteractiveIcon>
			<Overlay stateFlag='settings'>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] neonScan'
				>
					<Flex className='justify-between items-center shrink-0'>
						<h2 className='text-2xl font-semibold'>Settings</h2>
						<InteractiveIcon callback={() => close()}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>
					<Flex flex='column' className='gap-3 border-0 p-0'>
						<Button type='button' onClick={() => manageTechnologies()}>
							Manage Technologies
						</Button>
						<Button
							type='button'
							onClick={() => {
								signOut();
							}}
							className='bg-black text-light-surface'
						>
							Sign Out {api_task && <HashLoader size={24} color='#ffffff' />}
						</Button>
					</Flex>
				</Flex>

				<SettingsView />
			</Overlay>
		</>
	);
}
