"use client";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import useEditUserSocialsInterface from "@/hooks/interface/use-edit-user-socials-interface";
import { CirclePlus, X } from "lucide-react";
import SelectSocialPlatform from "../select-social-platform";
import Image from "next/image";
import { SOCIAL_PLATFORM_ICONS } from "@/data/constants";
import { SocialPlatforms } from "@/data/atoms/app_data";
import { HashLoader } from "react-spinners";

export default function EditUserSocials() {
	const {
		capture,
		close,
		display,
		save,
		social_account,
		user_socials_snapshot,
		api_task,
	} = useEditUserSocialsInterface();
	return (
		<>
			<Flex flex='column' className='grow gap-3'>
				<Flex className='h-fit items-center justify-between shrink-0'>
					<p className='font-semibold lg:text-2xl'>Socials</p>
					<InteractiveIcon
						callback={() => {
							display();
						}}
					>
						<CirclePlus size={24} />
					</InteractiveIcon>
				</Flex>
				{/* Added Socials */}
				<Flex flex='column' className='gap-3 h-full max-h-[472px]'>
					{user_socials_snapshot.map((social_account) => (
						<Flex
							key={social_account.id}
							className='shrink-0 active:scale-95 transition cursor-pointer bg-light-surface-surface-container gap-3 font-semibold'
							htmlProps={{
								onClick() {},
							}}
						>
							<Image
								src={SOCIAL_PLATFORM_ICONS[social_account.platform]}
								width={24}
								height={24}
								alt={social_account.platform}
							/>
							{social_account.platform}
						</Flex>
					))}
				</Flex>
			</Flex>
			<Overlay
				stateFlag='edit-socials'
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] max-h-[80%] neonScan'
				>
					<Flex className='justify-between items-center shrink-0'>
						<h2 className='text-2xl font-semibold'>Add Socials</h2>
						<InteractiveIcon callback={() => close()}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					<form
						className='flex flex-col gap-3'
						onSubmit={(e) => {
							e.preventDefault();
							save();
						}}
					>
						<SelectSocialPlatform />
						<Flex flex='column' className='gap-3'>
							<label className='text-xl font-semibold shrink-0' htmlFor='title'>
								Profile
							</label>
							<input
								type='url'
								required
								className='outline p-3'
								value={social_account.profile}
								onChange={(e) =>
									capture("profile", e.target.value as SocialPlatforms)
								}
							/>
						</Flex>
						<Button type='submit' className='bg-black text-light-surface'>
							Save{" "}
							{api_task === "add-social-account" && (
								<HashLoader color='#fff' size={24} />
							)}
						</Button>
					</form>
				</Flex>
			</Overlay>
		</>
	);
}
