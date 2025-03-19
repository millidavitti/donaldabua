import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import useSelectProfileInterface from "@/hooks/interface/dashboard/use-select-profile-interface";
import { cn } from "@/utils/cn";
import { Trash2, X } from "lucide-react";

export default function SelectProfile() {
	const { close, display, profiles, select, remove } =
		useSelectProfileInterface();
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
					className='bg-light-surface gap-3 basis-[720px] neonScan'
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
								<Flex key={profile.id} className='gap-3 border-0 p-0'>
									<Button
										onClick={() => select(profile)}
										className='w-full shrink'
									>
										{profile.title}
									</Button>
									<Trash2
										className={cn(
											"stroke-light-error shrink-0 self-center cursor-pointer active:scale-95 transition",
											profiles.length < 2 && "hidden",
										)}
										onClick={() => remove(profile.id)}
									/>
								</Flex>
							);
						})}
					</Flex>
				</Flex>
			</Overlay>
		</>
	);
}
