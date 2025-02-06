import { portfolio_project_thumbnail_jotai } from "@/data/atoms/app_data";
import { useAtomValue } from "jotai";
import Image from "next/image";
import React from "react";

export default function PreviewPortfolioProjectThumbnail() {
	const portfolio_project_thumbnail = useAtomValue(
		portfolio_project_thumbnail_jotai,
	);
	return (
		<>
			{/* Thumbnail */}
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Thumbnail
			</label>
			{portfolio_project_thumbnail && (
				<Image
					src={portfolio_project_thumbnail}
					width={1000}
					height={1000}
					alt='thumbnail'
					data-is-visible={Boolean(portfolio_project_thumbnail)}
					className='data-[is-visible=false]:hidden aspect-[16/9] outline-2 outline neonScan'
				/>
			)}
		</>
	);
}
