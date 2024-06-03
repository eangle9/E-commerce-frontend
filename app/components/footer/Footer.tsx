import Container from "@/app/components/Container";
import FooterList from "@/app/components/footer/FooterList";
import Link from "next/link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-xs tracking-wide mt-8">
      <Container>
        {/* <div className="pt-16 pb-8 flex flex-col sm:flex-row sm:flex-nowrap justify-between"> */}
        <div className="grid grid-cols-2 md:grid-cols-4 content-between pb-8 pt-16">
          <FooterList>
            <h1 className="text-base font-bold mb-2 whitespace-nowrap">Shop Categories</h1>
            <Link href="#" className="link">
              Electronics
            </Link>
            <Link href="#" className="link">
              Shoes & Clothes
            </Link>
            <Link href="#" className="link">
              Dairy Products
            </Link>
            <Link href="#" className="link">
              Beverages
            </Link>
            <Link href="#" className="link">
              Vegetables & Fruits
            </Link>
            <Link href="#" className="link">
              Beverages
            </Link>
          </FooterList>
          <FooterList>
            <h1 className="text-base font-bold mb-2 whitespace-nowrap">Customer Service</h1>
            <Link href="#" className="link">
              Contact Us
            </Link>
            <Link href="#" className="link">
              Shipping Policy
            </Link>
            <Link href="#" className="link">
              Returns & Exchanges
            </Link>
            <Link href="#" className="link">
              Watches
            </Link>
            <Link href="#" className="link">
              FAQs
            </Link>
          </FooterList>
          {/* <div className="w-full md:w-1/3 mb-6 md:mb-0 pr-5"> */}
          <FooterList>
            <h1 className="text-base font-bold mb-2 whitespace-nowrap">About Us</h1>
            <Link href="#" className="link">
              About Eagle Shop
            </Link>
            <Link href="#" className="link">
              Safty tips
            </Link>
            <Link href="#" className="link">
              Terms & Conditions
            </Link>
            <Link href="#" className="link">
              Privacy Policy
            </Link>
            <Link href="#" className="link">
              Billing Policy
            </Link>
          </FooterList>
          {/* <p className="mb-2 leading-5">
              Welcome to Eangle Shop, your premier destination for [product type
              or niche, e.g., "fashion accessories", "electronics", etc.]. We
              are committed to offering high-quality products, exceptional
              customer service, and unique finds. Thank you for choosing Eagle
              Shop. If you have any questions, feel free to contact us.
            </p>
            <p>
              &copy; {new Date().getFullYear()} Eagle Shop. All rights reserved
            </p> */}
          {/* </div> */}
          <FooterList>
            <h1 className="text-base font-bold mb-2 whitespace-nowrap">Follow Us</h1>
            <div className="flex gap-2 text-white">
              <Link href="#" className="hover:opacity-70 transition">
                <FacebookOutlinedIcon />
              </Link>
              <Link href="#" className="hover:opacity-70 transition">
                <SubscriptionsOutlinedIcon />
              </Link>
              <Link href="#" className="hover:opacity-70 transition">
                <AddIcCallOutlinedIcon />
              </Link>
              <Link href="#" className="hover:opacity-70 transition">
                <MailOutlinedIcon />
              </Link>
            </div>
          </FooterList>
        </div>
        <p className="text-center mb-20 text-sm">&copy; {new Date().getFullYear()} eagleshop.com.et</p>
      </Container>
    </footer>
  );
};

export default Footer;
