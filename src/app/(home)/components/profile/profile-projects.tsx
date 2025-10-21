"use client";
import Flex from "@/components/layouts/flex";
import PublishedProjects from "../project/projects";

export default function ProfileProjects() {
	return (
		<>
			<Flex flex='column' className='border-0 p-0 gap-3'>
				<a href='#projects'>
					{/* Header */}
					<Flex className='items-center justify-between shrink-0'>
						<p className='font-semibold lg:text-2xl'>Projects</p>
					</Flex>
				</a>
				<PublishedProjects />
			</Flex>
		</>
	);
}
