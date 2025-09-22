import { input_project_atom } from "@/data/dashboard/dashboard-atoms/data";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import Image from "next/image";

export default function DraftProjectThumbnail() {
	const [input_project, set_input_project] = useAtom(input_project_atom);
	return (
		<>
			<label
				className='text-xl font-semibold shrink-0'
				htmlFor='draft-project-thumbnail'
			>
				Thumbnail
			</label>
			<input
				type='url'
				id='draft-project-thumbnail'
				required
				className={cn(
					"border p-3 valid:outline-emerald-600",
					input_project.thumbnail && "invalid:outline-red-600",
				)}
				value={input_project.thumbnail}
				placeholder='Paste a valid Cloudinary link'
				onChange={(e) => {
					if (e.target.validity.valid)
						set_input_project({ ...input_project, thumbnail: e.target.value });
					// else 						set_input_project({ ...input_project, thumbnail: e.target.value });
				}}
			/>
			{input_project.thumbnail && (
				<Image
					src={input_project.thumbnail}
					width={1000}
					height={1000}
					alt='thumbnail'
					className='aspect-[16/9] outline-2 outline neonScan'
				/>
			)}
		</>
	);
}
