"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import BeatLoader from "react-spinners/BeatLoader";
import Confetti from "react-confetti";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    setIsDisabled(email.trim() === "");
  }, [email]);

  const handleSubscribe = async (event) => {
    event.preventDefault(); // Prevent form submission

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsLoading(true); // Set loading to true when request starts

    try {
      const response = await axios.post("/api/subscribe", { email });
      setEmail("");
      toast.success("🎉 Thank you for subscribing to our newsletter! ");
      setTimeout(() => setIsSubscribed(true), 1000);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setEmail("");
          toast("You’re already subscribed to our newsletter 📬.");
        } else {
          toast.error("Something went wrong. Please try again later.");
        }
      } else if (error.request) {
        toast.error("No response from the server. Please try again later.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false); // Set loading to false when request completes
      setIsSubscribed(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-3 font-poppins relative overflow-hidden">
      {isSubscribed && (
        <Confetti
          recycle={false}
          numberOfPieces={700}
          height={200}
          width={window.innerWidth}
        />
      )}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 3000 }}
      />
      <form onSubmit={handleSubscribe}>
        <h1 className="mb-4 text-center text-lg md:text-xl text-white">
          Subscribe to our Newsletter
        </h1>
        <div className="flex flex-col sm:flex-row items-center mb-3 w-full">
          <div className="w-full sm:w-auto rounded-full hover:shadow-lg hover:border border-white p-3 bg-[#5785F0] mb-3 sm:mb-0 sm:mr-3">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none bg-[#5785F0] pl-3 placeholder-white text-white"
            />
          </div>
          <button
            type="submit"
            className={`p-3 sm:w-auto text-center border rounded-full ${
              isDisabled || isLoading
                ? "bg-white text-[#0238B3] border-white cursor-not-allowed"
                : "bg-white text-[#0238B3] border-white cursor-pointer hover:bg-black hover:text-white hover:border-black"
            }`}
            disabled={isDisabled || isLoading}>
            {isLoading ? <BeatLoader size={10} color="black" /> : "Subscribe"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
