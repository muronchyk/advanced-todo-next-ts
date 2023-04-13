import classNames from 'classnames';
import styles from './styles.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'btn' | 'icon';
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ children, variant = 'btn', className, type, onClick }: ButtonProps) {
  return (
    <button className={classNames(styles.button, className, styles[variant])} type={type || 'button'} onClick={onClick}>
      {children}
    </button>
  );
}
