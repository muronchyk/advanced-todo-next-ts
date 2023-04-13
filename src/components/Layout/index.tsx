import Image from 'next/image';

import ExternalLink from '../ExternalLink';

import styles from './styles.module.css';

interface LayoutProps {
  children: React.ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <div className={styles.title}>
          <h2>Welcome to Advanced Todo App</h2>
          <h5>
            The project is created with <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink> and{' '}
            <ExternalLink href="https://www.typescriptlang.org/">Typescript</ExternalLink>
          </h5>
        </div>
        <div className={styles.logoWrapper}>
          <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
          <div className={styles.thirteen}>
            <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
          </div>
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
