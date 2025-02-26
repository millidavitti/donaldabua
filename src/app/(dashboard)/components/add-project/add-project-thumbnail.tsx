import { project_thumbnail_jotai } from "@/data/atoms/app_data";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import Image from "next/image";

export default function DraftProjectThumbnail() {
	const [project_thumbnail, project_thumbnail_setter] = useAtom(
		project_thumbnail_jotai,
	);
	return (
		<>
			<label
				className='text-xl font-semibold shrink-0'
				htmlFor='project-thumbnail'
			>
				Thumbnail
			</label>
			<input
				type='url'
				id='project-thumbnail'
				required
				className={cn(
					"outline p-3 valid:outline-emerald-600",
					project_thumbnail && "invalid:outline-red-600",
				)}
				value={project_thumbnail}
				placeholder='Paste a valid Cloudinary link'
				onChange={(e) => {
					if (e.target.validity.valid) project_thumbnail_setter(e.target.value);
					else project_thumbnail_setter("");
				}}
			/>
			{project_thumbnail && (
				<Image
					src={project_thumbnail}
					width={1000}
					height={1000}
					alt='thumbnail'
					data-is-visible={Boolean(project_thumbnail)}
					className='data-[is-visible=false]:hidden aspect-[16/9] outline-2 outline neonScan'
				/>
			)}
		</>
	);
}
