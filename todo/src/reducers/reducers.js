export const initialState = {
    tasks: [
        {
            id: 1,
            task: 'Mow the lawn',
            completed: false,
        },
        {
            id: 2,
            task: 'Vacuum the floor',
            completed: false,
        },
        {
            id: 3,
            task: 'Brush the dog',
            completed: false,
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const newItem = {
                id: action.payload.id + 1,
                name: action.payload,
                completed: false,
            }
            return {
                ...state,
                tasks: [...state.tasks, newItem]
            }
            case 'TOGGLE_ITEM':
                return {
                    ...state,
                    tasks: state.tasks.map(item => {
                        if (action.payload === item.id) {
                            return {
                                ...item,
                                completed: !item.completed
                            }
                        }
                        return item
                    })
                }
            case 'CLEAR_COMPLETED':
                return {
                    ...state,
                    tasks: state.tasks.filter(item => !item.completed)
                }
            default:
                return state
    }
}