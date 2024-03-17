import MyContents_Image from "../images/projects/My Contents.jpg";
import DeviceMonitoringSystem_Image from "../images/projects/Device Monitoring System.jpg";
import MitraCheck_Image from "../images/projects/Mitra Check.jpg";

export const projects: { name: string, techstack: string[], desc: string, image_metadata: ImageMetadata, image_alt: string; }[] = [
    {
        name: "My Content",
        techstack: [
            "Next.JS",
            "Anime.JS",
            "MongoDB",
            "React"
        ],
        desc: "A media social website that i built with some core features like another media socials have",
        image_metadata: MyContents_Image,
        image_alt: "My Contents Image"
    },
    {
        name: "Device Monitoring System",
        techstack: [
            "Next.JS",
            "MongoDB",
            "React",
            "TypeScript"
        ],
        desc: "A website that can monitoring some devices easily through internet",
        image_metadata: DeviceMonitoringSystem_Image,
        image_alt: "Device Monitoring System Image"
    },
    {
        name: "Mitra Check",
        techstack: [
            "Next.JS",
            "MongoDB",
            "React",
            "TypeScript",
            "Prisma"
        ],
        desc: "Mitra Check is a website that i built for Mitra Industri Vocational Highschool. It's a presency monitoring website that track students presency",
        image_metadata: MitraCheck_Image,
        image_alt: "Mitra Check Image"
    }
];