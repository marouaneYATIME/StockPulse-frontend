import React from 'react';
import {RiProductHuntLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import "./Home.scss"
import heroImg from "../../assets/inv-img.png";
import { ShowOnLogin, ShowOnLogout } from '../../components/protect/HiddenLinks';


const Home = () => {
  return (
    <div className="home">
        <nav className="container --flex-between">
            <div className="logo">
                <RiProductHuntLine size={35}/>
            </div>
            <ul className="home-links">
                <ShowOnLogout>
                    <li>
                        <Link to="/register">S'inscrire</Link>
                    </li>
                </ShowOnLogout>
                <ShowOnLogout>
                    <li>
                        <button className="--btn --btn-primary">
                            <Link to="/login">Se connecter</Link>
                        </button>
                    </li>
                </ShowOnLogout>
                <ShowOnLogin>
                    <li>
                        <button className="--btn --btn-primary">
                            <Link to="/dashboard">Dashboard</Link>
                        </button>
                    </li>
                </ShowOnLogin>
            </ul>
        </nav>
        {/** Hero Section */}
        <div className="container hero" >
            <div className="hero-text">
                <h2> StockPulse Gestion des stocks et de l'inventaire </h2>
                <p> 
                    Système d'inventaire pour contrôler et gérer les produits 
                    dans l'entrepôt en temps réel et intégré pour faciliter le développement 
                    de votre entreprise.
                </p>

                <p> 
                    L'objectif principal de StockPulse est de simplifier la gestion 
                    des stocks de produits et des tâches à accomplir au sein d'une entreprise ou 
                    d'une organisation. Cela permettra d'optimiser les opérations et de gagner en efficacité.
                </p>
                
                <div className='--flex-start'>
                    <NumberText num="10k" text="Collaborateurs"/>
                    <NumberText num="32k" text="Utilisateurs actifs"/>
                    <NumberText num="100+" text="Partenaires"/>
                </div>

                <div className="hero-buttons">
                    <button className="--btn --btn-secondary">
                        <Link to="/contact">Contact</Link>
                    </button>
                </div>
            </div>
            <div className="hero-image">
                <img src={heroImg} alt="Iventory"/>
            </div>
        </div>
    </div>
  )
};

const NumberText = ({num, text}) => {
    return (
        <div className='--mr'>
            <h3 className='--color-white'> {num}</h3>
            <p className='--color-white'>{text}</p>
            
        </div>
    )
};

export default Home