import Image from "next/image";
import Link from "next/link";

const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '2c3d78dd77mshd307142bfdd9a0cp199408jsn6d780c578465',
		'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
	}
};

export default function Game({data}) {
	console.log(data);
	
 return (
	<div className="flex flex-col items-center">
		<Image src={data.thumbnail} alt={data.title} width={400} height={400}></Image>
		<h1 className="text-2xl">{data.title}</h1>
		<p className="text-center">{data.short_description}</p>
		<p>Developer: {data.developer}</p>

		<Link href="/">Back to home</Link>
	</div>

 )
}

export async function getStaticProps({params}) {
	const response = await fetch(`https://mmo-datas.p.rapidapi.com/game?id=${params.id}`, options)

	const data = await response.json()

	return {
		props: {
			data
		}
	}
}
export async function getStaticPaths() {
	const response = await fetch('https://mmo-games.p.rapidapi.com/games', options)

	const data = await response.json()

	const paths = data.map(game => {
		return {
			params: {
				id: game.id.toString(),
			}
		}
	})

	return {
		paths,
		fallback: false
	}
}