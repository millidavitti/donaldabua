import { createUserSocialsController } from "@/backend/controllers/socials/create-user-socials.controller";
import { deleteUserSocialsController } from "@/backend/controllers/socials/delete-user-socials.controller";
import { updateUserSocialsController } from "@/backend/controllers/socials/update-user-socials.controller";
import {
	social_account_jotai,
	social_account_snapshot_jotai,
	SocialAccount,
	SocialPlatforms,
	user_snapshot_jotai,
	user_socials_snapshot_jotai,
} from "@/data/atoms/app_data";
import { api_task_jotai, dashboard_view_jotai } from "@/data/atoms/ui_state";
import { getErrorMessage } from "@/utils/get-error-message";
import { waitForDialog } from "@/utils/wait-for-dialog";
import { createId } from "@paralleldrive/cuid2";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import useDialog from "../use-dialog";

export default function useEditUserSocialsInterface() {
	const [dashboard_view, dashboard_view_setter] = useAtom(dashboard_view_jotai);
	const [social_account, social_account_setter] = useAtom(social_account_jotai);
	const social_account_snapshot_setter = useSetAtom(
		social_account_snapshot_jotai,
	);
	const user_snapshot = useAtomValue(user_snapshot_jotai);
	const [user_socials_snapshot, user_socials_snapshot_setter] = useAtom(
		user_socials_snapshot_jotai,
	);
	const [api_task, api_task_setter] = useAtom(api_task_jotai);
	const { closeDialog, displayDialog } = useDialog();

	function display(view: "add-socials" | "update-socials") {
		dashboard_view_setter(view);
	}

	function close() {
		dashboard_view_setter(null);
		social_account_setter({ id: "", profile: "", platform: "Facebook" });
	}

	async function save(view: "add-socials" | "update-socials") {
		if (view === "add-socials") await addSocialAccount();
		else if (view === "update-socials") await updateSocialAccount();
	}

	async function addSocialAccount() {
		try {
			api_task_setter("add-social-account");
			const { error, socialAccount } = await createUserSocialsController(
				user_snapshot.id,
				{ ...social_account, id: createId() },
			);
			if (error) throw new Error(error);
			else if (socialAccount) {
				user_socials_snapshot_setter((user_socials_snapshot) => [
					socialAccount,
					...user_socials_snapshot,
				]);
			}
			api_task_setter(null);
			close();
		} catch (error) {
			api_task_setter(null);
			console.error(
				"---useEditUserSocialsInterface:addSocialAccount---\n",
				error,
			);
		}
	}

	async function updateSocialAccount() {
		try {
			api_task_setter("update-social-account");
			const { error, socialAccount } = await updateUserSocialsController(
				social_account.id,
				social_account,
			);

			if (error) throw new Error(error);
			else if (socialAccount) {
				user_socials_snapshot_setter((user_socials_snapshot) =>
					user_socials_snapshot.map((social_account) => {
						if (social_account.id === socialAccount.id) return socialAccount;
						return social_account;
					}),
				);
			}
			api_task_setter(null);
			close();
		} catch (error) {
			api_task_setter(null);
			console.error(
				"---useEditUserSocialsInterface:updateSocialAccount---\n",
				error,
			);
		}
	}

	function capture(field: "profile", value: SocialPlatforms) {
		if (field === "profile")
			social_account_setter((social_account) => {
				return { ...social_account, profile: value };
			});
	}

	function update(socialAccount: SocialAccount) {
		social_account_snapshot_setter(socialAccount);
		display("update-socials");
	}

	async function remove(socialAccount: SocialAccount) {
		displayDialog();

		if (await new Promise(waitForDialog()))
			try {
				const { error, socialAccount: removed } =
					await deleteUserSocialsController(socialAccount.id);
				if (error) throw new Error(error);
				else if (removed)
					user_socials_snapshot_setter((user_socials) =>
						user_socials.filter(
							(social_account) => social_account.id !== removed.id,
						),
					);
			} catch (error) {
				console.error("---useEditUserSocialsInterface:remove---\n", error);
				throw new Error(getErrorMessage(error));
			}

		closeDialog();
	}

	return {
		display,
		close,
		capture,
		social_account,
		save,
		user_socials_snapshot,
		api_task,
		update,
		dashboard_view,
		remove,
	};
}
