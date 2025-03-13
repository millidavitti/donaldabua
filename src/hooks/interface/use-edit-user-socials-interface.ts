import { createUserSocialsController } from "@/backend/create-user-socials.controller";
import {
	social_account_jotai,
	SocialPlatforms,
	user_snapshot_jotai,
	user_socials_snapshot_jotai,
} from "@/data/atoms/app_data";
import { api_task_jotai, dashboard_view_jotai } from "@/data/atoms/ui_state";
import { createId } from "@paralleldrive/cuid2";
import { useAtom, useAtomValue, useSetAtom } from "jotai";

export default function useEditUserSocialsInterface() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const [social_account, social_account_setter] = useAtom(social_account_jotai);
	const user_snapshot = useAtomValue(user_snapshot_jotai);
	const [user_socials_snapshot, user_socials_snapshot_setter] = useAtom(
		user_socials_snapshot_jotai,
	);
	const [api_task, api_task_setter] = useAtom(api_task_jotai);

	function display() {
		dashboard_view_setter("edit-socials");
	}

	function close() {
		dashboard_view_setter(null);
		social_account_setter({ id: "", profile: "", platform: "Facebook" });
	}

	async function save() {
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
			console.error("---useEditUserSocialsInterface:save---\n", error);
		}
	}

	function capture(field: "profile", value: SocialPlatforms) {
		if (field === "profile")
			social_account_setter((social_account) => {
				return { ...social_account, profile: value };
			});
	}
	return {
		display,
		close,
		capture,
		social_account,
		save,
		user_socials_snapshot,
		api_task,
	};
}
