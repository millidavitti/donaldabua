"use client";
import Flex from "../layouts/flex";
import Button from "./button";
import Overlay from "../layouts/overlay";
import useAlertDialogInterface from "@/hooks/interface/dashboard/use-alert-dialog-interface";
import { HashLoader } from "react-spinners";

export default function AlertDialog() {
	const { cancel, proceed, dialog } = useAlertDialogInterface();

	return (
		<>
			<Overlay
				stateFlag='alert-dialog'
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[480px] max-h-[80%] neonScan'
				>
					<h2 className='text-2xl font-semibold'>Are you absolutely sure?</h2>
					<p>
						This action cannot be undone. This will permanently delete and
						remove your data from your servers.
					</p>
					<Flex className='gap-3 justify-end border-0 p-0'>
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
							onClick={() => proceed()}
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
