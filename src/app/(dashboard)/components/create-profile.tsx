import Button from "@/components/ui/button";
import useCreateProfile from "@/hooks/interface/dashboard/use-create-profile.interface";

export default function CreateProfile() {
	const { Modal, viewForm } = useCreateProfile();
	return (
		<>
			{Modal}
			<Button type='button' onClick={viewForm} className='self-start'>
				Create Profile
			</Button>
		</>
	);
}
