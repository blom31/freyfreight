import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img
            alt="Kinetic Horizon Footer Logo"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCurIWlR9FrDVzbk34bspbuJF0-yc2-fDUoC-__WczDbBtLJ-r8TaZBIFFyQwiYf6dKG0kuqa-zR0-AaYQIyA6901vl2jq9-rtgjVATm9j1Y4w4KhjACSd6vVVW2MGO-vvIUQKGL2A_sm9PUOSErtqVh52kR02rZZ_diKFsIaQZuBWv5zDy0XcZRdFHTn_iCfhoQ0JhwMNbkgxx7qu8azxuBB6W1sWOkb699yhWRQq7MC9RAt73C7hQ0tnUspLuz6Ceq8kP26eHBKM"
          />
        </div>
        <div className="footer__links">
          <Link className="footer__link" to="/privacy">
            Privacy Policy
          </Link>
          <Link className="footer__link" to="/terms">
            Terms of Service
          </Link>
        </div>
        <div className="footer__copyright">
          © 2026 FeyFreight. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
