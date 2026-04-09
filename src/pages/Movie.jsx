import { getService } from '../API/Api'
import { Card } from '../components/Card'
import { useEffect,useState } from 'react'

export const Movie = ({search})=>{

    const[data,setData]=useState([])

    const getMovieData = async ()=>{
        try {
            const res = await getService()
            setData(res.data.data)
            console.log(res.data.data)
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getMovieData()
    },[])

    const filterData = data.filter((movie)=>
    movie.original_title.toLowerCase().includes(search.toLowerCase())
    )

return <ul>
    {
        filterData.map((curElm)=>{
        return <Card key={curElm.movie_id} MovieData={curElm} ></Card>
        })
    }
</ul>

}

