import { renderentireTree } from "../render";

let state = {
    profilesPage: {
        posts: [
            { id: 1, message: "Hello, how are you?", likesCount: 17 },
            { id: 1, message: "Today is good weather", likesCount: 23 }
        ]
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

}
export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likesCount: 0
    };
    state.profilesPage.posts.push(newPost);
    renderentireTree(state);
}


export default state;