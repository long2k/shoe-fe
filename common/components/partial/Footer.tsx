import React from 'react'
import styles from '../../../styles/components/footer.module.css'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'

const Footer = () => {
  return (
    <div className={styles.footer} >
      <div className={styles.flex}>
        <div className="col-xs-12 col-sm-6 col-md-2 col-lg">
          <div className="footer-col footer-block">
          <p className="title">CHÍNH SÁCH</p>
            <div className="footer-content toggle-footer">
              <List>
                <ListItemText primary="Chính Sách Đổi Trả" />
                <ListItemText primary="Tài Khoản Ngân Hàng" />
                <ListItemText primary="Kiểm Tra Đơn Hàng" />
                <ListItemText primary="Member Ship" />
              </List>
            </div>
          </div>
        </div>
        <div >
          <div className="footer-col">
            <div className="hasPhone">
              <p className="title">TƯ VẤN BÁN HÀNG</p>
              <p className="number_phone">
                <i className="fa fa-phone "></i> 0327.006.255</p>
              <p className="moreinfo">Tất cả các ngày trong tuần</p>
            </div>
            <div className="social">
              <h4 className="footer-title">
                Kết nối với chúng tôi
              </h4>
              </div>
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