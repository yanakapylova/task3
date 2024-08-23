import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { showPopUp } from "../components/popup/PopUpUsersAction";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("http://127.0.0.1:3008/postgress");
  const data = await response.json();

  if (!response.ok) {
    console.log("Пользователя с таким id не существует");
  }

  return [data, response.status];
});

export const fetchUserbyId = createAsyncThunk(
  "user/fetchUserbyId",
  async (id: number) => {
    const response = await fetch(`http://127.0.0.1:3008/postgress/${id}`);
    const data = await response.json();
    return [data, response.status];
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

    if (!response.ok) {
      console.log("Пользователя с таким id не существует");
      return [null, response.status];
    } else {
      const data = await response.json();
      return [
        { name: data.name, isActive: data.isActive, id: data.id },
        response.status,
      ];
    }
  }
);

export const removeUserbyId = createAsyncThunk(
  "user/removeUserbyId",
  async (id: number) => {
    const response = await fetch(`http://127.0.0.1:3008/postgress/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      console.log("Пользователя с таким id не существует");
      return [null, +response.status];
    }
    return [id, +response.status];
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

    if (!response.ok) {
      return [null, response.status];
    } else {
      return [data, response.status];
    }
  }
);

export interface User {
  id: number;
  name: string;
  isActive: boolean;
}

export interface UsersState {
  entities: User[];
  activeUser: User;
  actionStatus: any;
}

const initialState: UsersState = {
  entities: [{ id: 0, name: "Loading name...", isActive: false }],
  activeUser: { id: 0, name: "", isActive: false },
  actionStatus: 0,
};

function showResponsePopUp(state: any, responseStatus: number | null) {
  state.actionStatus = responseStatus;
  showPopUp();
}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      const [data, responseStatus] = action.payload;
      state.entities = data;
    });

    builder.addCase(removeUserbyId.fulfilled, (state, action) => {
      const [id, responseStatus] = action.payload;
      if (id) {
        state.entities = state.entities.filter((entity) => entity.id != id);
      }
      showResponsePopUp(state, responseStatus);
    });

    builder.addCase(createUser.fulfilled, (state, action) => {
      const data: any = action.payload[0];
      const responseStatus: any = action.payload[1];

      if (data) {
        state.entities.push(data);
      }
      showResponsePopUp(state, responseStatus);
    });

    builder.addCase(updateUserNameById.fulfilled, (state, action) => {
      const data: any = action.payload[0];
      const responseStatus: any = action.payload[1];

      if (data) {
        const [id, newName] = data;
        const item: any = state.entities.findIndex(
          (entity) => entity.id === id
        );
        if (item !== -1) {
          state.entities[item]["name"] = newName;
        }
      }
      showResponsePopUp(state, responseStatus);
    });

    builder.addCase(fetchUserbyId.fulfilled, (state, action) => {
      const data: User = action.payload[0];
      const responseStatus: any = action.payload[1];

      if (data) {
        state.activeUser.id = data.id;
        state.activeUser.name = data.name;
        state.activeUser.isActive = data.isActive;
      }

      showResponsePopUp(state, responseStatus);
    });
  },
});

export const usersReducer = usersSlice.reducer;
