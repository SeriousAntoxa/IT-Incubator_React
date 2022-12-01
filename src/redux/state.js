let state = {
    dialogsPage: {
        dialogs: [
            { id: "1", name: "Valera" },
            { id: "2", name: "Nikita" },
            { id: "3", name: "Elena" },
            { id: "4", name: "Maria" },
            { id: "5", name: "Andrei" }
          ],
        messages: [
            { id: "1", message: "Hello" },
            { id: "2", message: "Why are you?" },
            { id: "3", message: "Thanks, and you?" }
          ]
    },
    profilePage: {
        posts: [
            { id: "1", message: "some text post 1", likeCounter: 1 },
            { id: "2", message: "some text post 2", likeCounter: 21 },
            { id: "3", message: "some text post 3", likeCounter: 3 },
            { id: "4", message: "some text post 4", likeCounter: 6 }
          ]
    },
    sidebar: {
        friends: []
    }
}

export default state