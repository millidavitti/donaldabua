import { Profile } from "@/data/atoms/app_data";

export async function getProfile() {
	return {
		hourlyRate: 15,
		availability: "More than 30 hrs/week",
		overview: `My skill set in a nutshell,

Front-End Development: Strong expertise in React, allowing for the creation of dynamic and engaging user interfaces that enhance user experience.

Back-End Development: Proficient in Express.js, with a solid understanding of RESTful APIs and GraphQL, enabling efficient data handling and communication between client and server.

Database Management: Extensive experience with Neo4j, MongoDB, and Postgres, providing the ability to design and implement robust data architectures tailored to specific project needs.

Cloud Services: Knowledgeable in AWS, facilitating the deployment, scaling, and management of applications in a cloud environment.

Advanced Data Techniques: Experienced with Retrieval Augmented Generation (RAG), which enhances data retrieval processes and optimizes application performance for AI applications.`,
		title: "Fullstack Typescript Developer ",
	} as Profile;
}
