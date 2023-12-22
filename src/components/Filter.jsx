import { useEffect } from "react"

const Filter = ({ activeGenre, setActiveGenre, setFiltered, popular }) => {

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular)
      return
    }
    const filtered = popular.filter(movie => movie.genre_ids.includes(activeGenre));
    setFiltered(filtered);
  }, [activeGenre])
  

  return (
    <div className="filter-container ">
      <h1 className=" text-2xl text-black font-semibold text-center">PORTFOLIO</h1>
      <div className=" flex justify-center mt-10"> 
      <button 
        className={activeGenre === 0 ? "active " : ""} 
        onClick={() => setActiveGenre(0)}
      >
       All
      </button>
      <button 
        className={activeGenre === 35 ? "active" : ""}
        onClick={() => setActiveGenre(35)}
      >
       Social
      </button>
      <button 
        className={activeGenre === 28 ? "active" : ""}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
      </div>
      
    </div>
  )
}

export default Filter
