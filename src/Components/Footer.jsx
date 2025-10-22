import logo from "../assets/favicon.png";
import twitter from "../assets/fi_5969020.png";
import fb from "../assets/fb.png";
import linkdin from "../assets/linkdin.png";

const Footer = () => {
  return (
    <footer className="footer md:footer-horizontal bg-secondary  text-primary  p-10  md:px-42">
      <aside>
        <img className="h-10 w-10" src={logo} alt="" />
        <p className="text-2xl font-primary font-bold">WarmPaws</p>
      </aside>
      <div>
        <h3 className="font-bold text-xl mb-2">Contact Us</h3>
        <ul className="space-y-1 font-body text-sm">
          <li>
            <span className="font-medium">Address:</span> 123 Cozy Street, Dhaka
            1207
          </li>
          <li>
            <span className="font-medium">Phone:</span> +880 1234 567890
          </li>
          <li>
            <span className="font-medium">Email:</span> support@warmpaws.com
          </li>
          <li>
            <span className="font-medium">Hours:</span> Sat–Thu, 9AM–6PM
          </li>
        </ul>
      </div>
      <nav>
        <h6 className="font-bold mb-2 text-xl">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <div>
        <h1 className="text-xl  font-bold">Social Links</h1>
        <div className="flex items-center gap-4">
          <img src={twitter} alt="" />
          <img src={fb} alt="" />
          <img src={linkdin} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
