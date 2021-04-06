import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProjectState {
  projectName: string;
  id: string;
}

const initialState: ProjectState = {
  projectName: '',
  id: '',
};

function idMaker(projectName: string) {
  const a = Math.floor(Math.random() * 100);
  const b = projectName[0];
  return b + a;
}

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjectName: (state, action: PayloadAction<string>) => {
      state.projectName = action.payload;
    },
    setId: (state) => {
      state.id = idMaker(state.projectName);
    },
  },
});

export const { setProjectName, setId } = projectSlice.actions;

export default projectSlice.reducer;
