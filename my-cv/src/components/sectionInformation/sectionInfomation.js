import React from "react";

const SectionInformation =  () => {
  return (
    <div className="sectioninfomation">
      <div>
        <img src="https://image.freepik.com/free-vector/abstract-dynamic-pattern-wallpaper-vector_53876-59131.jpg" />
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
              Facebook: 
              <a href="/loi.nguyenhuu.731">/loi.nguyenhuu.731</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionInformation;
