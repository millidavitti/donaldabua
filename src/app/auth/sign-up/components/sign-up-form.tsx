"use client";
import Flex from "@/components/layouts/flex";
import Button from "@/components/ui/button";
import { signUpController } from "@/backend/auth/sign-up.controller";
import { toast } from "sonner";
import { getErrorMessage } from "@/utils/get-error-message";
import { HashLoader } from "react-spinners";
import { useState } from "react";

export default function SignUpForm() {
	const [formData, setFormData] = useState({ email: "", name: "" });
	const [signUp, setSignUp] = useState(false);
	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault();
				try {
					setSignUp(true);
					await signUpController(formData);
					setSignUp(false);
					toast.info("A verification email has been sent");
				} catch (error) {
					setSignUp(false);
					console.error("---CreateAccountButton---\n", error);
					if (getErrorMessage(error).includes("duplicate"))
						toast.info("Email already exists. Sign in");
					else toast.info("Unable to create your account at the moment ");
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
					onChange={(e) => setFormData({ ...formData, name: e.target.value })}
				/>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					id='email'
					name='email'
					className='outline p-3'
					required
					onChange={(e) => setFormData({ ...formData, email: e.target.value })}
				/>
				<Button type='submit' htmlProps={{}}>
					Create Account {signUp && <HashLoader size={24} />}
				</Button>
			</Flex>
		</form>
	);
}
