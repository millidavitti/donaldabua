import { input_project_atom } from "@/data/data";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import Image from "next/image";
import { useState } from "react";

export default function DraftThumbnail() {
	const [input_project, set_input_project] = useAtom(input_project_atom);
	const [inputThumbnail, setInputThumbnail] = useState<string | null>(null);
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
					"border p-3 valid:outline-emerald-600 shrink-0",
					input_project.thumbnail && "invalid:outline-red-600",
				)}
				value={inputThumbnail ?? input_project.thumbnail}
				placeholder='Paste a valid Cloudinary link'
				onChange={(e) => {
					if (e.target.validity.valid) {
						set_input_project({ ...input_project, thumbnail: e.target.value });
						setInputThumbnail(null);
					} else setInputThumbnail(e.target.value);
				}}
			/>
			{input_project.thumbnail && (
				<Image
					src={input_project.thumbnail}
					width={1000}
					height={1000}
					alt='thumbnail'
					className='aspect-video shrink-0 neonScan'
				/>
			)}
		</>
	);
}
