import '../Profile/styles.css'
import avatar from '../../avatar-jessica.jpeg'

export default function Profile (){
    const changeButtonStyle = (event) => {

    };
    return (

        <div className='mainContainer'>
            <div className="cardContainer">
                <div className="imgContainer">
                    <img
                        src={avatar}
                        alt="Jessica Randall"
                        className='img'
                    />
                </div>
                <div className="titleContainer">
                    <h1 className="name">Jessica Randall</h1>
                    <h3 className='localisation'>London, United Kingdom</h3>
                </div>
                <div className="description">
                    <span>"Front-end developer and avid reader."</span>
                </div>
                <div className="buttonContainer">
                    <button className="button" onClick={changeButtonStyle}>GitHub</button>
                    <button className="button" onClick={changeButtonStyle}>Frontend Mentor</button>
                    <button className="button" onClick={changeButtonStyle}>LinkedIn</button>
                    <button className="button" onClick={changeButtonStyle}>Twitter</button>
                    <button className="button" onClick={changeButtonStyle}>Instagram</button>
                </div>
            </div>
        </div>
    )
}