"use client";
import Flex from "@/components/layouts/flex";
import ProfileTitle from "./edit-profile-title";
import HourlyRate from "./edit-profile-hourly-rate";
import Overview from "./edit-profile-overview";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { EditIcon } from "lucide-react";

export default function EditProfileSummary() {
	return (
		<Flex flex='column' className='gap-3 border-0 p-0'>
			<Flex className='shrink-0 justify-between flex-wrap lg:flex-nowrap gap-3 p-0 border-none'>
				<ProfileTitle>
					{(start) => (
						<InteractiveIcon onClick={start}>
							<EditIcon size={24} />
						</InteractiveIcon>
					)}
				</ProfileTitle>
				<HourlyRate>
					{(start) => (
						<InteractiveIcon onClick={start}>
							<EditIcon size={24} />
						</InteractiveIcon>
					)}
				</HourlyRate>
			</Flex>
			<Overview>
				{(start) => (
					<InteractiveIcon onClick={start} className='self-start'>
						<EditIcon size={24} />
					</InteractiveIcon>
				)}
			</Overview>
		</Flex>
	);
}
