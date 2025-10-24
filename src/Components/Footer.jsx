import logo from "../assets/favicon.png";
import twitter from "../assets/fi_5969020.png";
import fb from "../assets/fb.png";
import linkdin from "../assets/linkdin.png";

const Footer = () => {
  return (
    <div className="bg-secondary">
      <footer className="footer flex flex-col lg:flex-row  justify-around  text-primary  p-10 py-16  md:px-42">
        <aside>
          <img className="h-10 w-10" src={logo} alt="" />
          <p className="text-3xl font-primary font-extrabold">WarmPaws</p>
          <div className="flex items-center gap-4">
            <a href="#">
              <img src={twitter} alt="" />
            </a>
            <a href="#">
              <img src={fb} alt="" />
            </a>
            <a href="#">
              <img src={linkdin} alt="" />
            </a>
          </div>
        </aside>
        <div>
          <h3 className="font-bold text-2xl mb-2">Contact Us</h3>
          <ul className="space-y-1 font-semibold text-base">
            <li>
              <p>Address: 123 House Building, Uttara, Dhaka-1207</p>
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
        <div>
          <h1 className="text-2xl  font-bold">Join Us</h1>
          <div className="w-[350px] mt-3">
            <div className="flex relative">
              <input
                type="email"
                className="input flex-1 w-full bg-white border-orange-200 focus:border-0 text-lg"
                placeholder="Email"
              />
              <button className="btn absolute right-0  btn-primary text-white font-primary rounded-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <p className="text-center text-amber-600 pb-3">© All Right Deserved WarmPaws 2025</p>
    </div>
  );
};

export default Footer;
