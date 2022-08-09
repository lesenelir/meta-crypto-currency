import {useCallback, useEffect, useState} from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API

function useFetch({keyword}) {
  const [gifUrl, setGifUrl] = useState('')

  // 获取资源函数
  const fetchGifs = useCallback( async () => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`)
      const {data} = await response.json()

      setGifUrl(data[0]?.images?.downsized_medium?.url);
    } catch (error) {
      // 设置gif
      setGifUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284")
    }
  }, [keyword])

  // 调用fetchGifs函数
  // 此处useEffect 可以进行修改
  useEffect(() => {
    (async function getGifs() {
      if (keyword) await fetchGifs()
    })()
  }, [keyword, fetchGifs])

  return gifUrl
}

export default useFetch
