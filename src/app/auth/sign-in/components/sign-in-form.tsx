"use client";
import { signInController } from "@/backend/auth/sign-in.controller";
import Flex from "@/components/layouts/flex";
import Button from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import { toast } from "sonner";

export default function SignInForm() {
	const params = useSearchParams();
	const [signIn, setSignIn] = useState(false);
	const [formData, setFormData] = useState({ email: "" });

	useEffect(() => {
		if (params.get("status") === "Email verified")
			toast.info("Your email has been verified", { position: "bottom-center" });
	}, [params]);
	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault();
				setSignIn(true);
				try {
					const { status } = await signInController(formData);
					toast.info(status);
					setSignIn(false);
				} catch (error) {
					console.error("---SignInForm---\n", error);
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
					onChange={(e) => setFormData({ email: e.target.value })}
				/>
				<Button type='submit'>
					Sign In {signIn && <HashLoader size={24} />}
				</Button>
			</Flex>
		</form>
	);
}
