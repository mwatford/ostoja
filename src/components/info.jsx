import React from "react"
import Header from "./header"
import headersJSON from "@/content/headers.json"
import GoogleMap from "@/components/google-map"
import Icons from "@/components/icons"

const Info = () => {
  return (
    <section id="informacje">
      <Header
        {...headersJSON[0]}
        slot={
          <picture>
            <img src="../../images/header_1.webp" alt="" loading="lazy" />
          </picture>
        }
        slotInside={true}
      ></Header>
      <Icons></Icons>
      <Header
        {...headersJSON[1]}
        slot={
          <picture>
            <img src="../../images/header_2.webp" alt="" loading="lazy" />
          </picture>
        }
        slotInside={true}
      ></Header>
      <GoogleMap></GoogleMap>
      <Header
        {...headersJSON[2]}
        reverse={true}
        slot={
          <div id="price" className="col">
            <h1>TYLKO</h1>
            <h2 className="text--orange">27 zł</h2>
            <h3>
              za m<sup>2</sup>
            </h3>
          </div>
        }
        slotInside={true}
      ></Header>
    </section>
  )
}

export default Info
