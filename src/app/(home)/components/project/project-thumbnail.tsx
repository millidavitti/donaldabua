import Image from "next/image";
import React from "react";

export default function ProjectThumbnail({ thumbnail }: { thumbnail: string }) {
	return (
		<>
			{/* Thumbnail */}
			<h2 className='text-xl font-semibold shrink-0'>Thumbnail</h2>
			{thumbnail && (
				<Image
					src={thumbnail}
					width={1000}
					height={1000}
					alt='thumbnail'
					data-is-visible={Boolean(thumbnail)}
					className='data-[is-visible=false]:hidden aspect-[16/9] outline-2 outline neonScan'
				/>
			)}
		</>
	);
}
