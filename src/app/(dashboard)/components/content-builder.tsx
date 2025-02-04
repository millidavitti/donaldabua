import Flex from "@/components/layouts/flex";
import React, { useState } from "react";
import ProjectContentOptions from "./project-content-options";
import { portfolio_project_data_jotai } from "@/data/atoms/app_data";
import { useAtomValue, useSetAtom } from "jotai";
import ContentBuilderImage from "./content-builder-image";
import ContentBuilderVideo from "./content-builder-video";
import md from "md";
import parse from "html-react-parser";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { Edit } from "lucide-react";

export default function ContentBuilder() {
	const portfolio_project_data = useAtomValue(portfolio_project_data_jotai);
	const [isContentEditable, setIsContentEditable] = useState(false);
	const portfolio_project_data_setter = useSetAtom(
		portfolio_project_data_jotai,
	);
	return (
		<Flex flex='column' className='basis-[360px] grow-[2] gap-3'>
			<Flex flex='column' className='grow gap-3'>
				{portfolio_project_data.content.map((el) => {
					if (el.type === "image")
						return <ContentBuilderImage url={el.url} key={el.position} />;
					else if (el.type === "video")
						return <ContentBuilderVideo url={el.url} key={el.position} />;
					else if (el.type === "text")
						return (
							<Flex
								flex='column'
								className='gap-3'
								key={el.position}
								htmlProps={{
									onKeyDown(e) {
										if (e.key === "Enter" && e.ctrlKey)
											setIsContentEditable(false);
									},
								}}
							>
								<InteractiveIcon
									className='outline self-end'
									htmlProps={{
										onClick() {
											setIsContentEditable(true);
										},
									}}
								>
									<Edit />
								</InteractiveIcon>
								{isContentEditable || parse(md(el.markdown))}
								{isContentEditable && (
									<textarea
										value={el.markdown}
										className='shrink-0 p-3 '
										rows={30}
										onChange={(e) => {
											portfolio_project_data_setter((data) => {
												const update = data.content.map((obj) => {
													if (el.id === obj.id)
														return {
															...obj,
															markdown: e.target.value,
														};
													return obj;
												});
												return {
													...data,
													content: update,
												};
											});
										}}
									/>
								)}
							</Flex>
						);
				})}
			</Flex>
			<ProjectContentOptions />
		</Flex>
	);
}
