"use client";
import Flex from "@/components/layouts/flex";
import Button from "@/components/ui/button";
import { signUpController } from "@/backend/auth/sign-up.controller";
import { toast } from "sonner";
import { getErrorMessage } from "@/utils/get-error-message";
import { HashLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { generateErrorLog } from "@/utils/generate-error-log";

export default function SignUpForm() {
	const params = useSearchParams();
	const [credentials, setCredentials] = useState({ email: "", name: "" });
	const [isSigningUp, setIsSigningUp] = useState(false);

	useEffect(() => {
		if (params.get("message"))
			toast.info(params.get("message"), { position: "top-center" });
	}, [params]);
	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault();
				try {
					setIsSigningUp(true);
					const json = await signUpController(credentials);
					toast.info(json.message);
					setIsSigningUp(false);
				} catch (error) {
					generateErrorLog("SignUpForm", error, "slient");
					toast.info(JSON.parse(getErrorMessage(error)).message);
					setIsSigningUp(false);
				}
			}}
		>
			<Flex flex='column' className='gap-3'>
				<label htmlFor='name'>Full Name</label>
				<input
					type='text'
					id='name'
					name='name'
					className='outline p-3'
					onChange={(e) =>
						setCredentials({ ...credentials, name: e.target.value })
					}
				/>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					id='email'
					name='email'
					className='outline p-3'
					required
					onChange={(e) =>
						setCredentials({ ...credentials, email: e.target.value })
					}
				/>
				<Button type='submit' htmlProps={{}}>
					Create Account {isSigningUp && <HashLoader size={24} />}
				</Button>
			</Flex>
		</form>
	);
}
