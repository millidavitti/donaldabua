import Image from "next/image";
import React from "react";

export default function PublishedProjectThumbnail({
	thumbnail,
}: {
	thumbnail: string;
}) {
	return (
		<>
			{/* Thumbnail */}
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Thumbnail
			</label>
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
