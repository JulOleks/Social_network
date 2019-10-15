let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hello, how are you?", likesCount: 17 },
            { id: 1, message: "Today is good weather", likesCount: 23 }
        ]
    },
    messagesPage: {
        dialogs: [{ id: 1, name: "Den" },
        { id: 2, name: "Karen" },
        { id: 3, name: "Sun" },
        { id: 4, name: "Sam" }
        ],
        messages: [{ id: 1, message: "hi" },
        { id: 2, message: "Its goo idea" },
        { id: 3, message: "Nice react" }
        ]
    }

}
export default state;