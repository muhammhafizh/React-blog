import { Link } from "react-router-dom";

const NotFound = () => (  
    <div className="not-found">
        <h2>Sorry</h2>
        <p>Page cannot be faound</p>
        <Link to="/">Bck to homepage...</Link>
    </div>
)
 
export default NotFound;