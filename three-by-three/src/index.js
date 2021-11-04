import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import assets
import luckyStarImage from './Assets/tile000.png';
import eizoukenImage from './Assets/tile001.png';
import killLaKill from './Assets/tile002.png';
import wolfChildrenImage from './Assets/tile004.png';
import maquiaImage from './Assets/tile005.png';
import girlsLastTourImage from './Assets/tile006.png';
import haruhiImage from './Assets/tile008.png';
import gundamImage from './Assets/tile009.png';
import pingPongImage from './Assets/tile010.png';

//create header
function Header(){
	return(
		<div>
			<div className="name name-font ">
				Elbert Nathanael's
			</div>
			<div className="three-x-three header-font ">
				3x3s
			</div>
		</div>
	)
}

//create tile
class Tile extends React.Component{
	openMal(link){
		window.open(link, "_blank");
	}
	 
	render(){
		return(
			<div className="single-tile" >
				<img className="tile-image" src={this.props.imageUrl} />
				<div className="tile-overlay" onClick={() => this.openMal(this.props.malUrl)}>
					<div className="tile-title header-font">{this.props.title}</div>
				</div>
			</div>
		)
	}
}
//create board
class Board extends React.Component {
	render(){
		return(
			<div className="board-parent ">
				<div className="tile-tiler">
					<Tile title="Lucky Star" imageUrl={luckyStarImage} malUrl="https://myanimelist.net/anime/1887/Lucky%E2%98%86Star"/>
					<Tile title="Eizoken" imageUrl={eizoukenImage} malUrl="https://myanimelist.net/anime/39792/Eizouken_ni_wa_Te_wo_Dasu_na"/>
					<Tile title="Kill La Kill" imageUrl={killLaKill} malUrl="https://myanimelist.net/anime/18679/Kill_la_Kill"/>
					<Tile title="Wolf Children" imageUrl={wolfChildrenImage} malUrl="https://myanimelist.net/anime/12355/Ookami_Kodomo_no_Ame_to_Yuki"/>
					<Tile title="Maquia" imageUrl={maquiaImage} malUrl="https://myanimelist.net/anime/35851/Sayonara_no_Asa_ni_Yakusoku_no_Hana_wo_Kazarou?q=maqu&cat=anime"/>
					<Tile title="Girls' Last Tour" imageUrl={girlsLastTourImage} malUrl="https://myanimelist.net/anime/35838/Shoujo_Shuumatsu_Ryokou"/>
					<Tile title="The disapperance of Haruhi Suzumiya" imageUrl={haruhiImage} malUrl="https://myanimelist.net/anime/7311/Suzumiya_Haruhi_no_Shoushitsu"/>
					<Tile title="Gundam 00" imageUrl={gundamImage} malUrl="https://myanimelist.net/anime/2581/Mobile_Suit_Gundam_00"/>
					<Tile title="PingPong" imageUrl={pingPongImage} malUrl="https://myanimelist.net/anime/22135/Ping_Pong_the_Animation"/>
				</div>
			</div>
		)
	}
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
			<div className="bottom-parent">
				<Board/>
			</div>
		)
	}
}




// ----------------- react dom ----------
class Main extends React.Component{
	render(){
		return(
			<div className="parent-div">
				<Header />
				<BottomDiv />
			</div>
		)
	}
}
ReactDOM.render(
  <Main className="noselect"/>,
  document.getElementById('root')
);
