import React from 'react';

const Pagination = () => (
  <div>
    <div className="header">
      <h4 className="title">Pagination</h4>
    </div>

    <div className="content">
      <p>
        Color-classes:
      </p>
      <ul>
        <li>pagination</li>
        <li>pagination-primary</li>
        <li>pagination-success</li>
        <li>pagination-info</li>
        <li>pagination-warning</li>
        <li>pagination-danger</li>
      </ul>
      &nbsp;
      <ul className="pagination pagination-primary">
        <li><a href="<">«</a></li>
        <li><a href="1">1</a></li>
        <li><a href="2">2</a></li>
        <li className="active"><a href="3">3</a></li>
        <li><a href="4">4</a></li>
        <li><a href="5">5</a></li>
        <li><a href=">">»</a></li>
      </ul>
      &nbsp;
      <ul className="pagination pagination-success">
        <li><a href="<<">«</a></li>
        <li><a href="01">1</a></li>
        <li><a href="02">2</a></li>
        <li className="active"><a href="03">3</a></li>
        <li><a href="04">4</a></li>
        <li><a href="05">5</a></li>
        <li><a href=">>">»</a></li>
      </ul>
      &nbsp;
      <ul className="pagination pagination-no-border">
        <li><a href="<<<">«</a></li>
        <li><a href="001">1</a></li>
        <li><a href="002">2</a></li>
        <li className="active"><a href="003">3</a></li>
        <li><a href="004">4</a></li>
        <li><a href="005">5</a></li>
        <li><a href=">>>">»</a></li>
      </ul>

    </div>
  </div>
);

export default Pagination;
