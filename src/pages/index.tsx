import { useRef, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import classNames from 'classnames';
import Checkbox from '@/components/Checkbox';
import api from '@/services/api';
import { Todo } from '@/types/todo';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useIsMounted } from '@/services/hooks';
import AddIcon from '@/assets/add.svg';
import CloseIcon from '@/assets/close.svg';
import styles from '@/styles/home.module.css';

interface HomeProps {
  items: Todo[];
}

export default function Home({ items }: HomeProps) {
  const mounted = useIsMounted();
  const [todos, setTodos] = useState<Todo[]>(items);
  const [inputActive, setInputActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const resetAddInputValue = () => {
    if (inputRef.current?.value) {
      inputRef.current.value = '';
    }
  };

  const handleAddClick = () => {
    resetAddInputValue();
    setInputActive(!inputActive);
    inputRef.current?.focus();
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!inputRef.current?.value) return;

    setTodos([{ id: +new Date(), title: inputRef.current?.value }, ...todos]);
    resetAddInputValue();
  };

  const handleCloseClick = () => {
    inputRef.current?.blur();
    setInputActive(!inputActive);
  };

  return (
    <>
      <Head>
        <title>Advanced Todo - Home</title>
      </Head>
      <div className={styles.header}>
        <h3>Today Task</h3>
        <Button onClick={handleAddClick}>Add</Button>
      </div>
      <form onSubmit={handleSubmit} className={classNames(styles.form, { [styles.active]: inputActive })}>
        <Input name="add" placeholder="Enter title" ref={inputRef} maxLength={80} />
        <Button variant="icon" type="submit">
          <AddIcon />
        </Button>
        <Button variant="icon" onClick={handleCloseClick}>
          <CloseIcon />
        </Button>
      </form>
      <div className={classNames(styles.todos, styles.animation, { [styles.animationActive]: mounted.current })}>
        {todos.map((i) => (
          <Checkbox key={i.id} name={i.id.toString()}>
            {i.title}
          </Checkbox>
        ))}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const { result } = await api.get('/todos');

  return {
    props: {
      items: result,
    },
  };
};
