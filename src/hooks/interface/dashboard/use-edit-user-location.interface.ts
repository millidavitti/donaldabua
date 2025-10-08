import { dashboard_view_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { useAtom, useSetAtom } from "jotai";
import {
	mutate_location_atom,
	payload_view_atom,
} from "@/data/dashboard/dashboard-atoms/data";
import { useState } from "react";

export function useEditUserLocation() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const [location, setLocation] = useState({ city: "", country: "" });

	const [payload_view] = useAtom(payload_view_atom);
	const [mutate_location] = useAtom(mutate_location_atom);

	const start = () => {
		dashboard_view_setter("edit-location");
	};
	const close = () => {
		dashboard_view_setter(null);
	};

	const save = async () => {
		dashboard_view_setter(null);
		await mutate_location.mutateAsync(location);
	};

	const captureInput = (key: "city" | "country", value: string) => {
		setLocation((prev) => ({ ...prev, [key]: value }));
	};
	return {
		location: payload_view.data?.location,
		start,
		close,
		save,
		captureInput,
	};
}
