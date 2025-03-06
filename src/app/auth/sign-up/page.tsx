import { Suspense } from "react";
import SignUpForm from "./components/sign-up-form";

export default function SignUp() {
	return (
		<Suspense>
			<SignUpForm />
		</Suspense>
	);
}
