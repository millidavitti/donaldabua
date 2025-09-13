import { dashboard_view_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { useAtom, useSetAtom } from "jotai";
import {
	mutate_location_atom,
	payload_view_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import { useState } from "react";

export function useEditUserLocationInterface() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const [location, setLocation] = useState({ city: "", country: "" });

	const [payload_view] = useAtom(payload_view_atom);
	const [mutate_location] = useAtom(mutate_location_atom);

	function editLocation() {
		dashboard_view_setter("edit-location");
	}
	function cancelLocationEdit() {
		dashboard_view_setter(null);
	}

	async function saveLocationEdit() {
		dashboard_view_setter(null);
		await mutate_location.mutateAsync(location);
	}

	function captureLocationEdit(key: "city" | "country", value: string) {
		console.log(key, value);
		setLocation({ ...payload_view.data?.location, [key]: value });
	}
	return {
		location: payload_view.data?.location,
		editLocation,
		cancelLocationEdit,
		saveLocationEdit,
		captureLocationEdit,
	};
}
