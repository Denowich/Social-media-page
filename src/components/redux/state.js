let rerenderEntireTree = () => {
  console.log("State changed");
};

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Welcome my friends?", likesCount: 12 },
      { id: 2, message: "Hello! My name is Den!", likesCount: 15 },
    ],
    newPostText: "it-kamasutra.com",
  },

  dialogsPage: {
    messages: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Where are you from?" },
      { id: 4, message: "Yo!" },
      { id: 5, message: "Yo!" },
      { id: 6, message: "Yo!" },
    ],
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Victor" },
      { id: 6, name: "Valera" },
    ],
  },
};
window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = " ";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};
export default state;
