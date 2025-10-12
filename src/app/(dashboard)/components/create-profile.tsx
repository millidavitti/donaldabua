import Button from "@/components/ui/button";
import useCreateProfile from "@/hooks/interface/dashboard/use-create-profile.interface";

export default function CreateProfile() {
	const { Modal, start } = useCreateProfile();
	return (
		<>
			{Modal}
			<Button type='button' onClick={start} className='self-start'>
				Create Profile
			</Button>
		</>
	);
}
