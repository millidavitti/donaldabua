import { portfolio_project_thumbnail_jotai } from "@/data/atoms/app_data";
import { useAtom } from "jotai";
import Image from "next/image";

export default function AddPortfolioProjectThumbnail() {
	const [portfolio_project_thumbnail, portfolio_project_thumbnail_setter] =
		useAtom(portfolio_project_thumbnail_jotai);
	return (
		<>
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Thumbnail
			</label>
			<input
				type='url'
				required
				className='outline p-3 valid:outline-emerald-800 invalid:outline-red-800'
				value={portfolio_project_thumbnail}
				onChange={(e) => {
					portfolio_project_thumbnail_setter(e.target.value);
				}}
			/>
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
