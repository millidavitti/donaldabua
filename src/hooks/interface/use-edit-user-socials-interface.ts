import { social_account_jotai } from "@/data/atoms/app_data";
import { dashboard_view_jotai } from "@/data/atoms/ui_state";
import { useAtom, useSetAtom } from "jotai";

export default function useEditUserSocialsInterface() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const [social_account, social_account_setter] = useAtom(social_account_jotai);
	function display() {
		dashboard_view_setter("edit-socials");
	}
	function close() {
		dashboard_view_setter(null);
		social_account_setter({ id: "", link: "", platform: "" });
	}

	async function save() {
		close();
	}

	function capture(field: "platform" | "link", value: string) {
		if (field === "link")
			social_account_setter((social_account) => {
				return { ...social_account, link: value };
			});
		else if (field === "platform")
			social_account_setter((social_account) => {
				return { ...social_account, platform: value };
			});
	}
	return { display, close, capture, social_account, save };
}
