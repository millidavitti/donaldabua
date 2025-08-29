import { dashboard_view_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { useAtom } from "jotai";
import {
	mutate_user_atom,
	payload_view_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import { useState } from "react";

export function useEditUserPhoto() {
	const [dashboard_view, dashboard_view_setter] = useAtom(dashboard_view_jotai);
	const [payload_view] = useAtom(payload_view_atom);
	const [mutate_user] = useAtom(mutate_user_atom);
	const [image, setImage] = useState("");

	const edit = () => {
		dashboard_view_setter("edit-image");
	};

	const cancel = () => {
		dashboard_view_setter(null);
	};

	const save = async () => {
		dashboard_view_setter(null);
		await mutate_user.mutateAsync({ image });
	};

	const capture = (value: string) => {
		setImage(value);
	};
	return {
		edit_profile: dashboard_view,
		image: payload_view.data?.user.image,
		editPhoto: edit,
		cancel,
		save,
		capture,
	};
}
