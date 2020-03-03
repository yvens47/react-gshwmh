import React from "react";
import BusinessIcon from '@material-ui/icons/Business';

export default function Property(props) {
  return (
    <div class="property-container">
      <div class="property-image ">
        <a
          href="http://www.ongoingthemes.com/RealAX/properties/via-di-boccea-view/"
          class="property-box-image-inner "
        >
          <img
            width="640"
            height="425"
            src={props.imageUrl}
            class="attachment-large size-large wp-post-image"
            alt=""
          />
          <div class="property-price">
            <h4>{props.property.type} </h4>
          </div>
          <div class="arrow-ribbon">
            <span class="property-badge">Sale</span>
          </div>
        </a>
      </div>
      <div class="property-content">
        <h3>
          <a href="http://www.ongoingthemes.com/homelist/properties/via-di-boccea-st/">
            Via di Boccea St.
          </a>{" "}
          <small>
            <i class="flaticon-pin-1" /> Via di Boccea St, Italy
          </small>
        </h3>
      </div>

      <div class="property-attributes text-center">
        <div class="col-xs-4">
          <h4>
            <i class="flaticon-plans" /> 2
          </h4>
          <p class="text-overflow" title="Rooms">
            Rooms
          </p>
        </div>
        <div class="col-xs-4">
          <h4>
            <i class="flaticon-bed" /> 1
          </h4>
          <p class="text-overflow" title="Bedrooms">
            Bedrooms
          </p>
        </div>
        <div class="col-xs-4">
          <h4>
            <i class="flaticon-bathtub" /> 1
          </h4>
          <p class="text-overflow" title="Bath">
            Bath
          </p>
        </div>
      </div>
      <div class="property-buttons">
        <a
          href="http://www.ongoingthemes.com/homelist/properties/via-di-boccea-st/"
          class="property-btn"
        >
          Browse
        </a>
      </div>
    </div>
  );
}
