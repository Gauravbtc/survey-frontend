import React from 'react';
import { HashLoader } from 'react-spinners';
import $ from 'jquery';

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentWillMount() {
    $('body').addClass('overlay')
  }
  
  componentWillUnmount() {
    $('body').removeClass('overlay');
  }

  render() {
    return (
        <main className="loder-center">
          <div className="container-fluid">
            <div className='sweet-loading'>
                <HashLoader color={'#EB9D1A'}  loading={this.state.loading} />
                <p>{this.props.message && this.props.message}</p>
              </div>
           </div>
        </main>
    )
  }
}

export default Loader;