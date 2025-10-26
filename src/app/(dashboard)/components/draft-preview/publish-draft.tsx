import Button from "@/components/ui/button";
import { usePublish } from "@/app/(dashboard)/components/draft/interfaces/use-publish.interface";
import React from "react";
import { HashLoader } from "react-spinners";

export default function PublishDraft() {
	const { context, publish, isPending } = usePublish();
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
