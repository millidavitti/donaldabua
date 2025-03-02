import { Suspense } from "react";
import SignInForm from "./components/sign-in-form";

export default function SignIn() {
	return (
		<Suspense>
			<SignInForm />
		</Suspense>
	);
}
