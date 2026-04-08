import { getService } from '../API/Api'
import { Card } from '../components/Card'
import { useEffect,useState } from 'react'

export const Movie = ()=>{

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
return <ul>
    {
        data.map((curElm)=>{
        return <Card key={curElm.movie_id} MovieData={curElm} ></Card>
        })
    }
</ul>

}

