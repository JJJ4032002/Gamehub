import React from "react";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { selectAllArtworks } from "../features/artworks/artworksSlice";
import { useSelector } from "react-redux";
import { toggleVisible, addLikes } from "../features/artworks/artworksSlice";
import { Fab, Button, ButtonGroup } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "@docusaurus/Link";
const ArtWorkImage = ({ url, key }) => <img key={key} src={useBaseUrl(url)} />;
function ArtGallery() {
  const dispatch = useDispatch();
  const photos = useSelector(selectAllArtworks);

  return (
    <Layout>
      <Container>
        <h1 style={{ marginTop: "1em" }}>Art Gallery</h1>
        <div className="image-grid" style={{ marginTop: "30px" }}>
          {photos.map((image, index) => (
            <div
              onMouseEnter={() => {
                dispatch(toggleVisible(image));
              }}
              onMouseLeave={() => {
                dispatch(toggleVisible(image));
              }}
              className="image-item"
            >
              <ArtWorkImage url={image.src} key={index} />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0,0,0,0.5)",
                  opacity: image.visible ? 1 : 0,
                  transition: "opacity 200ms ease-in",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "0.5em",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    endIcon={<LaunchIcon></LaunchIcon>}
                  >
                    Artist
                  </Button>
                  <ButtonGroup variant="contained">
                    <Button
                      onClick={() => {
                        dispatch(addLikes(image));
                      }}
                    >
                      Like
                    </Button>
                    <Button>{image.likes}</Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}

// const photos = [
//   {
//     src: "/img/image1.png",
//     id: 1,
//     width: 4,
//     height: 3,
//     visible: false,
//   },
//   {
//     src: "/img/image2.jpeg",
//     id: 2,
//     width: 4,
//     height: 3,
//     visible: false,
//   },
//   {
//     src: "/img/image3.jpeg",
//     id: 3,
//     width: 4,
//     height: 3,
//     visible: false,
//   },
//   {
//     src: "/img/image4.jpeg",
//     id: 4,
//     width: 4,
//     height: 3,
//     visible: false,
//   },
//   {
//     src: "/img/image5.png",
//     id: 5,
//     width: 4,
//     height: 3,
//     visible: false,
//   },
//   {
//     src: "/img/image6.jpeg",
//     id: 6,
//     width: 4,
//     height: 3,
//     visible: false,
//   },
//   {
//     src: "/img/image7.jpeg",
//     id: 7,
//     width: 4,
//     height: 3,
//     visible: false,
//   },
//   {
//     src: "/img/image8.jpeg",
//     id: 8,
//     width: 4,
//     height: 3,
//     visible: false,
//   },
//   {
//     src: "/img/image9.gif",
//     id: 9,
//     width: 4,
//     height: 3,
//     visible: false,
//   },
//   {
//     src: "/img/image10.jpeg",
//     id: 10,
//     width: 4,
//     height: 3,
//     visible: false,
//   },
// ];

export default ArtGallery;
