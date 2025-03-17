import { updateUserLocationController } from "@/backend/controllers/home/user-location/update-user-location.controller";
import {
	user_snapshot_jotai,
	user_location_city_jotai,
	user_location_country_jotai,
	user_location_snapshot_jotai,
} from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { dashboard_view_jotai } from "@/data//dashboard/dashboard-atoms/dashboard-ui-state";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { toast } from "sonner";

export function useEditUserLocationInterface() {
	const dashboard_view_setter = useSetAtom(dashboard_view_jotai);
	const [user_location_city, user_location_city_setter] = useAtom(
		user_location_city_jotai,
	);
	const [user_location_country, user_location_country_setter] = useAtom(
		user_location_country_jotai,
	);
	const [user_location_snapshot, user_location_snapshot_setter] = useAtom(
		user_location_snapshot_jotai,
	);
	const user_snapshot = useAtomValue(user_snapshot_jotai);
	function editLocation() {
		dashboard_view_setter("edit-location");
	}
	function cancelLocationEdit() {
		user_location_city_setter(user_location_snapshot?.city);
		user_location_country_setter(user_location_snapshot?.country);
		dashboard_view_setter(null);
	}

	async function saveLocationEdit() {
		try {
			dashboard_view_setter(null);
			const { error, location } = await updateUserLocationController(
				user_snapshot.id,
				{
					city: user_location_city,
					country: user_location_country,
				},
			);

			if (error) throw new Error(error);
			else user_location_snapshot_setter(location);
		} catch (error) {
			user_location_city_setter(user_location_snapshot.city);
			user_location_country_setter(user_location_snapshot.country);
			toast.error("Update failed. Please try again later");
			console.error("---saveLocationEdit---\n", error);
		}
	}

	function captureLocationEdit(key: "city" | "country", value: string) {
		if (key === "city") user_location_city_setter(value);
		else user_location_country_setter(value);
	}
	return {
		user_location_city,
		user_location_country,
		editLocation,
		cancelLocationEdit,
		saveLocationEdit,
		captureLocationEdit,
	};
}
