import styles from './styles.module.css';

interface ExternalLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function ExternalLink({ children, href }: ExternalLinkProps) {
  return (
    <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
