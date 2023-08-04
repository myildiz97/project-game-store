import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <img src="https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Game" />
      <h2>
      Embark on a Legendary Adventure: Your Pathway to Gaming Excellence
      </h2>
      <p>
      We are more than just a platform for games – we are a community of passionate gamers, creators, 
      and enthusiasts. We have been dedicated to curating a diverse and thrilling collection of games that cater to 
      every player's taste and preferences. Our mission is to provide you with an unparalleled gaming journey, 
      where every title is a masterpiece and every click immerses you deeper into the realms of digital adventures. 
      We understand the power of gaming in connecting people, fostering creativity, and sparking joy, 
      and we strive to bring you the finest and most captivating experiences from around the gaming world. 
      With a team of avid gamers and industry experts, we handpick each game to ensure it meets our standards of 
      quality, innovation, and entertainment. Whether you're a seasoned pro seeking the ultimate challenge 
      or a casual player looking for moments of leisure, we have something extraordinary for you.
      </p>
      <div>
        <h3>
        Join us in this exciting odyssey as we continue to redefine the way you experience gaming. 
        Let's explore, compete, and celebrate the art of gaming together.
        </h3>
        <Link to="/games">Find your new game...</Link>
      </div>
    </section>
  )
}

export default About