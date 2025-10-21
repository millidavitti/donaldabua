import Button from "@/components/ui/button";
import { Profile } from "@/data/dashboard/dashboard-atoms/types";
import useSelectProfile from "@/hooks/interface/dashboard/use-select-profile.interface";
import { ReactNode } from "react";

export interface SelectProfile {
	children?: (
		profileId: string,
		remove: (profile: Partial<Profile>) => void,
	) => ReactNode;
}
export default function SelectProfile({ children }: SelectProfile) {
	const { view, Modal } = useSelectProfile();
	return (
		<>
			{Modal && <Modal>{children}</Modal>}
			<Button type='button' onClick={view} className='self-start'>
				Select Profile
			</Button>
		</>
	);
}
