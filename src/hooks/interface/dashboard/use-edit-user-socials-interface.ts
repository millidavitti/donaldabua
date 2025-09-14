import {
	input_socials_atom,
	social_account_snapshot_jotai,
	SocialAccount,
	SocialPlatforms,
	user_socials_snapshot_jotai,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { dashboard_view_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { getErrorMessage } from "@/utils/get-error-message";
import { waitForDialog } from "@/utils/wait-for-dialog";
import { useAtom, useSetAtom } from "jotai";
import useDialog from "../../use-dialog";
import { updateUserSocialsController } from "@/backend/controllers/dashboard/socials/update-user-socials.controller";
import { deleteUserSocialsController } from "@/backend/controllers/dashboard/socials/delete-user-socials.controller";
import {
	mutate_socials_atom,
	payload_view_atom,
} from "@/data/dashboard/dashboard-atoms/data";

export default function useEditUserSocials() {
	const [dashboard_view, dashboard_view_setter] = useAtom(dashboard_view_jotai);
	const [input_socials, set_input_socials] = useAtom(input_socials_atom);
	const social_account_snapshot_setter = useSetAtom(
		social_account_snapshot_jotai,
	);

	const [user_socials_snapshot, user_socials_snapshot_setter] = useAtom(
		user_socials_snapshot_jotai,
	);

	const { closeDialog, displayDialog } = useDialog();
	const [mutate_socials] = useAtom(mutate_socials_atom);
	const [payload_view] = useAtom(payload_view_atom);
	const display = (view: "add-socials" | "update-socials") => {
		dashboard_view_setter(view);
	};

	const close = () => {
		dashboard_view_setter(null);
		set_input_socials({ profile: "", platform: "Facebook" });
	};

	const save = async (view: "add-socials" | "update-socials") => {
		if (view === "add-socials") await addSocialAccount();
		else if (view === "update-socials") await updateSocialAccount();
	};

	const addSocialAccount = async () => {
		await mutate_socials.mutateAsync(input_socials);
	};

	const updateSocialAccount = async () => {
		try {
			const { error, socialAccount } = await updateUserSocialsController(
				input_socials.id!,
				input_socials,
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

			close();
		} catch (error) {
			console.error(
				"---useEditUserSocialsInterface:updateSocialAccount---\n",
				error,
			);
		}
	};

	const capture = (value: SocialPlatforms) => {
		set_input_socials((input_socials) => {
			delete input_socials.id;
			return { ...input_socials, profile: value };
		});
	};

	const update = (socialAccount: SocialAccount) => {
		social_account_snapshot_setter(socialAccount);
		display("update-socials");
	};

	const remove = async (socialAccount: SocialAccount) => {
		displayDialog();

		if (await new Promise(waitForDialog()))
			try {
				const { error, socialAccount: removed } =
					await deleteUserSocialsController(socialAccount.id!);
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
	};

	return {
		display,
		close,
		capture,
		inputSocials: input_socials,
		save,
		user_socials_snapshot,
		isPending: mutate_socials.isPending,
		update,
		dashboard_view,
		remove,
		socials: payload_view.data?.socials as SocialAccount[],
	};
}
