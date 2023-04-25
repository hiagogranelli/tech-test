import useSWR from 'swr'

const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '2c3d78dd77mshd307142bfdd9a0cp199408jsn6d780c578465',
		'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
	}
};

export function useFetch<Data = any>(url: string) {
 const {data, error} = useSWR<Data>(url, async url => {
		const response = await fetch(url, options);
		const data = await response.json();

		return data
 })

 return {data, error}
}