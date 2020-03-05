import React from "react";

export default function Property(props) {
  return (
    <div className="property-container">
      <div className="property-content-list">
        <div className="property-image-list">
          <img
            width="640"
            height="425"
            src="https://picsum.photos/200"
            class="attachment-large size-large wp-post-image"
            alt=""
          />
        </div>
        <div className="property-price">
          <h4>House</h4>
          <span>$ 148</span>
        </div>
        <div class="property-status">
          <span class="property-badge">Featured</span>
        </div>
        <div class="arrow-ribbon">
          <span class="property-badge">Rent</span>
        </div>
        <div class="property-text">
          <h3>
            <a href="http://www.ongoingthemes.com/homelist/properties/via-di-boccea-st/">
              Via di Boccea St.
            </a>{" "}
            <small>
              <i class="flaticon-pin-1" /> Via di Boccea St, Italy
            </small>
          </h3>
          <div>
            Typi non habent claritatem insitam; est usus legentis in iis qui
            facit...
          </div>

          <div class="property-attributes text-center">
            <div class="col-xs-3">
              <h4>
                <i class="flaticon-plans" /> 2
              </h4>
              <p class="text-overflow" title="Rooms">
                Rooms
              </p>
            </div>
            <div class="col-xs-3">
              <h4>
                <i class="flaticon-bed" /> 1
              </h4>
              <p class="text-overflow" title="Bedrooms">
                Bedrooms
              </p>
            </div>
            <div class="col-xs-3">
              <h4>
                <i class="flaticon-bathtub" /> 1
              </h4>
              <p class="text-overflow" title="Bath">
                Bath
              </p>
            </div>
            <div class="col-xs-3">
              <h4>
                <i class="flaticon-parking-1" /> 1
              </h4>
              <p class="text-overflow" title="Garages">
                Garages
              </p>
            </div>
          </div>

          <p>
            <a
              href="http://www.ongoingthemes.com/homelist/properties/via-di-boccea-st/"
              class="btn btn-success"
            >
              More Detail »
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
