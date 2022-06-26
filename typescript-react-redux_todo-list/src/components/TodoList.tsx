import React, { useEffect }  from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const UserList: React.FC = () => {
  const { todos, isLoading, error, page, limit } = useTypedSelector((state) => state.todo);
  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1,2,3,4,5];

  useEffect(() => { fetchTodos(page, limit) }, [page]);

  if (isLoading) return <h1>Идет загрузка...</h1>
  if (error) return <h1>{ error }</h1>
  return (
    <div>
      { todos.map((todo) => <div key={ todo.id }>{todo.id}: { todo.title }</div>) }
      <div>
        {pages.map((p) =>
          <span key={ p }
                style={{paddingRight: 10, fontWeight: (p === page) ? '700' : '400'}}
                onClick={ () => { setTodoPage(p) } }
          >{ p }</span>
        )}
      </div>
    </div>
  );
};

export default UserList;
