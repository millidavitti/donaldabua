import Flex from "@/components/layouts/flex";
import { project_thumbnail_jotai } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { useAtomValue } from "jotai";
import Image from "next/image";
import React from "react";

export default function PreviewProjectThumbnail() {
	const project_thumbnail = useAtomValue(project_thumbnail_jotai);
	return (
		<>
			{/* Thumbnail */}
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Thumbnail
			</label>
			{project_thumbnail && (
				<Flex>
					<Image
						src={project_thumbnail}
						width={1000}
						height={1000}
						alt='thumbnail'
						data-is-visible={Boolean(project_thumbnail)}
						className='data-[is-visible=false]:hidden aspect-[16/9] outline-2 outline neonScan'
					/>
				</Flex>
			)}
		</>
	);
}
