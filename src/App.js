import './App.css';
import Book from './Book';

const firstBook = {
    img: 'https://images-na.ssl-images-amazon.com/images/I/61Bdp7XZhDL._AC_UL600_SR300,400_.jpg',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    job: 'Developer'
}

const secondBook = {
    img: 'https://images-na.ssl-images-amazon.com/images/I/819mN6mU4xL._AC_UL600_SR300,400_.jpg',
    title: 'Wrong Place Wrong Time',
    author: 'Gillian McAllister',
    job: 'Developer'
}


function App() {
  return (
    <div className='App'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} job={firstBook.job}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis deleniti non incidunt eaque, recusandae voluptas.</p>
      </Book>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} job={secondBook.job} >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis deleniti non incidunt eaque, recusandae voluptas.</p>
      </Book>
     
    </div>
  );
}

export default App;
