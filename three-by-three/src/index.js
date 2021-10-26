import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//create header
function Header(){
	return(
		<div>
			<div className="name name-font">
				Elbert Nathanael's
			</div>
			<div className="three-x-three header-font">
				3x3s
			</div>
		</div>
	)
}

//create tile
//create board
//create bottom div
function BottomDiv(){
	return (
		<div>bottom</div>
	)
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
