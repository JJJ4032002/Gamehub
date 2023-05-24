import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    src: "/img/image1.png",
    id: 1,
    width: 4,
    height: 3,
    visible: false,
    likes: 0,
    name: "Half Life",
  },
  {
    src: "/img/image2.jpeg",
    id: 2,
    width: 4,
    height: 3,
    visible: false,
    likes: 0,
    name: "Elden ring",
  },
  {
    src: "/img/image3.jpeg",
    id: 3,
    width: 4,
    height: 3,
    visible: false,
    likes: 0,
    name: "Elden Ring",
  },
  {
    src: "/img/image4.jpeg",
    id: 4,
    width: 4,
    height: 3,
    visible: false,
    likes: 0,
    name: "Red Dead Redemption 2",
  },
  {
    src: "/img/image5.png",
    id: 5,
    width: 4,
    height: 3,
    visible: false,
    likes: 0,
    name: "Example",
  },
  {
    src: "/img/image6.jpeg",
    id: 6,
    width: 4,
    height: 3,
    visible: false,
    likes: 0,
    name: "Assasins creed",
  },
  {
    src: "/img/image7.jpeg",
    id: 7,
    width: 4,
    height: 3,
    visible: false,
    likes: 0,
    name: "Doom",
  },
  {
    src: "/img/image8.jpeg",
    id: 8,
    width: 4,
    height: 3,
    visible: false,
    likes: 0,
    name: "Example",
  },
  {
    src: "/img/image9.gif",
    id: 9,
    width: 4,
    height: 3,
    visible: false,
    likes: 0,
    name: "example",
  },
  {
    src: "/img/image10.jpeg",
    id: 10,
    width: 4,
    height: 3,
    visible: false,
    likes: 0,
    name: "example",
  },
  {
    src: "/img/Spiderman.jpg",
    id: 11,
    width: 4,
    height: 3,
    visible: false,
    likes: 7,
    name: "Spiderman",
  },
  {
    src: "/img/unchartered.jpg",
    id: 12,
    width: 4,
    height: 3,
    visible: false,
    likes: 8,
    name: "Unchartered 4",
  },
  {
    src: "/img/ghost.jpg",
    id: 13,
    width: 4,
    height: 3,
    visible: false,
    likes: 9,
    name: "Ghost of Tshushima",
  },
  {
    src: "/img/GodOfWar.jpg",
    id: 14,
    width: 4,
    height: 3,
    visible: false,
    likes: 10,
    name: "God Of War",
  },
];

const artworksSlice = createSlice({
  name: "artworks",
  initialState,
  reducers: {
    addLikes: (state, action) => {
      let arrayItem = state.find((item) => item.id === action.payload.id);
      arrayItem.likes = arrayItem.likes + 1;
    },
    toggleVisible: (state, action) => {
      let arrayItem = state.find((item) => item.id === action.payload.id);
      arrayItem.visible = !arrayItem.visible;
    },
  },
});
export const selectAllArtworks = (state) => state.artworks;
export const { addLikes, toggleVisible } = artworksSlice.actions;

export default artworksSlice.reducer;
