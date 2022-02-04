import React , {useState , useEffect } from "react";
import action from "../asserts/images/categoryImages/action.jpg";
import educational from "../asserts/images/categoryImages/educational.jpg";
import puzzle from "../asserts/images/categoryImages/puzzle.jpg";
import SportsAndRacing from "../asserts/images/categoryImages/racing.jpg";
import arcade from "../asserts/images/categoryImages/arcad.jpg";
import "./Category.css";
function Category() {
    const [active , setActive] =useState(false)
    const [button , setButton] = useState('all')
    const [categoryImage , setCategoryImage] = useState()
    const [data , setData] =useState([])
 
    useEffect( async()=>{
        const data = await fetch('https://ktgamez.com/storage/games.json')
        const items = await data.json()
        setData(items)
    } , [setData])
  
    const handleClickAction = ()=>{
        setButton('Action')
        setCategoryImage(action)
    }
    const handleClickAll = ()=>{
        setButton('all')
        setCategoryImage(action)
     
    }
    const handleClicEducational = ()=>{
        setButton('Educational')
        setCategoryImage(educational)
        
    }
    const handleClicArcade = ()=>{
        setButton('Arcade')
        setCategoryImage(arcade)
    }
    const handleClicSports = ()=>{
        setButton('Sports & Racing')
        setCategoryImage(SportsAndRacing)
    }
    const handleClicPuzzle = ()=>{
        setButton('Puzzle')
        setCategoryImage(puzzle)
    }

  return (
    <div className="category">
        <p className="active-category">{button} Games</p>
      <div className="dropdown">
            <div className="dropdown-btn" onClick={()=>{
                setActive(!active)
            }}><h3> Categories </h3></div>
            {active &&(
            <div className="dropdown-content">
                    <div onClick={handleClickAll} className="dropdown-item">
                                 All
                              </div>
                                 <div onClick={handleClickAction} className="dropdown-item">
                                 Action
                              </div>
                            <div onClick={handleClicEducational} className="dropdown-item">
                                 Educational
                            </div>
                         <div onClick={handleClicArcade}  className="dropdown-item">
                                Arcade 
                         </div>
                        <div onClick={handleClicSports}  className="dropdown-item">
                         Sports and Racing
                    </div>
                    <div onClick={handleClicPuzzle} className="dropdown-item">
                         Puzzle
                    </div>
                </div>
            )}
      </div>
  
      <div className="cards">
      {
          data.map((data , key)=> {
            // if ( key < 10 && button === 'all' || key <10 && button === data.genre_name ){
               //or :  if(key < 10){return}
               //even if tried to do this style= {{display : key <10 ? 'block' : 'none'}}
              
            if ( button === 'all' && data.genre_status ==='Active'){
                
                return(
                    <div className="card-content" key={key}>  
                        <div className="card-img">
                            <img src={data.game_cover_url} alt={data.game_name} />
                            <p className="game-info">kt points :100</p>
                        </div>
                        <div className="paragraphs">
                           
                        <div className="category-image"><img src= {data.game_cover_url} style={{borderRadius: '1em' , width : '2em' , height : '2em'}}/> </div>
                        <div className="card-inner-title">
                            <p>{data.game_name}</p>
                        </div>
                        <div>
                        <p className="category-genre">
                           category :  {data.genre_name}
                        </p>
                        </div>
                        </div>
                      
                    </div>
                )
                
              } else if(button === data.genre_name && data.genre_status ==='Active'){
                return(
                    <div className="card-content" key={key}>  
                        <div className="card-img">
                            <img src={data.game_cover_url} alt={data.game_name} />
                            <p className="game-info">kt points :100</p>
                        </div>
                        <div className="paragraphs">
                        <div className="category-image"><img src={categoryImage}/> </div>
                        <div className="card-inner-title">
                            <p>{data.game_name}</p>
                        </div>
                        <div>
                        <p className="category-genre">
                           category :  {data.genre_name}
                        </p>
                        </div>
                        </div>
                      
                    </div>
                )
              }
              
              
        } 
        )
     }
      </div>
     
    </div>
  );
}

export default Category;
/*     <div className="category-image"><img src={data.genre_name === 'Action' || data.genre_name === 'Educational' || 
                        data.genre_name === 'Puzzle' || data.genre_name === 'Arcade'  ||
                        data.genre_name === 'Sports & Racing'?data.game_cover_url  : null }/> </div>
                        */