import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPokemonImage, getPokemonStatsImage } from "../utils/pokemonImages";
import pokemonData from "../data/pokemon_Complete_Details.json";
import { getDefaultRatings } from "../data/pokemonRatings";
import "./PokemonDetails.css";

const EvolutionImage = ({ pokemonName, imageName, altText }) => {
  const [imageSrc, setImageSrc] = useState(null);
  
  useEffect(() => {
    const loadEvolutionImage = async () => {
      try {
        const normalizedName = altText.replace(/\s+/g, '_').replace(/[.-]/g, '_');
        const image = await import(/* @vite-ignore */ `../data/pokemon/${normalizedName}/images/stat-${altText.toLowerCase().replace(/\s+/g, '-')}.png`);
        setImageSrc(image.default);
      } catch (error) {
        // Fallback to stat Pokemon image
        setImageSrc(getPokemonStatsImage(altText));
      }
    };
    loadEvolutionImage();
  }, [pokemonName, imageName, altText]);
  
  return (
    <img 
      src={imageSrc || getPokemonStatsImage(altText)}
      alt={altText}
      className="evolution-image"
    />
  );
};

const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImageSrc, setMainImageSrc] = useState(null);
  
  const pokemon = pokemonData.find(p => p.name === name);
  
  useEffect(() => {
    if (pokemon) {
      const loadPokemonData = async () => {
        try {
          // Validate pokemon name to prevent path traversal
          if (!pokemon.name || typeof pokemon.name !== 'string') {
            throw new Error('Invalid pokemon name');
          }
          
          const normalizedName = pokemon.name.replace(/\s+/g, '_').replace(/[.-]/g, '_');
          
          // Additional validation - only allow alphanumeric and underscore
          if (!/^[a-zA-Z0-9_]+$/.test(normalizedName)) {
            throw new Error('Invalid characters in pokemon name');
          }
          
          const module = await import(`../data/pokemon/${normalizedName}/data.js`);
          const dataKey = Object.keys(module).find(key => key.includes('Data'));
          const pokemonData = module[dataKey] || module.default;
          
          if (!pokemonData) {
            throw new Error('No pokemon data found in module');
          }
          
          setPokemonDetails(pokemonData);
        } catch (error) {
          // Fallback to default data
          const defaultData = {
            name: pokemon.name,
            description: `${pokemon.name} brings unique abilities and strategic gameplay to the battlefield of Aeos Island.`,
            ratings: getDefaultRatings(pokemon.name),
            evolution: {
              stage: "Basic",
              levels: [1],
              evolutionImages: [],
              evolutionNames: [pokemon.name]
            },
            abilities: ["Ability 1", "Ability 2", "Ability 3"],
            intro: `${pokemon.name} is a ${pokemon.type[0]}-type Pokémon in Pokémon UNITE.`
          };
          setPokemonDetails(defaultData);
        }
        setLoading(false);
      };
      
      const loadMainImage = async () => {
        const statImage = await getPokemonStatsImage(pokemon.name);
        setMainImageSrc(statImage);
      };
      
      loadPokemonData();
      loadMainImage();
    } else {
      setLoading(false);
    }
  }, [pokemon]);
  
  if (!pokemon) {
    return (
      <div className="pokemon-details">
        <Link to="/pokemon" className="back-link">← Back to Pokemon List</Link>
        <div className="pokemon-not-found">
          <h1>Pokemon not found</h1>
          <p>The Pokemon "{name}" could not be found.</p>
        </div>
      </div>
    );
  }
  
  if (loading) {
    return (
      <div className="pokemon-details-container">
        <div className="loading">Loading Pokemon data...</div>
      </div>
    );
  }
  
  const ratings = pokemonDetails.ratings;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <div className="pokemon-details-container">
      <Link to="/pokemon" className="back-link">← Back to Pokemon List</Link>
      
      <div className="pokemon-details-main">
        <div className="pokemon-info-left">
          <div className="pokemon-name-badge">
            <span className="pokemon-emoji">😊</span>
            <h1 className="pokemon-name-title">{pokemon.name.toUpperCase()}</h1>
          </div>
          
          <div className="pokemon-description-box">
            <p className="pokemon-description">{pokemonDetails.description}</p>
          </div>
        </div>

        <div className="pokemon-image-center">
          <img src={mainImageSrc || getPokemonImage(pokemon.name)} alt={`${pokemon.name} stats`} className="pokemon-main-image" />
          <div className="pokemon-platform"></div>
        </div>

        <div className="pokemon-stats-right">
          <div className="pokemon-badges-top">
            <span className={`type-badge ${pokemon.type[0].toLowerCase()}`}>
              {pokemon.type[0]}
            </span>
            <span className="range-badge">
              {pokemon.type[0] === "Attacker" ? "Ranged" : "Melee"}
            </span>
          </div>

          <div className={`difficulty-badge-large ${pokemon.difficulty.toLowerCase()}`}>
            Difficulty: {pokemon.difficulty}
          </div>

          <div className="ratings-container">
            <div className="rating-item">
              <span className="rating-label">OFFENSE</span>
              <div className="stars">{renderStars(ratings.offense)}</div>
            </div>
            <div className="rating-item">
              <span className="rating-label">ENDURANCE</span>
              <div className="stars">{renderStars(ratings.endurance)}</div>
            </div>
            <div className="rating-item">
              <span className="rating-label">MOBILITY</span>
              <div className="stars">{renderStars(ratings.mobility)}</div>
            </div>
            <div className="rating-item">
              <span className="rating-label">SCORING</span>
              <div className="stars">{renderStars(ratings.scoring)}</div>
            </div>
            <div className="rating-item">
              <span className="rating-label">SUPPORT</span>
              <div className="stars">{renderStars(ratings.support)}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="evolution-section">
        <h3 className="evolution-title">Evolution Line</h3>
        <div className="evolution-stages">
          {pokemonDetails.evolution?.evolutionImages && pokemonDetails.evolution.evolutionImages.length > 0 ? (
            pokemonDetails.evolution.evolutionImages.map((image, index) => (
              <React.Fragment key={index}>
                <div className="evolution-stage">
                  <div className="evolution-circle">
                    <EvolutionImage 
                      pokemonName={pokemon.name}
                      imageName={image}
                      altText={pokemonDetails.evolution.evolutionNames?.[index] || `Stage ${index + 1}`}
                    />
                  </div>
                  <div className="evolution-info">
                    <div className="evolution-name">
                      {pokemonDetails.evolution.evolutionNames?.[index] || `Stage ${index + 1}`}
                    </div>
                    <div className="evolution-level">
                      LV. {pokemonDetails.evolution.levels?.[index] || index + 1}
                    </div>
                  </div>
                </div>
                {index < pokemonDetails.evolution.evolutionImages.length - 1 && (
                  <div className="evolution-arrow">»</div>
                )}
              </React.Fragment>
            ))
          ) : (
            <div className="evolution-stage">
              <div className="evolution-circle">
                <EvolutionImage 
                  pokemonName={pokemon.name}
                  imageName={`${pokemon.name}.png`}
                  altText={pokemon.name}
                />
              </div>
              <div className="evolution-info">
                <div className="evolution-name">{pokemon.name}</div>
                <div className="evolution-level">LV. 1</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;