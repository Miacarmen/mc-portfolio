import React from "react";
import { Card } from "react-daisyui";
import img1 from "../images/Swimming.png";
import img2 from "../images/Feral.png";
import img3 from "../images/Temper.png";
import img4 from "../images/Devil3.png";
import img5 from "../images/Devils-Disco-Top.png";
import img6 from "../images/Devils-Disco-Bottom.png";
import Nav from '../components/Navbar';

// TO-DO: When a user clicks add to cart, 
// add item to cart, 
// update number on cart icon, 
// change button to say "added"


const Prints = () => {

  const prints = [
    {
      id: 1,
      title: 'Swimming',
      desc: '8.5 x 11',
      price: '$20.00',
      imageURL: 'https://i.ibb.co/FmCrF4y/Swimming.png'
    },
    {
      id: 2,
      title: 'Feral',
      desc: '8.5 x 11',
      price: '$20.00',
      imageURL: 'https://i.ibb.co/sym75CG/Feral.png'
    },
    {
      id: 3,
      title: 'Careful Now, She\'s Got a Temper',
      desc: '8.5 x 11',
      price: '$20.00',
      imageURL: 'https://i.ibb.co/tJJNGFr/Temper.png'
    },
    {
      id: 4,
      title: 'She\'s a Good Girl',
      desc: '8.5 x 11',
      price: '$20.00',
      imageURL: 'https://i.ibb.co/Zd62qdx/Devil3.png'
    },
    {
      id: 5,
      title: 'Tempting',
      desc: '8.5 x 11',
      price: '$15.00',
      imageURL: 'https://i.ibb.co/sgg0YsT/Devil1.png'
    },
    {
      id: 6,
      title: 'Tempting',
      desc: '8.5 x 11',
      price: '$15.00',
      imageURL: 'https://i.ibb.co/dQF2Sjs/Devil2.png'
    }
  ]

  return (
    <div className="bg-base-200">
      <h1 className="pt-5 text-3xl font-bold text-base-300 text-center">Prints</h1>
      <div className="container max-w-screen-lg mx-auto pb-10 text-primary mt-7">
      {prints.map((print) => (
        <Card className="card-title lg:card-side bg-base-100 shadow-xl mb-5">
        <div className="card-body">
          <img alt={print.title} src={print.imageURL}></img>
          <Card.Title>{print.title}</Card.Title>
          <p className="text-sm">{print.desc}</p>
          <p className="text-sm">{print.price}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary buyNow">Add to Cart</button>
          </div>
        </div>
      </Card>
      ))}

        <Card className="card lg:card-side bg-base-100 shadow-xl mb-5">
          <div className="card-body">
            <img alt="Devil's Disco" src={img5}></img>
            <Card.Title>The Devils Disco</Card.Title>
            <p>**Animation Under Construction</p>
            <p>Not for sale (yet)</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary buyNow" disabled>Add to Cart</button>
            </div>
          </div>
        </Card>

        <Card className="card lg:card-side bg-base-100 shadow-xl mb-5">
          <div className="card-body">
            <img alt="Devil's Disco" src={img6}></img>
            <Card.Title>The Devils Disco</Card.Title>
            <p>**Animation Under Construction</p>
            <p>Not for sale (yet)</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary buyNow" disabled>Add to Cart</button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Prints;
