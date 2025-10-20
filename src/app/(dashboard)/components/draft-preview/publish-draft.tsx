import Button from "@/components/ui/button";
import { usePublishProject } from "@/hooks/interface/dashboard/use-publish-project.interface";
import React from "react";
import { HashLoader } from "react-spinners";

export default function PublishDraft() {
	const { context, publish, isPending } = usePublishProject();
	return (
		<Button
			type='button'
			className='bg-black text-light-surface'
			onClick={publish}
		>
			Publish {context === "preview-draft" ? "Draft" : "Update"}{" "}
			{isPending && <HashLoader color='#ffffff' size={24} />}
		</Button>
	);
}
