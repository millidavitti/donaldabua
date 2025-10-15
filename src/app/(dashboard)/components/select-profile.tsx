import Button from "@/components/ui/button";
import useSelectProfile from "@/hooks/interface/dashboard/use-select-profile.interface";

export default function SelectProfile() {
	const { view, Modal } = useSelectProfile();
	return (
		<>
			{Modal}
			<Button type='button' onClick={view} className='self-start'>
				Select Profile
			</Button>
		</>
	);
}
