import Flex from "@/components/layouts/flex";
import { input_project_atom } from "@/data/dashboard/dashboard-atoms/data";
import { useAtomValue } from "jotai";
import Image from "next/image";

export default function DraftPreviewThumbnail() {
	const input_project = useAtomValue(input_project_atom);
	return (
		<>
			{/* Thumbnail */}
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Thumbnail
			</label>
			<Flex>
				<Image
					src={input_project.thumbnail}
					width={1000}
					height={1000}
					alt='thumbnail'
					className='aspect-[16/9] outline-2 outline neonScan'
				/>
			</Flex>
		</>
	);
}
