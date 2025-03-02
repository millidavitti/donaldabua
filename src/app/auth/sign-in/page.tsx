"use client";
import Button from "@/components/ui/button";
import Flex from "@/components/layouts/flex";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useEffect } from "react";

export default function SignIn() {
	const params = useSearchParams();
	useEffect(() => {
		if (params.get("verified"))
			toast.info("Your email has been verified", { position: "bottom-center" });
	}, []);
	return (
		<form>
			<Flex flex='column' className='gap-3'>
				{/* <label htmlFor='name'>Full Name</label>
				<input type='text' id='name' name='name' className='outline p-3' />{" "} */}
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					id='email'
					name='email'
					className='outline p-3'
					required
				/>
				<Button type='submit'>Sign In</Button>
			</Flex>
		</form>
	);
}
