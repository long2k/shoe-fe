import React from 'react'
import styles from '../../../styles/components/footer.module.css'


const Footer = () => {
  return (
    <div className={styles.footer} >
      <div className={styles.flex}>
        <div className="col-xs-12 col-sm-6 col-md-2 col-lg">
          <div className="footer-col footer-block">
            <h4 className="footer-title">
              Chính sách
            </h4>
            <div className="footer-content toggle-footer">
              <ul>

                <li className="item">
                  <a href="/pages/chinh-sach-doi-tra" title="CS ĐỔI TRẢ">CS ĐỔI TRẢ</a>
                </li>

                <li className="item">
                  <a href="/pages/tk-ngan-hang" title="TK NGÂN HÀNG">TK NGÂN HÀNG</a>
                </li>

                <li className="item">
                  <a href="/" title="KT ĐƠN HÀNG">KT ĐƠN HÀNG</a>
                </li>

                <li className="item">
                  <a href="/" title="MEMBERSHIP">MEMBERSHIP</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div className="col-xs-6 hasPhone col-sm-6 col-md-2 col-lg">
          <div className="footer-col">

            <div className="hasPhone">
              <p className="title">TƯ VẤN BÁN HÀNG</p>
              <p className="number_phone"><a href="tel:0327.006.255">
                <i className="fa fa-phone "></i> 0327.006.255</a></p>
              <p className="moreinfo">Tất cả các ngày trong tuần</p>
            </div>
            <div className="social">
              <h4 className="footer-title">
                Kết nối với chúng tôi
              </h4>
              <ul className="navbar-social">
                <li className="social-face">
                  <a href="https://www.facebook.com/shopH2T" target="_blank" rel="nofollow noreferrer">
                    <i className="fa fa-facebook-official" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/h2tstore.vn/" target="_blank" rel="nofollow noreferrer">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UC1Y6Ys65qZw2Eg3XBPjaAnw" target="_blank" rel="nofollow noreferrer">
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="nofollow">
                    <i className="fa fa-zalo" aria-hidden="true"></i>
                  </a>
                </li>
              </ul></div>
          </div>
        </div>
        <div className="col-xs-6 hasPhone col-sm-6 col-md-2 col-lg">
          <div className="footer-col">

            <div className="hasPhone">
              <p className="title">TƯ VẤN BÁN HÀNG</p>
              <p className="number_phone"><a href="tel:0327.006.255">
                <i className="fa fa-phone "></i> 0327.006.255</a></p>
              <p className="moreinfo">Tất cả các ngày trong tuần</p>
            </div>
            <div className="social">
              <h4 className="footer-title">
                Kết nối với chúng tôi
              </h4>
              <ul className="navbar-social">
                <li className="social-face">
                  <a href="https://www.facebook.com/shopH2T" target="_blank" rel="nofollow noreferrer">
                    <i className="fa fa-facebook-official" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/h2tstore.vn/" target="_blank" rel="nofollow noreferrer">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UC1Y6Ys65qZw2Eg3XBPjaAnw" target="_blank" rel="nofollow noreferrer">
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="nofollow">
                    <i className="fa fa-zalo" aria-hidden="true"></i>
                  </a>
                </li>
              </ul></div>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <p className={styles.text}>Copyright © 2022 Shoes D App's . Powered by No18</p>
      </div>
    </div>

  )
}

export default Footer