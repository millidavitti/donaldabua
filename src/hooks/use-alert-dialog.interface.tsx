import { jotaiStore } from "@/components/jotai-store";
import Flex from "@/components/layouts/flex";
import Modal from "@/components/layouts/modal";
import Button from "@/components/ui/button";
import { atom, useAtom } from "jotai";

/**
 * Custom React hook that provides a modal confirmation dialog which can be
 * opened programmatically and awaited like a Promise.
 *
 * The hook manages a shared Jotai atom to coordinate dialog state and exposes:
 * - startDialog: an async function that opens the dialog and resolves with the
 *   user's decision.
 * - Dialog: a JSX element representing the modal when open (or false when not open).
 *
 * Behavior:
 * - Calling startDialog() sets the internal atom to "open" and returns a Promise<boolean>.
 * - The Promise resolves to `true` when the user confirms, `false` when the user cancels,
 *   or `false` if no response is received within 10 seconds (timeout).
 * - When the Promise resolves the dialog is closed and internal timers/intervals are cleared.
 * - The hook polls the Jotai store every 500ms to detect changes to the dialog action.
 *
 * Usage:
 * - Render the returned Dialog somewhere in your component tree so the modal can mount.
 * - Await startDialog() to handle the user's decision synchronously in async control flow.
 *
 * Returns:
 * - An object with:
 *   - startDialog: () => Promise<boolean> — opens the dialog and resolves with the user's choice.
 *   - Dialog: JSX.Element | false — the modal element while open, or false when closed.
 *
 * Notes:
 * - The dialog automatically closes after a confirmation or cancellation, or after the 10s timeout.
 * - Ensure the hook is used inside a React component (it uses React hooks) and that the component
 *   renders the Dialog value so the modal appears when started.
 */
export default function useAlertDialog() {
	const [action, setAction] = useAtom(dialogActionAtom);

	function cancel() {
		setAction("cancel");
	}
	function proceed() {
		setAction("confirm");
	}

	const startDialog = async () => {
		setAction("open");
		return await waitForConfirmation();
	};
	const closeDialog = () => setAction(null);

	function waitForConfirmation() {
		return new Promise((resolve: (value: boolean) => void) => {
			let interval: NodeJS.Timeout;

			const check = () => {
				clearInterval(interval);
				const action = jotaiStore.get(dialogActionAtom);
				switch (action) {
					case "confirm":
						closeDialog();
						clearInterval(interval);
						clearTimeout(timeout);
						resolve(true);
						break;
					case "cancel":
						closeDialog();
						clearInterval(interval);
						clearTimeout(timeout);
						resolve(false);
						break;
					default:
						interval = setInterval(check, 500);
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
	}

	return {
		startDialog,
		Dialog: action === "open" && (
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
							onClick={proceed}
						>
							Confirm
						</Button>
					</Flex>
				</Flex>
			</Modal>
		),
	};
}

const dialogActionAtom = atom<"cancel" | "confirm" | "open" | null>(null);
