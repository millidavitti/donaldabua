"use client";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { SettingsIcon } from "lucide-react";
import useSettings from "@/app/(dashboard)/components/settings/interfaces/use-settings.interface";

export default function Settings() {
	const { view, Modal } = useSettings();
	return (
		<>
			<InteractiveIcon callback={view}>
				<SettingsIcon />
			</InteractiveIcon>
			{Modal}
		</>
	);
}
