// Redux setup
const { createStore } = Redux;

// Initial state
const initialState = {
    matches: [{ id: generateUniqueId(), score: 0 }],
};

// Utility function to generate unique IDs
function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// Action types
const ADD_MATCH = 'ADD_MATCH';
const DELETE_MATCH = 'DELETE_MATCH';
const UPDATE_SCORE = 'UPDATE_SCORE';
const RESET_SCORES = 'RESET_SCORES';

// Action creators
const addMatch = () => ({ type: ADD_MATCH });
const deleteMatch = (id) => ({ type: DELETE_MATCH, payload: id });
const updateScore = (id, value, isIncrement) => ({
    type: UPDATE_SCORE,
    payload: { id, value, isIncrement },
});
const resetScores = () => ({ type: RESET_SCORES });

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MATCH:
            return {
                ...state,
                matches: [
                    ...state.matches,
                    { id: generateUniqueId(), score: 0 },
                ],
            };
        case DELETE_MATCH:
            return {
                ...state,
                matches: state.matches.filter((match) => match.id !== action.payload),
            };
        case UPDATE_SCORE:
            return {
                ...state,
                matches: state.matches.map((match) => {
                    if (match.id === action.payload.id) {
                        const updatedScore = action.payload.isIncrement
                            ? match.score + action.payload.value
                            : Math.max(0, match.score - action.payload.value);
                        return { ...match, score: updatedScore };
                    }
                    return match;
                }),
            };
        case RESET_SCORES:
            return {
                ...state,
                matches: state.matches.map((match) => ({ ...match, score: 0 })),
            };
        default:
            return state;
    }
};

// Store
const store = createStore(reducer);

// DOM Manipulation and Event Handlers
const render = () => {
    const state = store.getState();
    const matchesContainer = document.querySelector('.all-matches');
    matchesContainer.innerHTML = '';

    state.matches.forEach((match, index) => {
        const matchElement = document.createElement('div');
        matchElement.className = 'match';

        const wrapper = document.createElement('div');
        wrapper.className = 'wrapper';

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.innerHTML = '<img src="./image/delete.svg" alt="" />';
        deleteButton.onclick = () => store.dispatch(deleteMatch(match.id));

        const matchName = document.createElement('h3');
        matchName.className = 'match-name';
        matchName.textContent = `Match ${index + 1}`;

        wrapper.appendChild(deleteButton);
        wrapper.appendChild(matchName);

        const incDecContainer = document.createElement('div');
        incDecContainer.className = 'inc-dec';

        const incrementForm = document.createElement('form');
        incrementForm.className = 'incrementForm';
        incrementForm.innerHTML = `
      <h4>Increment</h4>
      <input type="number" name="increment" class="increment-field" />
    `;
        incrementForm.onsubmit = (e) => {
            e.preventDefault();
            const value = parseInt(e.target.increment.value, 10) || 0;
            store.dispatch(updateScore(match.id, value, true));
            e.target.reset();
        };

        const decrementForm = document.createElement('form');
        decrementForm.className = 'decrementForm';
        decrementForm.innerHTML = `
      <h4>Decrement</h4>
      <input type="number" name="decrement" class="decrement-field" />
    `;
        decrementForm.onsubmit = (e) => {
            e.preventDefault();
            const value = parseInt(e.target.decrement.value, 10) || 0;
            store.dispatch(updateScore(match.id, value, false));
            e.target.reset();
        };

        incDecContainer.appendChild(incrementForm);
        incDecContainer.appendChild(decrementForm);

        const scoreElement = document.createElement('div');
        scoreElement.className = 'numbers';
        scoreElement.innerHTML = `<h2 class="match-total">${match.score}</h2>`;

        matchElement.appendChild(wrapper);
        matchElement.appendChild(incDecContainer);
        matchElement.appendChild(scoreElement);

        matchesContainer.appendChild(matchElement);
    });

    const totalElement = document.querySelector('.total');
    totalElement.textContent = `Total: ${state.matches.reduce(
        (acc, match) => acc + match.score,
        0
    )}`;
};

// Initial render
render();
store.subscribe(render);

// Add event listeners for global buttons
document.querySelector('.add-btn').onclick = () => store.dispatch(addMatch());
document.querySelector('.reset-btn').onclick = () => store.dispatch(resetScores());
