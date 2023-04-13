import classNames from 'classnames';
import styles from './styles.module.css';
import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, InputProps>(({ className, type = 'text', ...rest }, ref) => {
  return <input className={classNames(styles.input, className)} type={type} {...rest} ref={ref} />;
});

Input.displayName = 'Input';

export default Input;
