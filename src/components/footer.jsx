import logoFooter from '../assets/logo-footer.svg'

function Footer() {
    return (
        <div className='footer'>
            <img src={logoFooter} alt='Kaza' className='footer__logo' />
            <p className='footer__copyright'> © 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer