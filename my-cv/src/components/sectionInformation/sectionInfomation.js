import React from "react";
import AVT from "../../assets/image/avt.jpg"

const SectionInformation =  () => {
  return (
    <div className="sectioninfomation">
      <div>
        <img src={AVT} />
      </div>
      <div className="infname">
        <span>NGUYỄN HỮU LỢI</span>
      </div>
      <div className="information">
        <div className="datephone">
          <div>
            <span>
              Date of birth:
              <a href="08/01/1996">08/01/1996</a>
            </span>
          </div>
          <div>
            <span>
              Phone:
              <a href="tel: 033 878 3293">033 8783 293</a>
            </span>
          </div>
        </div>
        <div className="emailfacebook">
          <div>
            <span>
              Email:
              <a href="mail:lyonguyen311@gmail.com">lyonguyen311@gmail.com</a>
            </span>
          </div>
          <div>
            <span>
              Address: 
              <a href="1168/55 Trường Sa, phường 13, Phú Nhuận, TPHCM">Phú Nhuận - TPHCM</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionInformation;
