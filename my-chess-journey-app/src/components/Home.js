import background from "../images/chess_background.jpg";

//credit to https://www.publicdomainpictures.net/en/free-download.php?image=chess-chess-board-chess-club&id=474264 
//Victoria Borodinova has released this “Chess, Chess Board, Chess Club” image to the public domain 

export default function Home(){

    const style = {

        backgroundImage: `url(${background})`, 
        backgroundSize: `cover`
    };

    return (
        <div className='container'
		style={style}>
            <div className='container py-5 px-5 rounded-3 mx-auto'>
                <div
				className='container-fluid py-5 rounded-5 text-center'
				style={{ background: 'white'}}>
				<h1 className='display-5 fw-bold'>My Chess Journey</h1>
				<p className='fs-4 pt-4'>
                My name is Brian Anderson and I have loved the game of chess since I was a little kid.
                I've decided to begin a blog detailing my development and growth as a chess player and hobbyist developer. 
                Please feel free to reach out with any questions to banderson@dev-10.com.
				</p>

			</div>
            </div>
            
        </div>
    );
}
