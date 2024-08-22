import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from './question_Slice';
const store = configureStore({
    reducer: {
        questions: questionsReducer,
        answers: questionsReducer
    }
});
export default store;