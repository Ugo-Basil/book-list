import './App.css';
import Book from './Book';


export const books = [

  {
    id:1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/61Bdp7XZhDL._AC_UL600_SR300,400_.jpg',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    
  },
  
  {
    id:2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/819mN6mU4xL._AC_UL600_SR300,400_.jpg',
    title: 'Wrong Place Wrong Time',
    author: 'Gillian McAllister',
    
  },

  {
    id:3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81Ekpv7AwKL._AC_UL600_SR300,400_.jpg',
    title: 'My First Learn-to-Write',
    author: 'Crystal Radke',
    
  },
  {
    id:4,
    img: 'https://images-na.ssl-images-amazon.com/images/I/61Bdp7XZhDL._AC_UL600_SR300,400_.jpg',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
  
  },
  
  {
    id:5,
    img: 'https://images-na.ssl-images-amazon.com/images/I/819mN6mU4xL._AC_UL600_SR300,400_.jpg',
    title: 'Wrong Place Wrong Time',
    author: 'Gillian McAllister',
    
  },

  {
    id:6,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81Ekpv7AwKL._AC_UL600_SR300,400_.jpg',
    title: 'My First Learn-to-Write',
    author: 'Crystal Radke',
    
  },
  {
    id:7,
    img: 'https://images-na.ssl-images-amazon.com/images/I/61Bdp7XZhDL._AC_UL600_SR300,400_.jpg',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    
  },
  
  {
    id:8,
    img: 'https://images-na.ssl-images-amazon.com/images/I/819mN6mU4xL._AC_UL600_SR300,400_.jpg',
    title: 'Wrong Place Wrong Time',
    author: 'Gillian McAllister',
   
  },

    {id:9,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81Ekpv7AwKL._AC_UL600_SR300,400_.jpg',
    title: 'My First Learn-to-Write',
    author: 'Crystal Radke',
    
  },

]




function App() {
  return (
    <div className='App'>
      {books.map((book) => {
        // const { img, title, author} = book
        return (
          // <Book img={img} title={title} author={author}  />
          <Book key={book.id} {...book} />
        )
        })}
    </div>
  );
}


export default App;
