import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "./User";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("http://127.0.0.1:3008/postgress");
  const data = await response.json();
  return data;
});

export const removeUserbyId = createAsyncThunk(
  "user/removeUserbyId",
  async (id: number) => {
    const response = await fetch(`http://127.0.0.1:3008/postgress/${id}`, {
      method: "DELETE",
    });
    console.log(response)
    if (!response.ok) {
      console.log("Пользователя с таким id не существует")
    }
    return id;
  }
);

export const createUser = createAsyncThunk(
  "user/createUser",
  async (name: string) => {
    const response = await fetch(`http://127.0.0.1:3008/postgress/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        isActive: true,
      }),
    });
    return { name: name, isActive: true, id: 0 };
  }
);

export const updateUserNameById = createAsyncThunk(
  "user/updateUserNameById",
  async (data: any[]) => {
    const [id, newName] = data;

    const response = await fetch(`http://127.0.0.1:3008/postgress/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newName,
      }),
    });
    return data;
  }
);

export interface UsersState {
  entities: User[];
}

const initialState: UsersState = {
  entities: [{ id: 0, name: "Loading name...", isActive: false }],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.entities = action.payload;
    });

    builder.addCase(removeUserbyId.fulfilled, (state, action) => {
      state.entities = state.entities.filter(
        (entity) => entity.id != action.payload
      );
    });

    builder.addCase(createUser.fulfilled, (state, action) => {
      state.entities.push(action.payload);
    });

    builder.addCase(updateUserNameById.fulfilled, (state, action) => {
      const [id, newName] = action.payload;
      const item: any = state.entities.findIndex((entity) => entity.id === id);
      state.entities[item]["name"] = newName;
    });
  },
});

export const usersReducer = usersSlice.reducer;
