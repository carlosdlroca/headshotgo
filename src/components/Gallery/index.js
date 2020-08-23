import React, { useState } from "react"
import { Grid, Tile } from "./Grid"
import Img from "gatsby-image"
import { Lightbox } from "react-modal-image"
import useGallery from "./useGallery"

const imgStyles = {
  css: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    objectPosition: "center",
    transition: "transform 0.5s, filter 0.25",
    "&:hover": {
      transform: "scale(1.1)",
      filter: "saturate(1.4)",
    },
  },
}

export default function Gallery() {
  const images = useGallery()
  const [shownImageIndex, setShownImageIndex] = useState(null)

  return (
    <div>
      <Grid>
        {images.map((image, idx) => (
          <Tile key={image.id} onClick={() => setShownImageIndex(idx)}>
            <Img alt={image.name} fluid={image.fluid} {...imgStyles} />
          </Tile>
        ))}
      </Grid>
      {shownImageIndex != null && (
        <Lightbox
          hideDownload={true}
          large={images[shownImageIndex].publicURL}
          onClose={() => setShownImageIndex(null)}
        />
      )}
    </div>
  )
}
