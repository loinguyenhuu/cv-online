import React from "react";
import AVT from "../../assets/image/avt.jpg"

const SectionInformation =  () => {
  return (
    <div className="sectioninfomation">
      <div>
        <img src={AVT} />
      </div>
      <div className="infname">
        <span>NGUYEN HUU LOI</span>
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
              <a href="mail:lyonguyen311@gmail.com">nguyenhuuloi080196@gmail.com</a>
            </span>
          </div>
          <div>
            <span>
              Address: 
              <a href="24/13 Trần Bình Trọng, Phường Bình Lợi Trung, Binh Thanh District, Ho Chi Minh City">Binh Thanh District, Ho Chi Minh City</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionInformation;
