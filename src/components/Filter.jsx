import { useEffect } from "react";

const Filter = ({ activeGenre, setActiveGenre, setFiltered, popular }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
    } else {
      const filtered = popular.filter((movie) => movie.id === activeGenre);
      setFiltered(filtered);
    }
  }, [activeGenre, popular, setFiltered]);

  return (
    <div className="filter-container">
      <h1 className="text-2xl text-black font-semibold text-center">
        PORJECTS
      </h1>
      <div className="md:flex  justify-center mx-10 space-y-6 md:space-y-0  items-center   mt-10">
        {/* <select className="select select-info w-full max-w-xs">
          <option disabled selected>
            All
          </option>
          <option>English</option>
          <option>Japanese</option>
          <option>Italian</option>
        </select> */}
        <div className="flex ">
          <button
            className={activeGenre === 0 ? "active" : ""}
            onClick={() => setActiveGenre(0)}
          >
            All
          </button>
          <button
            className={activeGenre === 3 ? "active" : ""}
            onClick={() => setActiveGenre(3)}
          >
            JOB
          </button>
        </div>
        <div className="flex ">
          <button
            className={activeGenre === 2 ? "active" : ""}
            onClick={() => setActiveGenre(2)}
          >
            ECOMMERCE
          </button>
          <button
            className={activeGenre === 4 ? "active" : ""}
            onClick={() => setActiveGenre(4)}
          >
            SOCIAL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
