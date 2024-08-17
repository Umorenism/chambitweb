import pic from "../public/imageLogo/pic1.jpg";
import pic2 from "../public/imageLogo/pic2.jpg";
import pic3 from "../public/imageLogo/pic3.jpg";
import pic4 from "../public/imageLogo/pic4.jpg";
const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center  px-4 flex-col bg-slate-100">
      <h1 className="text-2xl font-bold mb-4 md:text-4xl text-green-700 uppercase underline">
        Concierge Service
      </h1>

      <div className="bg-white shadow-lg py-2 rounded-md w-full max-w-[1100px] flex px-4 flex-col md:flex-row">
        <div className="md:w-[20%] aspect-video h-auto  py-4 w-full">
          <img src={pic} className="w-full" />
        </div>
        <div className="md:w-[80%] justify-center flex flex-col w-full">
          <h1 className="text-3xl">Name:Pam Chambit</h1>
          <h2 className="text-xl py-2">
            Telegram Username:<a href="https://www.telegram.com">Pam_berry</a>
          </h2>
          <p>Official:Concierge Service</p>
        </div>
      </div>
      <div className="bg-white shadow-lg py-2 rounded-md w-full max-w-[1100px] flex px-4 flex-col mt-4 md:flex-row">
        <div className="md:w-[20%] aspect-video h-auto  py-4 w-full">
          <img src={pic2} className="w-full" />
        </div>
        <div className="md:w-[80%] justify-center flex flex-col w-full ml-2">
          <h1 className="text-3xl">Name:Pam Chambit</h1>
          <h2 className="text-xl">
            Telegram Username:<a href="https://www.telegram.com">Pam_berry</a>
          </h2>
          <p>Official:Concierge Service</p>
        </div>
      </div>
      <div className="bg-white shadow-lg py-2 rounded-md w-full max-w-[1100px] flex px-4 flex-col mt-4 md:flex-row">
        <div className="md:w-[20%] aspect-video h-auto  py-4 w-full">
          <img src={pic3} className="w-full" />
        </div>
        <div className="md:w-[80%] justify-center flex flex-col w-full ml-2">
          <h1 className="text-3xl">Name:Pam Chambit</h1>
          <h2 className="text-xl">
            Telegram Username:<a href="https://www.telegram.com">Pam_berry</a>
          </h2>
          <p>Official:Concierge Service</p>
        </div>
      </div>
      <div className="bg-white shadow-lg py-2 rounded-md w-full max-w-[1100px] flex px-4 flex-col mt-4 md:flex-row">
        <div className="md:w-[20%] aspect-video h-auto  py-4 w-full">
          <img src={pic4} className="w-full" />
        </div>
        <div className="md:w-[80%] justify-center flex flex-col w-full ml-2">
          <h1 className="text-3xl">Name:Pam Chambit</h1>
          <h2 className="text-xl">
            Telegram Username:<a href="https://www.telegram.com">Pam_berry</a>
          </h2>
          <p>Official:Concierge Service</p>
        </div>
      </div>
    </div>
  );
};

export default App;
