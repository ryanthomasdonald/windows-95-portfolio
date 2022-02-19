import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface WindowState {
    showStory: boolean;
    showMusic: boolean;
    showTech: boolean;
    showWeb: boolean;
    showChat: boolean;
    showVerse: boolean;
    showKart: boolean;
    showBirDB: boolean;
    showWB: boolean;
    showBJ95: boolean;
    showLarry: boolean;
    showDoom: boolean;
    showDoomReadme: boolean;
    showTodo: boolean;
};

const initialState: WindowState = {
    showStory: false,
    showMusic: false,
    showTech: false,
    showWeb: false,
    showChat: false,
    showVerse: false,
    showKart: false,
    showBirDB: false,
    showWB: false,
    showBJ95: false,
    showLarry: false,
    showDoom: false,
    showDoomReadme: false,
    showTodo: false,
};

export const windowSlice = createSlice({
    name: 'Window',
    initialState,
    reducers: {
        updateShowStory: (state, action: PayloadAction<boolean>) => {
            state.showStory = action.payload
        },
        updateShowMusic: (state, action: PayloadAction<boolean>) => {
            state.showMusic = action.payload
        },
        updateShowTech: (state, action: PayloadAction<boolean>) => {
            state.showTech = action.payload
        },
        updateShowWeb: (state, action: PayloadAction<boolean>) => {
            state.showWeb = action.payload
        },
        updateShowChat: (state, action: PayloadAction<boolean>) => {
            state.showChat = action.payload
        },
        updateShowVerse: (state, action: PayloadAction<boolean>) => {
            state.showVerse = action.payload
        },
        updateShowKart: (state, action: PayloadAction<boolean>) => {
            state.showKart = action.payload
        },
        updateShowBirDB: (state, action: PayloadAction<boolean>) => {
            state.showBirDB = action.payload
        },
        updateShowWB: (state, action: PayloadAction<boolean>) => {
            state.showWB = action.payload
        },
        updateShowBJ95: (state, action: PayloadAction<boolean>) => {
            state.showBJ95 = action.payload
        },
        updateShowLarry: (state, action: PayloadAction<boolean>) => {
            state.showLarry = action.payload
        },
        updateShowDoom: (state, action: PayloadAction<boolean>) => {
            state.showDoom = action.payload
        },
        updateShowDoomReadme: (state, action: PayloadAction<boolean>) => {
            state.showDoomReadme = action.payload
        },
        updateShowTodo: (state, action: PayloadAction<boolean>) => {
            state.showTodo = action.payload
        },
    },
});

export const { updateShowStory, updateShowMusic, updateShowTech, updateShowWeb, updateShowChat, updateShowVerse, updateShowKart, updateShowBirDB, updateShowWB, updateShowBJ95, updateShowLarry, updateShowDoom, updateShowDoomReadme, updateShowTodo } = windowSlice.actions;

export const selectShowStory = (state: RootState) => state.window.showStory;
export const selectShowMusic = (state: RootState) => state.window.showMusic;
export const selectShowTech = (state: RootState) => state.window.showTech;
export const selectShowWeb = (state: RootState) => state.window.showWeb;
export const selectShowChat = (state: RootState) => state.window.showChat;
export const selectShowVerse = (state: RootState) => state.window.showVerse;
export const selectShowKart = (state: RootState) => state.window.showKart;
export const selectShowBirDB = (state: RootState) => state.window.showBirDB;
export const selectShowWB = (state: RootState) => state.window.showWB;
export const selectShowBJ95 = (state: RootState) => state.window.showBJ95;
export const selectShowLarry = (state: RootState) => state.window.showLarry;
export const selectShowDoom = (state: RootState) => state.window.showDoom;
export const selectShowDoomReadme = (state: RootState) => state.window.showDoomReadme;
export const selectShowTodo = (state: RootState) => state.window.showTodo;

export default windowSlice.reducer;