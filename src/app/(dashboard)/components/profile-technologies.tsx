import Flex from "@/components/layouts/flex";
import { profile_technologies_jotai } from "@/data/atoms/app_data";
import { useAtomValue } from "jotai";
import { X } from "lucide-react";

export default function ProfileTechnologies() {
	const profile_technologies = useAtomValue(profile_technologies_jotai);

	return (
		<Flex className='gap-3 flex-wrap shrink-0 grow'>
			{profile_technologies.map((tech) => (
				<Flex className='gap-3 items-center' key={tech.id}>
					<p className='shrink-0 font-medium'>{tech.name}</p>
					<X
						size={24}
						className='stroke-light-error cursor-pointer active:scale-[.95]'
					/>
				</Flex>
			))}
		</Flex>
	);
}
