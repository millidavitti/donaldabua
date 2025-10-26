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
		if (params.get("message"))
			toast.info(params.get("message"), { position: "top-center" });
	}, [params]);
	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault();
				setSignIn(true);
				try {
					const json = await signInController(formData);
					toast.info(json?.message);
					setSignIn(false);
				} catch (error) {
					setSignIn(false);
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
					className='outline-solid p-3'
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
