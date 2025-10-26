import Flex from "@/components/layouts/flex";
import Image from "next/image";
import { ProjectContent } from "@/data/types";
import Button from "@/components/ui/button";
import ContentBuilderOptionsDrawer from "./content-builder-options-drawer";
import ContentBuilderDeleteOption from "./content-builder-delete-option";
import ContentBuilderEditOption from "./content-builder-edit-option";
import ContentBuilderMoveUpOption from "./content-builder-move-up-option";
import ContentBuilderMoveDownOption from "./content-builder-move-down-option";
import { useContentBuilderImage } from "@/app/(dashboard)/components/content-builder/interfaces/use-content-builder-image.interface";

interface ContentBuilderImage {
	component: ProjectContent;
}
export default function ContentBuilderImage({
	component,
}: ContentBuilderImage) {
	const { componentId, edit, save, captureInput } = useContentBuilderImage();
	return (
		<Flex flex='column' className='relative'>
			<ContentBuilderOptionsDrawer>
				<ContentBuilderEditOption edit={() => edit(component.id)} />
				<ContentBuilderDeleteOption componentID={component.id} />
				<ContentBuilderMoveUpOption position={component.position} />
				<ContentBuilderMoveDownOption position={component.position} />
			</ContentBuilderOptionsDrawer>
			{componentId === component.id || (
				<Image
					src={component.url!}
					width={1000}
					height={1000}
					alt=''
					className='neonScan'
				/>
			)}
			{componentId === component.id && (
				<Flex flex='column' className='bg-light-surface gap-3 neonScan'>
					<Flex flex='column' className='gap-3'>
						<label className='text-xl font-semibold' htmlFor='title'>
							Paste a link to your image
						</label>
						<input
							type='url'
							id='title'
							required
							defaultValue={component.url!}
							onChange={(e) => captureInput(e.target.value)}
							className='outline-solid p-3'
						/>

						<Button
							className='bg-black text-light-surface'
							onClick={() => save(component.id)}
						>
							Save
						</Button>
					</Flex>
				</Flex>
			)}
		</Flex>
	);
}
