import{ useEffect, useState } from "react";

const Gallery = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch the JSON data
    fetch("https://figurio.vercel.app/galleries")
      .then((response) => response.json())
      .then((characters) => {
        setCharacters(characters);
      })
      .catch((error) => {
        console.log("Error fetching JSON data: ", error);
      });
  }, []);

  return (
    <div className="my-container mt-12">
      <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-3 text-center">Character Showcases</h2>
      <p className="text-gray-600 mb-4 text-center">
        Explore our collection of action figures from popular franchises. We feature a variety of characters from Marvel, Star Wars, Transformers, and more. Each action figure is meticulously crafted to capture the essence of the character.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        {characters.map((character) => (
          <div key={character.name} className="bg-white p-4 drop-shadow-xl rounded-lg">
          <img src={character.img} alt={character.name} className="mb-4" />
          <div className="mb-3">
          <h3 className="text-lg font-bold mb-2">{character.name}</h3>
          <div className="h-20">
          <p className="text-gray-700">{character.description}</p>
          </div>
          <p className="text-gray-500 badge mt-2">Franchise: {character.franchise}</p>
          </div>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default Gallery;
