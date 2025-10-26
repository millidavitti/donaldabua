import Flex from "@/components/layouts/flex";
import Image from "next/image";
import { type Project } from "@/data/types";
import { DELAY } from "@/data/constants";
import { cn } from "@/utils/cn";
import { getAnimationClass } from "@/utils/animations";
import { ExternalLink } from "lucide-react";
import Repository from "@/components/repository";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { ReactNode } from "react";
import useProject from "./interfaces/use-portfolio.interface";

export default function Project({
	project,
	index,
	children,
}: {
	project: Project;
	index: number;
	children?: (project: Project) => ReactNode;
}) {
	const { view, Modal } = useProject();

	return (
		<>
			{Modal}

			<Flex
				flex='column'
				className={cn(
					"group grow md:basis-[320px] mb-3 gap-3 hover:shadow-lg transition hover:border-black h-fit",
					getAnimationClass("swing-in-top-fwd"),
				)}
				style={{ animationDelay: index * DELAY + "ms" }}
			>
				{children && children(project)}
				<Flex flex='column' className='gap-3 p-0 border-none'>
					<Flex className='w-full h-40 shrink-0'>
						<Image
							src={project.thumbnail}
							width={1000}
							height={1000}
							alt='portfolio-project-thumbnail'
							className='object-cover'
						/>
					</Flex>
					<p
						className='text-lg w-full font-semibold opacity-80 group-hover:opacity-100 transition-all active:scale-[.95] border-[1.2px] border-t-0 pb-3 pl-3 group-hover:text-[#006494] truncate group-hover:shadow-md cursor-pointer'
						onClick={() => view(project)}
					>
						{project.title}
					</p>
					<Flex className='items-center gap-0 p-0 border-none'>
						<a href={project.repository} target='_blank'>
							<InteractiveIcon className='hover:-outline-offset-1 hover:outline-solid'>
								<Repository size={28} className='stroke-none' />
							</InteractiveIcon>
						</a>
						<a href={project.deployment} target='_blank'>
							<InteractiveIcon className='hover:border hover:border-r-[3px]'>
								<ExternalLink className='group-hover:stroke-[#809BCE]' />
							</InteractiveIcon>
						</a>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
}
