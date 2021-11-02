import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import assets
import testicon from './Assets/testicon.png';

//create header
function Header(){
	return(
		<div>
			<div className="name name-font red-border">
				Elbert Nathanael's
			</div>
			<div className="three-x-three header-font red-border">
				3x3s
			</div>
		</div>
	)
}

//create tile
function Tile(){
	return(
		<div className="single-tile">
			<img className="tile-image" src={testicon}/>
		</div>
	)
}
//create board
class Board extends React.Component {
	render(){
		return(
			<div className="board-parent">
				<Tile/>
				<Tile/>
				<Tile/>
				<Tile/>
				<Tile/>
				<Tile/>
				<Tile/>
				<Tile/>
				<Tile/>
			</div>
		)
	}
}
//create category navbar 
function NavBar(){
	return(
		<div className="parent-navbar">
			<button className="navbar-element name-font">Movies</button>
			<button className="navbar-element name-font">Anime</button>
			<button className="navbar-element name-font">Books</button>
			<button className="navbar-element name-font">Games</button>
		</div>
	)
}
//create bottom div
class BottomDiv extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			currentArray: [],
		}
	}
	 
	render(){
		return (
			<div className="bottom-parent red-border">
				<NavBar/>
				<Board/>
			</div>
		)
}

	}




// ----------------- react dom ----------
class Main extends React.Component{
	render(){
		return(
			<div className="parent-div red-border">
				<Header />
				<BottomDiv />
			</div>
		)
	}
}
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
