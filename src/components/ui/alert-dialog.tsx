import React from "react";
import Flex from "../layouts/flex";
import Button from "./button";
import Overlay from "../layouts/overlay";
import InteractiveIcon from "../layouts/interactive_icon";
import useAlertDialogInterface from "@/hooks/interface/use-alert-dialog-interface";
import { ApiTask } from "@/data/atoms/ui_state";
import { HashLoader } from "react-spinners";

export default function AlertDialog({ apiTask }: { apiTask: ApiTask }) {
	const { cancel, proceed, api_task, dialog } = useAlertDialogInterface();

	return (
		<>
			<Overlay
				stateFlag={apiTask === api_task ? "alert-dialog" : null}
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] max-h-[80%] neonScan'
				>
					<h2 className='text-2xl font-semibold'>Are you absolutely sure?</h2>
					<p>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</p>
					<Flex className='gap-3 justify-end outline-none'>
						<Button
							type='submit'
							className='outline-1'
							onClick={() => cancel()}
						>
							Cancel
						</Button>
						<Button
							type='submit'
							className='bg-light-error text-light-surface'
							onClick={() => proceed(apiTask)}
						>
							Continue{" "}
							{dialog === "continue" && <HashLoader color='#fff' size={24} />}
						</Button>
					</Flex>
				</Flex>
			</Overlay>
		</>
	);
}
