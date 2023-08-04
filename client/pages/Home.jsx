import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <h1>Unveiling Worlds: Your Gateway to Gaming Excellence</h1>
      <hr />
      <p>
      Step into a world where pixels and dreams intertwine, 
      where every click has the power to ignite your imagination and 
      ignite your competitive spirit. Welcome to our game store, 
      your digital sanctuary for all things gaming. Whether you're seeking epic quests, 
      heart-pounding action, mind-bending puzzles, or immersive storytelling, 
      our carefully curated collection of games has something to captivate every player. 
      From cutting-edge graphics to captivating narratives, 
      we've handpicked the finest titles to create a haven for gamers of all tastes. 
      Embark on a journey through virtual landscapes, forge alliances, vanquish foes, 
      and become the hero of your own saga. The realm of gaming magic awaits – are you ready to level up?
      </p>
      <Link to="/games">Explore the Games</Link>
    </section>
  )
}

export default Home