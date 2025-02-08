import InteractiveIcon from "@/components/layouts/interactive_icon";
import { Trash } from "lucide-react";
import React from "react";

interface PublishedPortfolioProjectDeleteOption {
	projectID: string;
}
export default function PublishedPortfolioProjectDeleteOption({
	projectID,
}: PublishedPortfolioProjectDeleteOption) {
	return (
		<InteractiveIcon
			className='outline grow flex place-content-center'
			htmlProps={{
				onClick() {},
			}}
		>
			<Trash />
		</InteractiveIcon>
	);
}
