import React, { useEffect, useState } from 'react';
import './Select_treatment.css';
import { useDispatch, useSelector } from 'react-redux';
import { setQuestions, nextQuestion, prevQuestion, setAnswers, updateAnswer } from '../redux/question_Slice';
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';

export const Select_treatment = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [treatment, settreament] = useState(0);

    const [modalIsOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions.questions);
    const answers = useSelector(state => state.questions.answers);
    const currentIndex = useSelector(state => state.questions.currentIndex);
    const currentQuestion = questions[currentIndex];
    const currentAnswer = answers[currentIndex] || '';
    const Statement = ['Normal', 'Medium', 'Cretical']
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('Token'); // Retrieve token from localStorage
                const response = await fetch("http://localhost:5000/api/user/treatment", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result.responseData || []);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    const dropdownOptions = [
        { value: 'Select an option', label: 'Select an option' },
        ...data.map(item => ({
            label: item.treatmentName,
            value: item.id
        }))
    ];

    const handleDropdownChange = (event) => {
        const selectedTreatmentId = event.target.value;
        fetchQuestions(selectedTreatmentId);
        settreament(selectedTreatmentId)
    }

    const handleAnswerChange = (event) => {
        const newValue = event.target.value;
        dispatch(updateAnswer({ index: currentIndex, answer: newValue }));
    }

    const fetchQuestions = async (treatmentId) => {
        try {
            const token = localStorage.getItem('Token'); // Retrieve token from localStorage
            const response = await fetch("http://localhost:5000/api/user/question", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ treatmentId })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            const questionsArray = result.responseData.map(data => data.questions);
            const initialAnswers = new Array(questionsArray.length).fill('');

            dispatch(setQuestions(questionsArray));
            dispatch(setAnswers(initialAnswers));

        } catch (error) {
            setError(error.message);
        }
    }
    const AnswersData = async () => {
        try {
            var AnswersDt = []
            const token = localStorage.getItem('Token'); // Retrieve token from localStorage
            answers.map((data, index) => {
                AnswersDt.push({ answers: data, treatmentId: treatment })
            })
            const response = await fetch("http://localhost:5000/api/user/answer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(AnswersDt)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
        }
        catch (error) {
            setError(error.message);
        }
    }
    function getRandomNumber() {
        return Math.floor(Math.random() * 3) + 1;
    }
    return (
        <div className='viewp'>
            <div className='frow'>
                {error && <p>Error: {error}</p>}
                <label style={{ fontSize: '20px' }}>Select Treatment :</label>
                <select className='drop_nt' onChange={handleDropdownChange}>
                    {dropdownOptions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className='questionsec'>
                <h1>Question: {(questions.length - 1 >= currentIndex) && currentIndex + 1}</h1>
                <p>{currentQuestion}</p>
                <textarea
                    value={currentAnswer}
                    name="postContent"
                    rows={4}
                    cols={95}
                    onChange={handleAnswerChange}
                />
                <div className='prebutton'>
                    <div>
                        <Button variant="secondary" onClick={() => dispatch(prevQuestion())} disabled={currentIndex === 0}>
                            Previous
                        </Button>
                    </div>
                    <div>
                        <Button variant="light" onClick={() => (questions.length - 1 >= currentIndex) && dispatch(nextQuestion())} disabled={currentIndex === questions.length - 1}>
                            Next
                        </Button>
                    </div>
                </div>
                <div className='submit'>
                    {/* <Button onClick={() => AnswersData()} disabled={currentIndex === 0}> */}
                    <Button onClick={openModal} disabled={currentIndex === 0}>
                        Submit
                    </Button>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div style={{ fontWeight: '500', fontSize: 30 }}>Your are in {Statement[getRandomNumber()]}</div>
                </Modal>
            </div>


        </div>
    );
}
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        height: '50%',
        backgroundColor: 'red',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};