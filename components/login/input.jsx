import React from "react";
import BusinessIcon from "@material-ui/icons/Business";

export default function Input(props) {
  return (
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <small id="emailHelp" class="form-text text-muted">
        We'll never share your email with anyone else.
      </small>
    </div>
  );
}
