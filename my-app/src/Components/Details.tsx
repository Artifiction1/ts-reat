import { useState, useEffect } from "react";
import {News} from '../types/News'
import { useParams } from "react-router-dom"
import { stringify } from "querystring";
import { Container } from "react-bootstrap";

const Details = () => {
    const params = useParams()
    let id = params.id 
    const [News, setNews] = useState<News[]>([])
   useEffect(() => {
       FetchNews()
     },[])
     const FetchNews = async () => {
       try {
           const resolve = await fetch('https://api.spaceflightnewsapi.net/v3/'+id)
           const NewsList = await resolve.json()
           setNews(NewsList)
           console.log(News)
           
       }
       catch (error) {
           console.log(error)
       }
   }
    return (
    <Container>
    <div className="d-flex justify-content-around">
        <div style={{width: '100%'}}>Movie Title</div>
        <div>
            <p style={{color: "gray", fontSize: '8pt'}}>news site</p>
            <p> summary</p>
            <a href='link'><button> More Details</button></a>
        </div>
        <div>imageurl</div>


    </div></Container>)
}
export default Details