import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import useSelectProfileInterface from "@/hooks/interface/home/use-select-profile-interface";
import { X } from "lucide-react";

export default function SelectProfile() {
	const { close, display, profiles, select } = useSelectProfileInterface();
	return (
		<>
			<Button type='button' onClick={display} className='self-start'>
				Select Profile
			</Button>

			<Overlay
				stateFlag='select-profile'
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface basis-[720px] neonScan gap-3'
				>
					<Flex className='justify-between items-center'>
						<h2 className='text-2xl font-semibold'>Profiles</h2>
						<InteractiveIcon callback={() => close()}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>
					{/* Profiles */}
					<Flex flex='column' className='gap-3 border-0 p-0'>
						{profiles.map((profile) => {
							return (
								<Button
									onClick={() => select(profile)}
									className='w-full shrink'
									key={profile.id}
								>
									{profile.title}
								</Button>
							);
						})}
					</Flex>
				</Flex>
			</Overlay>
		</>
	);
}
