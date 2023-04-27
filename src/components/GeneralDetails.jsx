import React from "react";

const GeneralDetails = ({data}) => {
  
  return (
    <div className="sub-content">
      <div className="cont">
        <div className="info-header">
          <span>Personal Information</span>
        </div>
        <div className="infos">
          <div className="info">
            <p>Full Name</p>
            <span>
              {data?.profile?.firstName} {data?.profile?.lastName}
            </span>
          </div>
          <div className="info">
            <p>Phone Number</p>
            <span>{data?.profile?.phoneNumber.slice(0, 13)}</span>
          </div>
          <div className="info">
            <p>Email Address</p>
            <span>{data?.email}</span>
          </div>
          <div className="info">
            <p>BVN</p>
            <span>{data?.profile?.bvn}</span>
          </div>
          <div className="info">
            <p>Gender</p>
            <span>{data?.profile?.gender}</span>
          </div>
          <div className="info">
            <p>Marital Status</p>
            <span>Single</span>
          </div>
          <div className="info">
            <p>Children</p>
            <span>None</span>
          </div>
          <div className="info">
            <p>Type of Residence</p>
            <span>{data?.profile?.address}</span>
          </div>
        </div>
      </div>
      <div className="cont">
        <div className="info-header">
          <span>Education and Employment</span>
        </div>
        <div className="infos  edu-infos">
          <div className="info info2">
            <p>Level of Education</p>
            <span>{data?.education.level}</span>
          </div>
          <div className="info info2">
            <p>Employment Status</p>
            <span>{data?.education.employmentStatus}</span>
          </div>
          <div className="info info2">
            <p>Sector of Employment</p>
            <span>{data?.education.sector}</span>
          </div>
          <div className="info info2">
            <p>Duration of Employment</p>
            <span>{data?.education.duration}</span>
          </div>
          <div className="info info2">
            <p>Office Email</p>
            <span>{data?.education.officeEmail}</span>
          </div>
          <div className="info info2">
            <p>Monthly Income</p>
            <span>
              ₦ {data?.education.monthlyIncome[0]} - ₦{" "}
              {data?.education.monthlyIncome[1]}
            </span>
          </div>
          <div className="info info2">
            <p>Loan Repayment</p>
            <span>{data?.education.loanRepayment}</span>
          </div>
        </div>
      </div>
      <div className="cont">
        <div className="info-header">
          <span>Socials</span>
        </div>
        <div className="infos">
          <div className="info">
            <p>Twitter</p>
            <span>{data?.socials.twitter}</span>
          </div>
          <div className="info">
            <p>Facebook</p>
            <span>{data?.socials.facebook}</span>
          </div>
          <div className="info">
            <p>Instagram</p>
            <span>{data?.socials.instagram}</span>
          </div>
        </div>
      </div>
      <div className="cont">
        <div className="info-header">
          <span>Guarantor</span>
        </div>
        <div className="infos">
          <div className="info">
            <p>Full Name</p>
            <span>
              {data?.guarantor.firstName} {data?.guarantor.lastName}
            </span>
          </div>
          <div className="info">
            <p>Phone Number</p>
            <span>{data?.guarantor.phoneNumber.slice(0, 13)}</span>
          </div>
          <div className="info">
            <p>Email Address</p>
            <span>{data?.guarantor.firstName}@gmail.com</span>
          </div>
          <div className="info">
            <p>Relationship</p>
            <span>Sister</span>
          </div>
        </div>
      </div>
      {/* <div className="cont">
        <div className="info-header">
          <span></span>
        </div>
        <div className="infos">
          <div className="info">
            <p>Full Name</p>
            <span>Debby Ogana</span>
          </div>
          <div className="info">
            <p>Phone Number</p>
            <span>07060780922</span>
          </div>
          <div className="info">
            <p>Email Address</p>
            <span>debby@gmail.com</span>
          </div>
          <div className="info">
            <p>Relationship</p>
            <span>Sister</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default GeneralDetails;
