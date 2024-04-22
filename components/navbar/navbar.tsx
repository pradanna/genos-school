import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Icon,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";
import Link from "next/link";
import "./navbar.css";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar">
      <div className="content">
        <div>
          <Link href={"/#"}>
            <Image
              src="/assets/images/local/company-logo.png"
              alt="My Company Logo"
              width={200}
              height={75}
              sizes="(max-width: 200px)"
              className="h-16 max-w-36"
              style={{ objectFit: "scale-down" }}
            />
          </Link>
        </div>
        <div className="navbar-links">
          <Link href={"#"} color="inherit" className="menu-link">
            Course
          </Link>
          <Link href={"#"} color="inherit" className="menu-link">
            About
          </Link>
          <Link href={"#"} color="inherit" className="menu-link">
            Teachers
          </Link>
          <Link href={"#"} color="inherit" className="menu-link">
            Testimonials
          </Link>
          <Link href={"#"} color="inherit" className="menu-link">
            Blog
          </Link>
          <Link href={"#"} color="inherit" className="menu-link">
            Contact
          </Link>
        </div>
        <div className="social-icons">
          <Link href="https://www.instagram.com/">
            <Icon className="icon">
              <InstagramIcon />
            </Icon>
          </Link>
          <Link href="https://www.facebook.com/">
            <Icon className="icon">
              <FacebookIcon />
            </Icon>
          </Link>

          <Link href="https://www.whatsapp.com/">
            <Icon className="icon">
              <WhatsAppIcon />
            </Icon>
          </Link>
        </div>
        <div className="menu-icon">
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: "white" }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Course</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Teachers</MenuItem>
          <MenuItem onClick={handleClose}>Testimonials</MenuItem>
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
          <hr />
          <div className="social-icons-dropdown">
            <Link href="https://www.instagram.com/">
              <Icon className="icon">
                <InstagramIcon />
              </Icon>
            </Link>
            <Link href="https://www.facebook.com/">
              <Icon className="icon">
                <FacebookIcon />
              </Icon>
            </Link>

            <Link href="https://www.whatsapp.com/">
              <Icon className="icon">
                <WhatsAppIcon />
              </Icon>
            </Link>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
