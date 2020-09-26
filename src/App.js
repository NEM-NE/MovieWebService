import React from 'react';
import Potato from './Potato';
import PropTypes from 'prop-types';

const foodILike = [{
  id: 2,
  name: "Samgyeopsal",
  image:
    "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
  rating: 4.9
},
{
  id: 3,
  name: "Bibimbap",
  image:"http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
  rating: 4.8
},
{
  id: 4,
  name: "Doncasu",
  image:
    "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
  rating: 5.5
},
{
  id: 5,
  name: "Kimbap",
  image:
    "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
  rating: 4.7
}
];

Food.propTypes = { //이름은 반드시 리액트가 인지하기 위해서 propTypes로 지어야한다.
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function Food({ name, pictures, rating}){ //new es6 can take out object value
  return (
    <div>
      <h1>I like {name}</h1>
      <h2>{rating}/5.0</h2>
      <img src={pictures} alt={name}/>
    </div>
  )
}

function App() {
  return (
    <div className="App">
     <h1>Hello!!</h1>
     <Potato />
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} pictures = {dish.image} rating={dish.rating}/>)}
    </div>
  );
}

export default App;
