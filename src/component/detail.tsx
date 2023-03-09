import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CSSProperties } from 'react';

function Detail() {
  const location = useLocation();
  let history = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  //console.log(searchParams);
  const color = searchParams.get('color');
  const bgStyle: CSSProperties = { backgroundColor: color || 'white' };
  return ( <>
    <div style={bgStyle}>
      <h1>Bạn đã chọn màu <Link to={`/detail/${color}`} state={{color}} >{color}</Link></h1>
      <button type="button" onClick={() => history(-1)}>
      Go back
    </button>
    </div>
  </>);
}
export default Detail;