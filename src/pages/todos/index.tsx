import Link from 'next/link';

type Todo = {
  id: string;
  title: string;
};

export default function Todos({ todos }: { todos: Todo[] }) {
  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
          <Link href={`/todos/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const todos = await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json());

  return {
    props: {
      todos,
    },
  };
}
