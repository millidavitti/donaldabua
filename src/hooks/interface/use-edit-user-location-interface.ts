import { updateUserLocationController } from "@/backend/update-user-location.controller";
import {
	user_jotai,
	user_location_city_jotai,
	user_location_country_jotai,
	user_location_jotai,
} from "@/data/atoms/app_data";
import { edit_profile_jotai } from "@/data/atoms/ui_state";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { toast } from "sonner";

export default function useEditUserLocationInterface() {
	const edit_profile_setter = useSetAtom(edit_profile_jotai);
	const [user_location_city, user_location_city_setter] = useAtom(
		user_location_city_jotai,
	);
	const [user_location_country, user_location_country_setter] = useAtom(
		user_location_country_jotai,
	);
	const location = useAtomValue(user_location_jotai);
	const { id: userId } = useAtomValue(user_jotai);

	function editLocation() {
		edit_profile_setter("edit-location");
	}
	function cancelLocationEdit() {
		user_location_city_setter(location.city);
		user_location_country_setter(location.country);
		edit_profile_setter(null);
	}

	async function saveLocationEdit() {
		try {
			edit_profile_setter(null);
			const { error } = await updateUserLocationController(userId, {
				city: user_location_city,
				country: user_location_country,
			});

			if (error) toast.error("Update failed. Please try again later");
		} catch (error) {
			user_location_city_setter(location.city);
			user_location_country_setter(location.country);
			toast.error("Update failed. Please try again later");
			console.log("---saveLocationEdit---\n", error);
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
