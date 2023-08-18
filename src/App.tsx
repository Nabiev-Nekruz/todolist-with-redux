import { useAppDispatch, useAppSelector } from "./hooks/hook";
import { ITodo, addTodo, completeTodo,  editHome,  editTodo,  removeTodo, setText, setTitle,  } from "./reducers/counter";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";


const App = () => {
  
  const dispatch = useAppDispatch()
  const todo = useAppSelector(store=>store.counter.data)
  const title = useAppSelector(store => store.counter.title)
  const modal = useAppSelector(store => store.counter.modal)
  const text = useAppSelector(store => store.counter.text)
  
  

  return (
    <div>
      <input
        value={title}
        onChange={(event) => dispatch(setText(event.target.value))}
        type="text"
        name=""
        id=""
        placeholder="Ok"
      />
      <button onClick={() => dispatch(addTodo())}>Add</button>

      {todo.map((e: ITodo) => {
        return (
          <div key={e.id}>
            <h1
              style={{ textDecoration: e.completed ? "line-through" : "black" }}
            >
              {e.title}
            </h1>
            <button onClick={() => dispatch(removeTodo(e.id))}>Delete</button>
            <input
              type="checkbox"
              onClick={() => dispatch(completeTodo(e.id))}
              name=""
              placeholder="OK"
              id=""
            />
            <button onClick={() => dispatch(editTodo(e))}>Edit</button>
            console.log(e);
            
          </div>
        );
      })}
      {modal ? (
        <Dialog open={modal} aria-describedby="alert-dialog-slide-description">
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <form>
              <input
                type="text"
                value={text}
                onChange={(event) => dispatch(setTitle(event.target.value))}
                name="nabi"
                id=""
              />
              <button onClick={() => dispatch(editHome())}>Submit</button>
            </form>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      ) : null}
    </div>
  );
  
};

export default App;
