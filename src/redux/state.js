
const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
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

    _renderEntireTree() {
        console.log("State changed");
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._renderEntireTree = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 3,
                    message: this._state.profilesPage.newPostText,
                    likesCount: 0
                };

                this._state.profilesPage.posts.push(newPost);
                this._state.profilesPage.newPostText = "";

                this._renderEntireTree(this._state)

                break;

            case UPDATE_NEW_POST_TEXT:

                this._state.profilesPage.newPostText = action.newText;
                this._renderEntireTree(this._state);

                break;
            default:
                console.log('no entry');

        }
    }
}


export const addPostActionCreater = () => ({ type: ADD_POST })
};

export const updateNewPostTextActionCreator = (text) => (
    {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    })

export default store;
window.store = store;