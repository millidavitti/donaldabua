import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { useEditUserLocationInterface } from "@/hooks/interface/dashboard/use-edit-user-location-interface";
import { MapPin, X } from "lucide-react";

export default function EditUserLocation() {
	const {
		cancelLocationEdit,
		editLocation,
		captureLocationEdit,
		saveLocationEdit,
		location,
	} = useEditUserLocationInterface();
	return (
		<Flex className='gap-3'>
			<MapPin />
			<p onClick={editLocation} className='cursor-pointer font-medium'>
				{location?.city}, {location?.country}
			</p>
			{/* <p>{new Date().toTimeString()}</p> */}

			<Overlay
				stateFlag='edit-location'
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 neonScan max-w-[480px] w-full'
				>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Location</h2>
						<InteractiveIcon
							callback={() => {
								cancelLocationEdit();
							}}
						>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					<form
						className='flex flex-col gap-3 bg-light-surface'
						onSubmit={(e) => {
							e.preventDefault();
							saveLocationEdit();
						}}
					>
						<Flex flex='column' className='gap-3 border-0 p-0'>
							<label htmlFor='city'>City</label>
							<input
								type='text'
								id='city'
								required
								className='border p-3'
								defaultValue={location?.city}
								onChange={(e) => captureLocationEdit("city", e.target.value)}
							/>
							<label htmlFor='country'>Country</label>
							<input
								type='text'
								id='country'
								required
								className='border p-3'
								defaultValue={location?.country}
								onChange={(e) => {
									captureLocationEdit("country", e.target.value);
								}}
							/>
						</Flex>
						<Button type='submit' className='bg-black text-light-surface'>
							Save
						</Button>
					</form>
				</Flex>
			</Overlay>
		</Flex>
	);
}
