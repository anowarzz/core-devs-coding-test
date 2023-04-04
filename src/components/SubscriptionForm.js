import { useState, useRef } from "react";
import hitToast from "../helpers/hitToast";

export default function SubscriptionForm() {

//states to store email and alert 
  const [email, setEmail] = useState("");
  const [alertClass, setAlertClass] = useState("");
  let parentComp = useRef();


// Regular expression to check if the input email is valid or not
  const validate = (email) => {
    if (email.trim() === "") {
      return false;
    }
    const validationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return validationRegex.test(email);
  };




  const handleSubmit = (e) => {
    e.preventDefault();



    if (!validate(email)) {
      return setAlertClass("alert-validate");
    }
    else{
    setAlertClass("");
    }

    fetch("https://api-jobs.coredevs.ltd/sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.text())
      .then((data) => JSON.parse(`${data}`))
      .then((data) =>
        hitToast(data.message, data.success ? "success" : "error")
      )
      .catch(() =>
        hitToast("Something went wrong. Please try again.", "error")
      );

    setAlertClass("");
  };


  return (
    <form
      className="w-full flex-w flex-c-m validate-form validate-input"
      onSubmit={handleSubmit}
    >
      <div
        ref={parentComp}
        className={"wrap-input100  where1 " + alertClass}
        data-validate="Valid email is required: user@email.domain"
      >
        <input
          className="input100 placeholder0 s2-txt2"
          type="text"
          name="email"
          placeholder="Enter Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="focus-input100"></span>
      </div>

      <button className="flex-c-m size3 s2-txt3 how-btn1 trans-04 where1">
        Subscribe
      </button>
    </form>
  );
}
