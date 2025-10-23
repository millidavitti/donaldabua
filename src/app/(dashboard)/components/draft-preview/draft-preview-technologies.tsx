import Flex from "@/components/layouts/flex";
import { useAtomValue } from "jotai";
import { input_project_technologies_atom } from "@/data/dashboard/dashboard-atoms/data";
import { DELAY } from "@/data/home/home-constants";
import { getAnimationClass } from "@/utils/animations";
import { cn } from "@/utils/cn";

export default function DraftPreviewTechnologies() {
	const input_project_technologies = useAtomValue(
		input_project_technologies_atom,
	);

	return (
		<>
			{/* Tech Stack */}
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Tech Stack
			</label>
			<Flex className='flex-wrap gap-3 p-0 border-0 shrink-0'>
				{input_project_technologies.map((tech, index) => (
					<Flex
						key={index}
						className={cn(
							"gap-3 items-center self-start shrink-0",
							getAnimationClass("swing-in-top-fwd"),
						)}
						style={{ animationDelay: index * DELAY + "ms" }}
					>
						<p className='font-medium'>{tech.name}</p>
					</Flex>
				))}
			</Flex>
		</>
	);
}
