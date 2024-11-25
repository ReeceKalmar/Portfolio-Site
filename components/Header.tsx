// Header.tsx
import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
import localFont from 'next/font/local';

export const caskaydiaCove = localFont({
    src: [
        {
            path: './fonts/CaskaydiaCoveNerdFont-Regular.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-caskaydia-cove',
});


const Header: React.FC = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.navContainer}>
                <nav className={styles.lhTextContainer}>
                    <div className={styles.nameText}>ReeceKalmar();</div>
                </nav>
                <Image className={styles.centerLogo} src="/arch.png" alt="Logo" width={96} height={96} />
                <nav className={styles.rhTextContainer}>
                    <div className={styles.resumeText}>Resume</div>
                    <div className={styles.projectText}>Projects</div>
                </nav>
            </div>
        </header>
    );
};

export default Header;