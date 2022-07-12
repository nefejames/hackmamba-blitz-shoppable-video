import { useEffect } from "react"
import { Head, Script } from "blitz"

import shoppable from "app/data"

const Home = () => {
  useEffect(() => {
    const cld = cloudinary
      .videoPlayer("video-player", {
        cloud_name: "nefejames",
        controls: true,
      })
      .width(600)
    cld.source(
      "https://res.cloudinary.com/nefejames/video/upload/v1657587018/Hackmamba/house%20videos/production_ID_4301618_gxbqe7.mp4",
      {
        shoppable: shoppable,
      }
    )
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Blitz App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://unpkg.com/cloudinary-video-player@1.9.0/dist/cld-video-player.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <Script
        src="https://unpkg.com/cloudinary-video-player@1.9.0/dist/cld-video-player.min.js"
        strategy="beforeInteractive"
      />
      <main>
        <h1>Blitz.js Shoppable Video</h1>
        <video controls autoPlay id="video-player"></video>
      </main>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
export default Home
