
import './App.css';



function App() {



  // const number =3;
  // const fname="Ibeh";
  // const lname="Joy";
  // const currentYear = new Date();
  // const year = currentYear.getFullYear();
  const date = new Date();
  const time = date.getHours();
  let greeting;

  if (time<12){
    greeting = "Good morning";
  }
  else if(time<18){
    greeting = "Good Afternoon"
  }
  else{
    greeting= "Good Evening"
  }

 
  const customStyle={
    color:"red",
    border:"1px solid blue",
    fontSize:"16px"

  }
  return (
    <div>
     <h1 style={customStyle}> My Favourite Food</h1>
    <h2>Good Morning</h2>
     <ul>
      <li>Beacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
     </ul>
     <div>
      <img src="https://media.istockphoto.com/id/484811804/photo/crispy-chillie-sprinkled-chicken-wings-on-a-plate.jpg?b=1&s=170667a&w=0&k=20&c=rt3Jc__iNte0ZofLpWNueRpU-JwD4cQt07Vs4SSOZAU=" alt="food" className='food'></img>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYFQN3iXTTnScJp08bvkdM7UgiGT8Tjt2SLUWxUhFkg270necGLbClmyP51OJr1PPxwU&usqp=CAU" alt='food' className='food'></img>
      <img src="https://static.independent.co.uk/2021/03/22/17/dinner-inspo-1-220321.jpg?quality=75&width=640&auto=webp" alt='food' className='food'></img>
     </div>
     {/* <p>My Lucky number is {number} </p>
     <p>Created by {fname} {lname}</p>
     <p>CopyRight by {year}</p> */}
  
    </div>
  );
}

export default App;