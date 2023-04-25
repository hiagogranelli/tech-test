import Image from "next/image"
import Link from "next/link"
import { useFetch } from "../hooks/useFetch"

interface Game {
  id: number
  title: string
  thumbnail: string
  short_description: string
  game_url: string
  genres: string
  platform: string
  publisher: string
  developer: string
  release_date: string
}

export default function Home() {
  const {data} = useFetch<Game[]>('https://mmo-games.p.rapidapi.com/games')

  if(!data) {
    return <div>Loading...</div>
  }

  return (
    <>
      {data.map((game) => (
        <div key={game.id} className="flex flex-col items-center p-2 bg-gray-100 m-4 rounded-lg shadow-md">
          <Image src={game.thumbnail} alt={game.title} width={200} height={200}></Image>
          <h2 className="text-lg">{game.title}</h2>
          <Link href={`/games/${game.id}`} className="underline">Go to page</Link>
        </div>
      ))}
    </>
  )
}
