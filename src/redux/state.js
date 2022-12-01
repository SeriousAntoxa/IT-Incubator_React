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
            { id: "1", message: "Hello", who: 0 },
            { id: "1", message: "Hy", who: 1 },
            { id: "2", message: "Why are you?", who: 0 },
            { id: "3", message: "Thanks, and you?", who: 1 },
            { id: "3", message: "I'am finny!)", who: 0 },
            { id: "3", message: "Where are you from?", who: 0 }
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
        friends: [
            { id: "1", name: "Elena" },
            { id: "2", name: "Maria" },
            { id: "3", name: "Andrei" }
        ]
    }
}

export const addPost = (postMessage) => {
    let newPost = { id: "5", message: postMessage, likeCounter: 0 }
    state.profilePage.posts.push(newPost)
}

export default state