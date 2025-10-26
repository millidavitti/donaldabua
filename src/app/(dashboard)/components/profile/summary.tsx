"use client";
import Flex from "@/components/layouts/flex";
import ProfileTitle from "./title";
import HourlyRate from "./hourly-rate";
import Overview from "./overview";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { EditIcon } from "lucide-react";

export default function EditProfileSummary() {
	return (
		<Flex flex='column' className='gap-3 p-0 border-0'>
			<Flex className='flex-wrap justify-between gap-3 p-0 border-none shrink-0 lg:flex-nowrap'>
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
