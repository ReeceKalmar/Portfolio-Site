// Header.tsx
import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className={styles.navContainer}>
            <nav className={styles.lhTextContainer}>
                <div className={styles.nameText}>ReeceKalmar();</div>
            </nav>
            <Image className={styles.centerLogo} src="/arch.png" alt="Logo" width={96} height={96} />
            <nav className={styles.rhTextContainer}>
                <div className={styles.resumeText}>Resume</div>
                <div className={styles.projectText}>Projects</div>
            </nav>
        </header>
    );
};

export default Header;