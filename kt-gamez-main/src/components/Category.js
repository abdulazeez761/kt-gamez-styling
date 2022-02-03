import React , {useState , useEffect } from "react";

import "./Category.css";
function Category() {
    const [active , setActive] =useState(false)
    const [button , setButton] = useState('all')
    const [data , setData] =useState([])
    useEffect( async()=>{
        const data = await fetch('https://ktgamez.com/storage/games.json')
        const items = await data.json()
        setData(items)
    } , [setData])

    const handleClickAction = ()=>{
        setButton('Action')
     
    }
    const handleClickAll = ()=>{
        setButton('all')
     
    }
    const handleClicEducational = ()=>{
        setButton('Educational')
        
        
    }
    const handleClicArcade = ()=>{
        setButton('Arcade')
        
    }
    const handleClicSports = ()=>{
        setButton('Sports & Racing')
        
    }
    const handleClicPuzzle = ()=>{
        setButton('Puzzle')
        
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
              
             if ( button === 'all' || button === data.genre_name){
                return(
                    <div className="card-content" key={key}>  
                        <div className="card-img">
                            <img src={data.game_cover_url} alt={data.game_name} />
                            <p className="game-info">kt points :100</p>
                        </div>
                        <div className="paragraphs">
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
        //.slice(0,10)
     }
      </div>
     
    </div>
  );
}

export default Category;
