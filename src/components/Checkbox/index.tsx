import styles from './styles.module.css';

interface CheckboxProps {
  name: string;
  className?: string;
  defaultChecked?: boolean;
  children: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({ children, name, className, defaultChecked = false, onChange }: CheckboxProps) {
  return (
    <div className={className}>
      <input
        className={styles.input}
        type="checkbox"
        id={name}
        name={name}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <label htmlFor={name} className={styles.label}>
        {children}
      </label>
    </div>
  );
}
