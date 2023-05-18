import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import toast, { Toaster } from "react-hot-toast";

const Main = () => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const targetText = "Cooming Soon....";
  let index = 0;

  useEffect(() => {
    const typeNextCharacter = () => {
      if (index < targetText.length) {
        setText((prevText) => prevText + targetText.charAt(index));
        index++;
        setTimeout(typeNextCharacter, 200); // Delay between characters (adjust as needed)
      } else {
        setTimeout(eraseText, 4000); // Delay before erasing the text (adjust as needed)
      }
    };

    const eraseText = () => {
      if (index > 0) {
        setText((prevText) => prevText.slice(0, -1));
        index--;
        setTimeout(eraseText, 100); // Delay between erasing characters (adjust as needed)
      } else {
        setTimeout(typeNextCharacter, 1000); // Delay before typing the text again (adjust as needed)
      }
    };

    typeNextCharacter(); // Start typing

    // Clean up function to clear timeouts when the component unmounts
    return () => {
      clearTimeout();
    };
  }, []); // Empty dependency array to run the effect only once on component mount

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email is empty or invalid
    if (!email || !validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Save the email address to a file using an API endpoint
    fetch("/api/save-email", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        toast.success("You have successfully joined the waiting list!");
        setEmail(""); // Clear the input field after successful submission
      })
      .catch(() => {
        toast.error("An error occurred. Please try again later.");
      });
  };

  const validateEmail = (email) => {
    // Email validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div
      className="main"
      style={{
        backgroundImage: 'url("images/restaurant.jp")',
        backgroundColor: "cyan",
      }}>
      {/*    Change the image source '/images/restaurant.jpg')" with your favourite image.     */}
      <div className="cover black" data-color="black" />
      {/*   You can change the black color for the filter with those colors: blue, green, red, orange       */}
      <div className="container">
        <h1 className="logo cursive">Acacia Enterprises</h1>
        {/*  H1 can have 2 designs: "logo" and "logo cursive"           */}
        <div className="content">
          <h5 className="info-text"></h5>
          <h4 className="motto">{text}</h4>
          <div className="subscribe">
            <h5 className="info-text">
              We are updating to a brand new website. Join the waiting list.
            </h5>
            <div className="row">
              <div className="col-md-4 col-md-offset-4 col-sm6-6 col-sm-offset-3 ">
                <form
                  className="form-inline"
                  role="form"
                  onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="sr-only" htmlFor="exampleInputEmail2">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control transparent"
                      placeholder="Your email here..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  &nbsp;
                  <button type="submit" className="btn btn-warning btn-fill">
                    Notify Me
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Main;
