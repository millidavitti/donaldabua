"use client";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import React from "react";
import { SettingsIcon, X } from "lucide-react";
import { useSetAtom } from "jotai";
import { edit_profile_jotai, settings_view_jotai } from "@/data/atoms/ui_state";
import AddTechnologies from "./add-technologies";
import Button from "@/components/ui/button";
import SettingsView from "./settings-view";

export default function Settings() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const settings_view_setter = useSetAtom(settings_view_jotai);
	return (
		<>
			<InteractiveIcon callback={() => edit_profile_setter("settings")}>
				<SettingsIcon />
			</InteractiveIcon>
			<Overlay stateFlag='settings'>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] neonScan'
				>
					<Flex className='justify-between items-center shrink-0'>
						<h2 className='text-2xl font-semibold'>Settings</h2>
						<InteractiveIcon callback={() => edit_profile_setter(null)}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>
					<Flex flex='column' className=''>
						<Button
							type='button'
							onClick={() => settings_view_setter("manage-technologies")}
						>
							Manage Technologies
						</Button>
					</Flex>
				</Flex>

				<SettingsView />
			</Overlay>
		</>
	);
}
