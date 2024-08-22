import { createSlice } from '@reduxjs/toolkit';
const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        questions: [],
        answers: [],
        currentIndex: 0
    },
    reducers: {
        setQuestions(state, action) {
            state.questions = action.payload;
        },
        setAnswers(state, action) {
            state.answers = action.payload;
        },
        nextQuestion(state) {
            if (state.currentIndex < state.questions.length - 1) {
                state.currentIndex += 1;
            }
        },
        prevQuestion(state) {
            if (state.currentIndex > 0) {
                state.currentIndex -= 1;
            }
        },
        updateAnswer(state, action) {
            const { index, answer } = action.payload;
            if (index >= 0 && index < state.answers.length) {
                state.answers = [
                    ...state.answers.slice(0, index),
                    answer,
                    ...state.answers.slice(index + 1),
                ];
            }
        },
    },
})

export const { setQuestions,setAnswers, nextQuestion, prevQuestion,updateAnswer } = questionsSlice.actions;
export default questionsSlice.reducer;