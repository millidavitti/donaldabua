"use client";
import { signInController } from "@/backend/auth/sign-in.controller";
import Flex from "@/components/layouts/flex";
import Button from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function SignInForm() {
	const params = useSearchParams();
	const [signIn, setSignIn] = useState(false);
	useEffect(() => {
		if (params.get("verified") === "true")
			toast.info("Your email has been verified", { position: "bottom-center" });
	}, [params]);
	return (
		<form
			action={async (formData) => {
				try {
					// setSignIn(true);
					await signInController(formData);
					toast.info("A magic link has been sent");
				} catch (error) {
					console.log("---CreateAccountButton---\n", error);
					toast.info("Unable to sign you in to account at the moment");
				}
			}}
		>
			<Flex flex='column' className='gap-3'>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					id='email'
					name='email'
					className='outline p-3'
					required
				/>
				<Button type='submit' htmlProps={{ disabled: signIn }}>
					Sign In
				</Button>
			</Flex>
		</form>
	);
}
