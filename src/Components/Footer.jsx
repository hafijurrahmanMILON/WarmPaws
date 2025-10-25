import logo from "../assets/favicon.png";
import twitter from "../assets/icon-linkedin.png";
import fb from "../assets/icon-facebook.png";
import yt from "../assets/icon-youtube.png";

const Footer = () => {
  return (
    <div className="bg-secondary">
      <footer className="footer flex flex-col lg:flex-row  justify-around  text-primary  p-10 py-16  md:px-42">
        <aside>
          <img className="h-10 w-10" src={logo} alt="" />
          <p className="text-3xl font-primary font-extrabold">WarmPaws</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=100076280714871"
              target="_blank"
            >
              <img src={fb} alt="" />
            </a>
            <a
              href="https://www.youtube.com/@cutestanimalsbaby"
              target="_blank"
            >
              <img src={yt} alt="" />
            </a>
            <a href="https://x.com/naturelife_ok" target="_blank">
              <img className="w-9" src={twitter} alt="" />
            </a>
          </div>
        </aside>
        <div>
          <h3 className="font-bold text-2xl mb-2">Contact Us</h3>
          <ul className="space-y-1 font-semibold text-base">
            <li>
              <p>
                Address: 123 House Building,
                <br /> Uttara, Dhaka-1207
              </p>
            </li>
            <li>
              <p>Phone: +880 1234 567890</p>
            </li>
            <li>
              <p>Email: support@warmpaws.com</p>
            </li>
            <li>
              <span>Hours: Sat-Thu, 9AM-6PM</span>
            </li>
          </ul>
        </div>
        <nav>
          <h6 className="font-bold mb-2 text-2xl">Legal</h6>
          <div className="flex flex-col space-y-1 font-semibold text-base">
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </nav>
        <div className=" ">
          <h1 className="text-2xl  font-bold">Join Us</h1>
          <div className=" mt-3">
            <div className="flex ">
              <input
                type="email"
                className="input bg-white  border-none  rounded-l-full  text-lg focus:outline-none focus:ring-0  px-3 py-3"
                placeholder="email"
              />
              <button className="btn   text-white font-primary rounded-none rounded-r-full bg-gradient-to-br from-amber-400 to-orange-500 hover:opacity-90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <p className="text-center text-amber-600 pb-3">
        © WarmPaws All Right Deserved 2025
      </p>
    </div>
  );
};

export default Footer;
