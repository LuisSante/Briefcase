'use client';

import { FolderCard } from '@/components/ui/folder-card';
import { FaChartLine, FaHeartbeat, FaImage, FaLink, FaProjectDiagram } from "react-icons/fa";

export interface ProjectsProps {
    title?: string;
    link?: string;
    linkPage?: string;
    icon?: React.ReactNode;
    iconPage?: React.ReactNode;
    iconResources?: React.ReactNode;
    iconSlides?: React.ReactNode;
    iconVideo?: React.ReactNode;
    description?: string;
    tech?: string;
    hrefResearch?: string;
    hrefSlides?: string;
    hrefExplication?: string;
}

const projects: ProjectsProps[] = [
    {
        title: '',
        link: '',
        icon: < FaProjectDiagram />,
        description: '',
        tech: '',
    },
    {
        title: '',
        link: '',
        icon: < FaImage />,
        description: '',
        tech: '',
    },
    {
        title: '',
        link: '',
        linkPage: '',
        icon: < FaChartLine />,
        description: '',
        tech: '',
        iconPage: <FaLink />
    },
    {
        title: '',
        link: '',
        icon: < FaHeartbeat />,
        description: '',
        tech: '',
    },
];

export function ProjectSection() {
    return (
        <div
            className="mx-auto px-8 pb-8 max-w-5xl"
        // className="text-white"
        >
            <h1 id="projects" className="pt-20 md:pt-32 max-w-5xl font-bold text-2xl text-white md:text-7xl">
                Projects
            </h1>
            <div className={'grid grid-cols-1 gap-6  py-10 md:grid-cols-2 lg:grid-cols-2'}>
                {projects.map((item, idx) => (
                    <div
                        key={idx}
                        className="relative flex flex-col items-start border-white/[0.2] shadow-md shadow-white mx-auto p-4 border rounded-md w-full max-w-full h-[300px]"
                    >
                        <FolderCard {...item} />
                    </div>
                ))}
            </div>
        </div>
    )
}
