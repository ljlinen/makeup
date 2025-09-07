import '../assets/css/header.css'
import IconMenu from '../../../assets/icons/menu.svg'
import IconShop from '../../../assets/icons/shop.svg'
import IconSale from '../../../assets/icons/sale.svg'
import IconBlog from '../../../assets/icons/blog.svg'
import IconContact from '../../../assets/icons/contact.svg'
import IconFacebook from '../../../assets/icons/facebook.svg'
import IconInstagram from '../../../assets/icons/instagram.svg'
import IconWhatsapp from '../../../assets/icons/whatsapp.svg'
import imgGirl from '../assets/img/girl.jfif'


export default function Header() {
  // const [ref, isInView] = useAnimate({ threshold: 0, root: null, rootMargin: '-20% 0px 0px 0px' })

  return (
    <header>      <nav>
        <p>
          Lorem
          <span>{"\u00A0MP"}</span>
        </p>
        <ul>
          <li>
            <p>home</p>
          </li>
          <li>
            <p>shop</p>
            <IconShop />
          </li>
          <li>
            <p>sale</p>
            <IconSale />
          </li>
          <li>
            <p>blog</p>
            <IconBlog />
          </li>
          <li>
            <p>contact</p>
            <IconContact />
          </li>
          <li>
            <IconMenu />
          </li>
        </ul>
      </nav>
      <div className="content">
        <div className="img">
          <img src={imgGirl} />
          <span></span>
        </div>
        <div className="type-lockup">
          <p>It is a long established fact that a reader will be distracted blished fact that a reader will be distractedby.</p>
          <h1>
            <span>- EST 19</span>
            Lorem Makeup 
            <span>{'\u00A0Palace'}</span>
          </h1>
        </div>
        <input type="button" value="Get A Quotation Now!" />
      </div>
      <div className="footer">
        <ul>
          <li>
            <IconFacebook />
          </li>
          <li>
            <IconInstagram />
          </li>
          <li>
            <IconWhatsapp />
          </li>
        </ul>
        <div className="section-indicator">
          <span></span>
          <p>header</p>
        </div>
      </div>
    </header>
  )
}
