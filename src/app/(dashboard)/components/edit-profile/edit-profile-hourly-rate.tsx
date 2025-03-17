import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import { useEditProfileHourlyRateInterface } from "@/hooks/interface/dashboard-interface/use-edit-profile-hourly-rate-interface";
import { EditIcon, X } from "lucide-react";

export default function EditProfileHourlyRate() {
	const {
		cancelHourlyRateEdit,
		captureHourlyRateEdit,
		editHourlyRate,
		profile_hourly_rate,
		saveHourlyRateEdit,
	} = useEditProfileHourlyRateInterface();
	return (
		<>
			<Flex className='h-fit items-center justify-between grow'>
				<p className='font-semibold lg:text-2xl'>${profile_hourly_rate}/hr</p>
				<InteractiveIcon
					callback={() => {
						editHourlyRate();
					}}
				>
					<EditIcon size={24} />
				</InteractiveIcon>
			</Flex>
			{/* Overlays */}
			<Overlay
				stateFlag='edit-hourly-rate'
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[480px] neonScan'
				>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Set hourly rate</h2>
						<InteractiveIcon callback={() => cancelHourlyRateEdit()}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					<form
						className='flex flex-col gap-3'
						onSubmit={(e) => {
							e.preventDefault();
							saveHourlyRateEdit();
						}}
					>
						<label className='text-xl font-semibold' htmlFor='title'>
							Your title
						</label>
						<input
							type='number'
							id='title'
							required
							value={profile_hourly_rate || ""}
							onChange={(e) => {
								captureHourlyRateEdit(+e.target.value);
							}}
							className='outline p-3'
						/>
						<Button type='submit' className='bg-black text-light-surface'>
							Save
						</Button>
					</form>
				</Flex>
			</Overlay>
		</>
	);
}
