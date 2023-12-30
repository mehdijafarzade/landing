import React from "react";
import PickMeals from "../assets/images/pick-meals-image.png";
import ChooseMeals from "../assets/images/choose-image.png";
import DeliveryMeals from "../assets/images/delivery-image.png";
import './work.css'


const Work = () => {

  const workInfoData = [
    {

      image: PickMeals,
      title: "انتخاب",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان روزنامه",
    },
    {
      image: ChooseMeals,
      title: "نحوه ارسال",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان روزنامه ",
    },
    {

      image: DeliveryMeals,
      title: "ارسال سریع",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان روزنامه",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        
        <h1 className="primary-heading text-warning ">نحوه ارسال</h1>
        <p className="primary-text">
         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان روزنامه
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );

};

export default Work;
