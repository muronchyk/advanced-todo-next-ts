import { GetStaticPaths, GetStaticProps } from 'next';

type Todo = {
  id: string;
  title: string;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const todo: Todo = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`).then((response) =>
    response.json()
  );

  return {
    props: {
      ...todo,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const todos: Todo[] = await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json());

  const paths = todos.map((todo) => ({
    params: { id: todo.id.toString() },
  }));

  return { paths, fallback: false };
};

export default function TodoDetails({ id, title }: Todo) {
  return (
    <>
      <div>{id}</div>
      <div>{title}</div>
    </>
  );
}
