let initialState = {
    friends: [
        { id: "1", name: "Elena" },
        { id: "2", name: "Maria" },
        { id: "3", name: "Andrei" },
      ],
}

const sidebarReducer = (state = initialState, action) => {
    return { ...state }
}

export default sidebarReducer