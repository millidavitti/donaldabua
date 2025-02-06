import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import {
	portfolio_project_content_jotai,
	portfolio_project_data_jotai,
	PortfolioProjectImage,
	PortfolioProjectText,
	PortfolioProjectVideo,
} from "@/data/atoms/app_data";
import { useAtom, useSetAtom } from "jotai";
import { ArrowDown, ArrowUp, Edit, EllipsisIcon, Trash } from "lucide-react";
import { useState } from "react";

interface ContentBuilderOptions {
	component:
		| PortfolioProjectVideo
		| PortfolioProjectImage
		| PortfolioProjectText;
	edit: (...args: unknown[]) => unknown;
}
export default function ContentBuilderOptions({
	component,
	edit,
}: ContentBuilderOptions) {
	const portfolio_project_content_setter = useSetAtom(
		portfolio_project_content_jotai,
	);
	const [isOptionsVisible, setIsOptionsVisible] = useState(false);
	return (
		<>
			{isOptionsVisible ? (
				<Flex
					className='place-content-center flex-wrap gap-3 absolute bg-light-surface top-0 inset-x-0 w-fit ml-auto neonScan z-10'
					htmlProps={{
						onMouseLeave() {
							setIsOptionsVisible(false);
						},
					}}
				>
					<InteractiveIcon
						className='outline grow flex place-content-center'
						htmlProps={{
							onClick() {
								edit();
							},
						}}
					>
						<Edit />
					</InteractiveIcon>
					<InteractiveIcon
						className='outline grow flex place-content-center'
						htmlProps={{
							onClick() {
								portfolio_project_content_setter((content) => {
									const update = content.filter(
										(obj) => component?.id !== obj.id,
									);
									return {
										...content,
										content: update,
									};
								});
							},
						}}
					>
						<Trash />
					</InteractiveIcon>
					{/* Move up or down */}

					<InteractiveIcon
						className='outline grow flex place-content-center'
						htmlProps={{
							onClick() {
								portfolio_project_content_setter((content) => {
									return content.map((comp, i, arr) => {
										if (i === component.position - 1) {
											if (comp.position + 1 >= arr.length) return comp;
											return {
												...comp,
												position: comp.position + 1,
											};
										} else if (i === component.position) {
											if (comp.position - 1 < 0) return comp;
											return {
												...comp,
												position: comp.position - 1,
											};
										}
										return comp;
									});
								});
							},
						}}
					>
						<ArrowUp />
					</InteractiveIcon>
					<InteractiveIcon
						className='outline grow flex place-content-center'
						htmlProps={{
							onClick() {
								portfolio_project_content_setter((content) => {
									return content.map((comp, i, arr) => {
										if (i === component.position) {
											if (comp.position + 1 >= arr.length) return comp;
											return {
												...comp,
												position: comp.position + 1,
											};
										} else if (i === component.position + 1) {
											if (comp.position - 1 < 0) return comp;
											return {
												...comp,
												position: comp.position - 1,
											};
										}
										return comp;
									});
								});
							},
						}}
					>
						<ArrowDown />
					</InteractiveIcon>
				</Flex>
			) : (
				<InteractiveIcon
					className='place-content-center flex-wrap gap-3 p-0 bg-light-surface absolute top-0 inset-x-0 w-fit ml-auto mr-3 mt-3 z-10'
					htmlProps={{
						onClick() {
							setIsOptionsVisible(true);
						},
					}}
				>
					<EllipsisIcon />
				</InteractiveIcon>
			)}
		</>
	);
}
