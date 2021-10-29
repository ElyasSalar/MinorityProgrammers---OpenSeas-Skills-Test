import NavBar from "../components/navbar"
import CoverSection from "../components/cover-section"
import SingleCollectible from '../components/single-collectible'
import Collectibles from '../components/collectibles'
import { collectibles } from "./index"

export default function SingleCollectiblePage(){
  return (
    <>
      <NavBar />
      <CoverSection
        imageName='cover3'
        heading='Muddy Waters'
        description='MusicHeroes collections'
      />
      <SingleCollectible />
      <Collectibles
        heading='From Music Heroes Collection'
        viewAll='#'
        collections={collectibles}
      />
    </>
  )
}