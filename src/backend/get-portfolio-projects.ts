import { PortfolioProjectData } from "@/data/atoms/app_data";
import { createId } from "@paralleldrive/cuid2";

export async function getPortfolioProjects() {
	return [
		{
			id: createId(),
			title: "Triboelectric Effect: How It Works",
			description:
				"The triboelectric effect is the phenomenon where certain materials become electrically charged when they are rubbed together",
			thumbnail:
				"https://res.cloudinary.com/torch-cms-media/image/upload/v1678384099/Yoga_for_Mind_and_Body_yibumc.jpg",
			techStack: [],
			content: [
				{
					id: "gkro954n5288rh9s6iohpzy3",
					url: "https://res.cloudinary.com/torch-cms-media/image/upload/v1657611196/god_of_war_2018_video_game_wallpaper_1366x768_0ab2e9648c.jpg",
					position: 0,
					type: "image",
				},
				{
					id: "ia2luzxailj8i7y13vdp1kqi",
					markdown:
						"### **Triboelectric Effect: How It Works**  \n\nThe **triboelectric effect** is the phenomenon where certain materials become electrically charged when they are rubbed together. This happens due to the transfer of **electrons** from one material to another. The material that **loses electrons** becomes **positively charged**, and the material that **gains electrons** becomes **negatively charged**.  \n\n---\n\n### **Triboelectric Series**  \nThe **triboelectric series** is a list of materials ranked by their tendency to gain or lose electrons.  \n\n- **Materials higher in the series** lose electrons and become **positively charged** (e.g., glass, wool, human hair).  \n- **Materials lower in the series** gain electrons and become **negatively charged** (e.g., rubber, plastic, Teflon).  \n\n#### **Simplified Triboelectric Series (From Positive to Negative Charge Tendency)**  \n1. **Air**  \n2. **Human Skin**  \n3. **Rabbit Fur**  \n4. **Glass**  \n5. **Human Hair**  \n6. **Nylon**  \n7. **Wool**  \n8. **Silk**  \n9. **Paper**  \n10. **Cotton**  \n11. **Wood**  \n12. **Amber**  \n13. **Rubber**  \n14. **Plastic (PVC, Vinyl)**  \n15. **Teflon**  \n\nIf you rub any material **higher in the list** against a material **lower in the list**, the one **higher loses electrons** (becomes positive), and the one **lower gains electrons** (becomes negative).  \n\n---\n\n### **Real-World Examples of the Triboelectric Effect**  \n\n1. **Rubbing a balloon on hair** → Hair becomes **positively charged**, balloon **negatively charged**.  \n2. **Walking on a carpet and touching a doorknob** → Your body picks up electrons from the carpet and discharges when you touch metal.  \n3. **Plastic comb attracting paper** → The comb **gains electrons**, making it attract small paper bits.  \n4. **Clothes sticking together after drying** → Fabrics transfer charge due to friction in the dryer.  \n\n---\n\n### **Factors That Affect the Triboelectric Effect**  \n\n1. **Material Type** – Different materials have different tendencies to gain or lose electrons.  \n2. **Surface Roughness** – Smoother surfaces transfer charge less efficiently than rough surfaces.  \n3. **Humidity** – High humidity reduces charge buildup because moisture helps neutralize charges.  \n4. **Contact Pressure** – More pressure can enhance charge transfer.  \n5. **Temperature** – Higher temperatures can sometimes increase electron movement.  \n\n---\n\n### **Practical Applications of the Triboelectric Effect**  \n\n- **Electrostatic Precipitators** – Used in industries to remove dust from exhaust gases.  \n- **Xerography (Photocopiers and Laser Printers)** – Uses static electricity to transfer toner onto paper.  \n- **Touchscreens** – Some capacitive touchscreens work using triboelectric principles.  \n- **Energy Harvesting** – Researchers are developing **triboelectric nanogenerators (TENGs)** to convert mechanical energy into electricity.  \n\nWould you like a **deeper explanation** on a specific part, such as **triboelectric nanogenerators**, charge transfer physics, or more real-world applications?",
					position: 1,
					type: "text",
				},
			],
		},
	] as PortfolioProjectData[];
}
