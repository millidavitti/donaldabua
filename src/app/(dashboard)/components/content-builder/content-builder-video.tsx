import Flex from "@/components/layouts/flex";
import { ProjectVideo } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import Button from "@/components/ui/button";
import ContentBuilderMoveDownOption from "./content-builder-move-down-option";
import ContentBuilderMoveUpOption from "./content-builder-move-up-option";
import ContentBuilderDeleteOption from "./content-builder-delete-option";
import ContentBuilderEditOption from "./content-builder-edit-option";
import ContentBuilderOptionsDrawer from "./content-builder-options-drawer";
import useContentBuilderVideo from "@/hooks/interface/dashboard/use-content-builder-video.interface";

interface ContentBuilderVideo {
	component: ProjectVideo;
}
export default function ContentBuilderVideo({
	component,
}: ContentBuilderVideo) {
	const { componentId, edit, save, captureInput } = useContentBuilderVideo();
	return (
		<Flex flex='column' className='relative'>
			<ContentBuilderOptionsDrawer>
				<ContentBuilderEditOption edit={() => edit(component.id)} />
				<ContentBuilderDeleteOption componentID={component.id} />
				<ContentBuilderMoveUpOption position={component.position} />
				<ContentBuilderMoveDownOption position={component.position} />
			</ContentBuilderOptionsDrawer>
			{componentId === component.id || (
				<iframe src={component.url} className='aspect-[16/9]' loading='lazy' />
			)}
			{componentId === component.id && (
				<Flex flex='column' className='bg-light-surface gap-3'>
					<Flex flex='column' className='gap-3'>
						<label className='text-xl font-semibold' htmlFor='title'>
							Paste a link to your video
						</label>
						<input
							type='url'
							id='title'
							required
							defaultValue={component.url}
							onChange={(e) => captureInput(e.currentTarget.value)}
							className='outline p-3'
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
