"use client";
import Flex from "@/components/layouts/flex";
import Button from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "sonner";

export default function SignInForm() {
	const params = useSearchParams();
	useEffect(() => {
		if (params.get("verified"))
			toast.info("Your email has been verified", { position: "bottom-center" });
	}, [params]);
	return (
		<form>
			<Flex flex='column' className='gap-3'>
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
