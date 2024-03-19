import MyContents_Image from "../images/projects/My Contents.jpg";
import MyContents_Image_1 from "../images/projects/My Contents/MyContents_1.jpg";
import MyContents_Image_2 from "../images/projects/My Contents/MyContents_2.jpg";
import MyContents_Image_3 from "../images/projects/My Contents/MyContents_3.jpg";
import MyContents_Image_4 from "../images/projects/My Contents/MyContents_4.jpg";

import DeviceMonitoringSystem_Image from "../images/projects/Device Monitoring System.jpg";
import DeviceMonitoringSystem_Image_1 from "../images/projects/Device Monitoring System/DeviceMonitoringSystem_1.jpg";
import DeviceMonitoringSystem_Image_2 from "../images/projects/Device Monitoring System/DeviceMonitoringSystem_2.jpg";
import DeviceMonitoringSystem_Image_3 from "../images/projects/Device Monitoring System/DeviceMonitoringSystem_3.jpg";
import DeviceMonitoringSystem_Image_4 from "../images/projects/Device Monitoring System/DeviceMonitoringSystem_4.jpg";

import MitraCheck_Image from "../images/projects/Mitra Check.jpg";
import MitraCheck_Image_1 from "../images/projects/Mitra Check/MitraCheck_1.jpg";
import MitraCheck_Image_2 from "../images/projects/Mitra Check/MitraCheck_2.jpg";
import MitraCheck_Image_3 from "../images/projects/Mitra Check/MitraCheck_3.jpg";
import MitraCheck_Image_4 from "../images/projects/Mitra Check/MitraCheck_4.jpg";

export const projects: {
    name: string,
    url: string,
    techstack: string[],
    desc: string,
    full_desc: string,
    main_image: ImageMetadata,
    image_alt: string,
    additional_images: [string, ImageMetadata][],
    core_features: string[],
    start_year: string,
    time: string,
    tools: string[];
}[] = [ /// KURANG TAMBAHIN ADDITIONAL IMAGES YA WAN!
        {
            name: "My Content",
            url: "my_content",
            techstack: [
                "Next.JS",
                "Anime.JS",
                "MongoDB",
                "React"
            ],
            desc: "A media social website that i built with some core features like another media socials have",
            full_desc: "An online social media website created with Next.JS + MongoDB. It has some core features like create post, see another users posts, delete post, like post, sign up/log in system, add/remove friend and others. It's a fun project! It improves my coding skills so much!",
            main_image: MyContents_Image,
            image_alt: "My Contents Image",
            core_features: [
                "Create Post",
                "See Post",
                "Delete Post",
                "Sign Up / Log In System",
                "Add Friends",
                "Like Post"
            ],
            start_year: "2024",
            time: "14 Days",
            tools: [
                "VS Code",
                "Chrome Inspector",
                "Thunder Client",
                "MongoDB Compass"
            ],
            additional_images: [["(home) /", MyContents_Image_1], ["/friends", MyContents_Image_2], ["/user/[user_id]", MyContents_Image_3], ["/post/[post_id]", MyContents_Image_4]]
        },
        {
            name: "Device Monitoring",
            url: "device_monitoring",
            techstack: [
                "Next.JS",
                "MongoDB",
                "React",
                "TypeScript"
            ],
            desc: "A website that can monitoring some devices at once easily through internet",
            full_desc: "Device Monitoring System. Website for monitoring devices through network. Because it connected to my local network i added wemos d1 r2 that can send data through api so that you can control LED through internet. Btw, it's my first website built with Next.JS",
            main_image: DeviceMonitoringSystem_Image,
            image_alt: "Device Monitoring System Image",
            core_features: [
                "Monitoring Device",
                "Fast And Multi Platform",
                "Easy and Simple UI"
            ],
            start_year: "2024",
            time: "15 Days",
            tools: [
                "VS Code",
                "Chrome Inspector",
                "Thunder Client",
                "MongoDB Compass"
            ],
            additional_images: [["/", DeviceMonitoringSystem_Image_1], ["/add", DeviceMonitoringSystem_Image_2], ["/add", DeviceMonitoringSystem_Image_3], ["/device/[device_id]", DeviceMonitoringSystem_Image_4]]
        },
        {
            name: "Mitra Check",
            url: "mitra_check",
            techstack: [
                "Next.JS",
                "MongoDB",
                "React",
                "TypeScript",
                "Prisma"
            ],
            desc: "Mitra Check is a website that i built for Mitra Industri Vocational Highschool. It's a presency monitoring website that track students presency",
            full_desc: "A website that i build for school. It's a students attendance monitoring website that i built with Next.JS + MongoDB + Prisma. It has some features that help tracking students like seeing who are presence/absence to the class, seeing how many presence a student has in one week. And it's integrated with webhooks that connected to my another project called online presency device that can detects and reads an id card and update a student data on database that match the id card.",
            main_image: MitraCheck_Image,
            image_alt: "Mitra Check Image",
            core_features: [
                "Presency Tracking",
                "Integrated with Webhook",
                "Easy to Use"
            ],
            start_year: "2024",
            time: "7 Days",
            tools: [
                "VS Code",
                "Chrome Inspector",
                "Thunder Client",
                "MongoDB Compass",
                "Lighthouse",
                "Web Vitals Chrome Extension"
            ],
            additional_images: [["/dashboard", MitraCheck_Image_1], ["/dashboard", MitraCheck_Image_2], ["/student/[student_id]", MitraCheck_Image_3], ["/student/[student_id]", MitraCheck_Image_4]]
        }
    ];



import Github_Icon from "../images/icons/github.png";
import LinkedIn_Icon from "../images/icons/linkedin.png";
import Instagram_Icon from "../images/icons/instagram.png";
import StackOverflow_Icon from "../images/icons/stackoverflow.png";

export const links: {
    name: string,
    url: string,
    icon: ImageMetadata;
}[] = [
        {
            name: "Github",
            url: "https://github.com/iwansal64",
            icon: Github_Icon
        },
        {
            name: "StackOverflow",
            url: "https://stackoverflow.com/users/17246477/iwantz",
            icon: StackOverflow_Icon
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/iwan_wkwkw/",
            icon: Instagram_Icon
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/ridwan-setiawan-7477672ba/",
            icon: LinkedIn_Icon
        }
    ];