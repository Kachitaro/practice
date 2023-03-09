import { useNavigate, useParams,useLocation  } from 'react-router-dom';

function DetailColor2() {
  let params = useLocation();
  console.log(params);

  const {slug} = useParams();
  console.log(slug);
  let history = useNavigate ();
  return ( <>
    <div>
      <h1>color 2  {params.state.color}</h1>
      <button type="button" onClick={() => history(-1)}>
      Go back
    </button>
    </div>
  </>);
}
export default DetailColor2;