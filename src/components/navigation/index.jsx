

function Navigation ({photo, text, alt}) {
    return (
        <div className="navigation">
            <img src={photo} alt={alt} />
            <a href="">{text}</a>
        </div>
        
    )
}

export default Navigation