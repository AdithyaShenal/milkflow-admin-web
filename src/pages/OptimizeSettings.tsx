import { Link, Outlet } from "react-router-dom";

const OptimizeSettings = () => {
  return (
    <>
      <div>
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link to="autoSettings">Auto Resolve</Link>
            </li>
            <li>
              <a>Route-Wise Resolve</a>
            </li>
          </ul>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default OptimizeSettings;
