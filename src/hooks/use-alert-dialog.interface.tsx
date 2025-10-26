import Flex from "@/components/layouts/flex";
import Modal from "@/components/layouts/modal";
import Button from "@/components/ui/button";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Custom React hook that manages a modal alert/confirmation dialog and provides
 * a programmatic way to await the user's choice.
 *
 * Behavior:
 * - startDialog(): opens the dialog and returns a Promise<boolean> that resolves
 *   to `true` when the user confirms, or `false` when the user cancels or when
 *   a 10 second timeout elapses.
 * - Dialog: a JSX element (or null) that, when rendered, is created via a portal
 *   (to document.body) and displays the confirmation UI with "Cancel" and
 *   "Confirm" buttons.
 * - cancel() and confirm() are internal actions that set the user's choice and
 *   cause the pending Promise returned by startDialog() to resolve.
 * - closeDialog() clears the dialog state and internal choice/ref, and is used
 *   to clean up after a decision or timeout.
 *
 * Notes:
 * - The hook uses an internal ref to track the user's action and state to
 *   coordinate the Promise resolution and UI lifecycle.
 * - Only a single dialog/context is supported at a time; calling startDialog()
 *   will set the dialog visible and return a Promise that resolves when the
 *   user acts or the timeout fires.
 *
 * Returns:
 * - An object with:
 *   - startDialog: () => Promise<boolean>
 *   - Dialog: JSX.Element | null
 *
 * Example:
 * const { startDialog, Dialog } = useAlertDialog();
 * // include `Dialog` somewhere in your component tree (e.g. top-level JSX)
 * const confirmed = await startDialog();
 * if (confirmed) {
 *   // proceed with destructive action
 * }
 */
export default function useAlertDialog() {
	const [context, setContext] = useState<"start-dialog" | null>(null);
	const action = useRef<"cancel" | "confirm" | null>(null);

	const cancel = () => {
		action.current = "cancel";
	};
	const confirm = () => {
		action.current = "confirm";
	};

	const startDialog = async () => {
		setContext("start-dialog");
		return await waitForConfirmation();
	};
	const closeDialog = () => {
		setContext(null);
		action.current = null;
	};

	const waitForConfirmation = () => {
		return new Promise((resolve: (value: boolean) => void) => {
			let interval: NodeJS.Timeout;

			const check = () => {
				clearInterval(interval);
				switch (action.current) {
					case "confirm":
						resolve(true);
						closeDialog();
						clearInterval(interval);
						clearTimeout(timeout);
						break;
					case "cancel":
						resolve(false);
						closeDialog();
						clearInterval(interval);
						clearTimeout(timeout);
						break;
					default:
						interval = setInterval(check);
						break;
				}
			};
			check();

			const timeout = setTimeout(() => {
				closeDialog();
				clearInterval(interval);
				resolve(false);
			}, 10_000);
		});
	};

	return {
		startDialog,
		Dialog:
			context &&
			createPortal(
				<Modal>
					<Flex
						flex='column'
						className='bg-light-surface gap-3 basis-[480px] max-h-[80%] neonScan'
					>
						<h2 className='text-2xl font-semibold'>Are you absolutely sure?</h2>
						<p>
							This action cannot be undone. This will permanently delete and
							remove your data from your servers.
						</p>
						<Flex className='justify-end gap-3 p-0 border-0'>
							<Button
								type='submit'
								className='outline-1 active:scale-95'
								onClick={cancel}
							>
								Cancel
							</Button>
							<Button
								type='submit'
								className='bg-light-error text-light-surface active:scale-95'
								onClick={confirm}
							>
								Confirm
							</Button>
						</Flex>
					</Flex>
				</Modal>,
				document.body,
			),
	};
}
