import api from '@/services/api';
import { Todo } from '@/types/todo';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  result: Todo[];
};

const mockedTodos = [
  { id: 1, title: 'delectus aut autem' },
  { id: 2, title: 'quis ut nam facilis et officia qui' },
  { id: 3, title: 'fugiat veniam minus' },
  { id: 4, title: 'et porro tempora' },
  { id: 5, title: 'laboriosam mollitia et enim quasi adipisci quia provident illum' },
  { id: 6, title: 'qui ullam ratione quibusdam voluptatem quia omnis' },
  { id: 7, title: 'illo expedita consequatur quia in' },
  { id: 8, title: 'quo adipisci enim quam ut ab' },
  { id: 9, title: 'molestiae perspiciatis ipsa' },
  { id: 10, title: 'illo est ratione doloremque quia maiores aut' },
  { id: 11, title: 'vero rerum temporibus dolor' },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // const list: Todo[] = await api.get('https://jsonplaceholder.typicode.com/todos');

  res.status(200).json({ result: mockedTodos });
}
