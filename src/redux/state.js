let store = {
    _state: {
        profilesPage: {
            posts: [
                { id: 1, message: "Hello, how are you?", likesCount: 17 },
                { id: 1, message: "Today is good weather", likesCount: 23 }
            ],
            newPostText: "kk"

        },
        dialogsPage: {
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

    },
    rerenderentireTree() {
        console.log("State changed");

    },
    addPost(postMessage) {
        let newPost = {
            id: 3,
            message: this._state.profilesPage.newPostText,
            likesCount: 0
        };
        this._state.profilesPage.posts.push(newPost);
        this._state.profilesPage.newPostText = "";
        this.rerenderentireTree();
    },
    updateNewPostText(newText) {
        this._state.profilesPage.newPostText = newText;
        this.rerenderentireTree();
    },
    _subscribe(observer) {
        this.rerenderentireTree = observer;


    },
    getState() {
        return this._state
    }

}

export default store;