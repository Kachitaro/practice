import { useNavigate, useParams,useLocation  } from 'react-router-dom';

function DetailColor() {
  let params = useLocation();
  console.log(params);

  const {slug} = useParams();
  console.log(slug);
  let history = useNavigate ();
  return ( <>
    <div>
      <h1>Bạn đã nhấn vào màu {params.state.color}</h1>
      <button type="button" onClick={() => history(-1)}>
      Go back
    </button>
    </div>
  </>);
}
export default DetailColor;