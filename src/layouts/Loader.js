import React , {useEffect} from 'react';
import { HashLoader } from 'react-spinners';
import $ from 'jquery';

const Loader = (props) => {
  let loader = true
  
  useEffect(() => {  
    if(loader){
      $('body').addClass('overlay');  
      $('body').removeClass('overlay');
    }
    else{
      $('body').removeClass('overlay');
    }
    
  });

  if(loader){
    return (
      <main className="loder-center">
        <div className="container-fluid">
          <div className='sweet-loading'>
              <HashLoader color={'#EB9D1A'}  loading={loader} />
              <p>{props.message && props.message}</p>
            </div>
         </div>
      </main>
    )
  }
}

export default Loader;