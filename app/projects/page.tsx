import React from 'react';

const projects = [
    {
        title: 'Project One',
        description: 'This is a description of project one.',
        link: 'https://example.com/project-one'
    },
    {
        title: 'Project Two',
        description: 'This is a description of project two.',
        link: 'https://example.com/project-two'
    },
    {
        title: 'Project Three',
        description: 'This is a description of project three.',
        link: 'https://example.com/project-three'
    }
];

const Projects: React.FC = () => {
    return (
        <div>
            <h1>My Projects</h1>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;