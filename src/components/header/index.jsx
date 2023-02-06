
function Header({photo, text, profession}) {
    return (
        <div className="content-head">
            <img src={photo} alt="" />
            <div className="information">
                <h1>{text}</h1>
                <p>{profession}</p>
            </div>
        </div>
    )
}

export default Header