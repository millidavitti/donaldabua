import Button from "@/components/ui/button";
import { Profile } from "@/data/types";
import useSelectProfile from "@/app/(dashboard)/components/profile/interfaces/use-select-profile.interface";
import { ReactNode } from "react";

export interface SelectProfile {
	children?: (
		profileId: string,
		remove: (profile: Partial<Profile>) => void,
	) => ReactNode;
}
export default function SelectProfile({ children }: SelectProfile) {
	const { view, Modal } = useSelectProfile(children);
	return (
		<>
			{Modal}
			<Button type='button' onClick={view} className='self-start'>
				Select Profile
			</Button>
		</>
	);
}
