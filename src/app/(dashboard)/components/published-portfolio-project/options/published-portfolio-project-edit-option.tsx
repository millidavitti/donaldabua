import InteractiveIcon from "@/components/layouts/interactive_icon";
import { portfolio_project_to_edit_jotai } from "@/data/atoms/ui_state";
import { useAtom } from "jotai";
import { Edit } from "lucide-react";
import React from "react";

interface PublishedPortfolioProjectEditOption {
	projectID: string;
}
export default function PublishedPortfolioProjectEditOption({
	projectID,
}: PublishedPortfolioProjectEditOption) {
	const [portfolio_project_to_edit, portfolio_project_to_edit_setter] = useAtom(
		portfolio_project_to_edit_jotai,
	);
	return (
		<InteractiveIcon
			className='outline grow flex place-content-center'
			htmlProps={{}}
		>
			<Edit />
		</InteractiveIcon>
	);
}
