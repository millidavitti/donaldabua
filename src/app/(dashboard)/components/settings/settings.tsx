"use client";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { SettingsIcon } from "lucide-react";
import useSettings from "@/hooks/interface/dashboard/use-settings.interface";

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
