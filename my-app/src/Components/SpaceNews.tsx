import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import {News} from '../types/News'
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';

const SpaceNews = () =>{
    const [News, setNews] = useState<News[]>([])

    useEffect(() => {
        FetchNewsList()
      },[])

     const FetchNewsList = async () => {
        try {
            const resolve = await fetch('https://api.spaceflightnewsapi.net/v3/articles')
            const NewsList = await resolve.json()
            setNews(NewsList)
            console.log(News)
            
        }
        catch (error) {
            console.log(error)
        }
    }
if(News.length >0){
  return (  <Row>
    
    {News.map(news => (
    <Col xs={5} style={{backgroundImage: 'url('+ news.imageUrl+')',color: 'white', height: '200px', backgroundSize: 'cover' , marginTop: '20px', marginBottom: '20px' ,marginLeft: '4%',}}>
        <h3>{news.title}</h3>
        </Col>)
    )}
        </Row>)}
        else{
           return( <div>
            
                <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
            </Spinner></div>)
        }

}
export default SpaceNews