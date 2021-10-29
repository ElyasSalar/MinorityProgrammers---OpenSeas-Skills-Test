import NavBar from "../components/navbar"
import CoverSection from "../components/cover-section"
import Collectibles from "../components/collectibles"
import { collectibles } from "./index"

export default function CollectionsCollectibles(){
  return (
    <>
      <NavBar />
      <CoverSection
        imageName='cover2'
        heading='MusicHeroes'
        description='Verified NFT marketplace for music artists.'
      />
      <Collectibles
        heading='Collectibles'
        viewAll='#'
        collections={collectibles}
      />
    </>
  )
}