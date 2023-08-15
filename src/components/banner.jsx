function Banner({ image, text }) {
    return (
        <div className='banner'>
        <img src={image} alt='Bannière'/>
            <p className='banner__motto' >{text}</p>
        </div>
    )
}
 
export default Banner