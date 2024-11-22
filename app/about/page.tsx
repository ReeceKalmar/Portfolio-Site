import React from 'react';

const About: React.FC = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>About Me</h1>
            <p>
                Hello! My name is [Your Name]. I am a passionate software developer with experience in building web applications using modern technologies like React, TypeScript, and Node.js.
            </p>
            <p>
                I enjoy solving complex problems and continuously learning new things. In my free time, I like to contribute to open source projects, read tech blogs, and explore new programming languages.
            </p>
            <p>
                Feel free to connect with me on <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a> or check out my projects on <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
        </div>
    );
};

export default About;