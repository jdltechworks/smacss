import React from 'react';
import Menu from '../../base/components/Menu';

export default class NotFound extends React.Component {
  render() {
    let { params } = this.props;
    return(
        <div class="page-inner">
          <Menu />
          <section className="main">
            <div className="main--inner">
              <h2>Not Found</h2>
              <p>The page that you are looking for <span>{params.splat}</span> is not found</p>
            </div>
          </section>
        </div>
      );
  }
}