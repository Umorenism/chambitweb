import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import pic from "../public/imageLogo/pic1.jpg";
import pic2 from "../public/imageLogo/pic2.jpg";
import pic3 from "../public/imageLogo/pic3.jpg";
import pic4 from "../public/imageLogo/pic4.jpg";

// Sample images to use in the slider
const images = [pic, pic2, pic3, pic4]; // Replace with your own image paths
const dataList = [
  {
    name: "",
    contact: "",
    offiice: "",
  },
];

const App = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="min-h-screen flex justify-center items-center  px-4 flex-col bg-slate-100">
      <h1 className="text-2xl font-bold mb-4 md:text-4xl text-green-700 uppercase underline">
        Concierge Service
      </h1>

      <div className="bg-white shadow-lg py-4 rounded-md w-full max-w-[1100px]">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <div className="flex justify-center flex-col items-center p-2 md:flex-row ">
                <div className="h-[200px] w-[200px] rounded-md p-2 md:w-[300px]">
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="rounded-md shadow-xl object-contain"
                  />
                </div>
                {dataList.map((item, index) => (
                  <div
                    key={index}
                    className=" w-full py-5 rounded-md mt-4 md:mt-0"
                  >
                    <h1 className="text-2xl font-bold">
                      Name:Umoren victor{item.name}
                    </h1>
                    <h5 className="text-blue-600 text-xl">
                      Contact:umorentelegram.com{item.contact}
                    </h5>
                    <p className="text-xl text-slate">
                      Office:verified Concieger{item.offiice}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default App;
