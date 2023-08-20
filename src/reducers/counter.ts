import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../store/store";


export interface ITodo {
        id: number;
        title: string;
        completed: boolean;
}



const initialState = {
   data:[
    {
      id: 1,
      title: "Nekruz",
      completed: false,
    },
    {
      id: 2,
      title: "Navruzshoh",
      completed: false,
    },
    ],
    title: <string>"",

    modal:<boolean>false,
    text:<string>"",
    idx:<number | null>null
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        removeTodo: (state, action) => {
            state.data = state.data.filter((e: ITodo) => {
                return e.id != action.payload
            })
        },
        setText: (state, action) => {
            state.title = action.payload
        },
        addTodo: (state) => {
            let obj: ITodo = {
                id: Date.now(),
                title: state.title,
                completed: false
            }
            state.data.push(obj)
            state.title = ""
        },
        completeTodo: (state, action) => {
            state.data = state.data.map((e: ITodo) => {
                if (e.id === action.payload) {
                    e.completed = !e.completed
                }
                return e
            })
        },
        editHome: (state) => {
            let obj:ITodo[] = state.data.map((e: ITodo) => {
                if (state.idx === e.id) {
                    e.title = state.text
                }
                return e
            })
            state.data.concat(obj)
            state.modal=false
      },
        editTodo: (state, action) => {
            state.modal = true
            state.text = action.payload.title
            state.idx = action.payload.id
        },
        setTitle: (state, action) => {
          state.text=action.payload  
        }

  },
});


export const { removeTodo, setText, addTodo, completeTodo, editTodo, setTitle, editHome } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.data;

export default counterSlice.reducer;
