"use client";
import Styles from "@/app/layout.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Review() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#ff0000");
  const router = useRouter();

  const onSubmit = () => {
    router.push("/review/thanks");
  };

  return (
    <>
      <h1>Please review the site:</h1>

      <form
        onSubmit={onSubmit}
        method="post">
        <div className={Styles.review}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="user_name"
            required
          />
          <label htmlFor="mail">Email:</label>
          <input
            type="email"
            id="mail"
            name="user_email"
            required
          />
          <label htmlFor="start">Birthdate:</label>

          <input
            type="date"
            id="start"
            name="trip-start"
            min="1970-01-01"
            max="2030-12-31"
            required
          />
          <label htmlFor="msg">Message: ({count}/255)</label>
          <textarea
            id="msg"
            name="user_message"
            maxLength={255}
            required
            onChange={(e) => setCount(e.target.value.length)}
            style={{ resize: "none", minHeight: "100px" }}></textarea>

          <div className={Styles.rating}>
            <label htmlFor="rating">Rating:</label>
            {Array.from(Array(5).keys()).map((i) => [
              <input
                type="radio"
                id={`rating-${i + 1}`}
                name="rating"
                value={i + 1}
              />,
              <label htmlFor={`rating-${i}`}>{i + 1}</label>,
            ])}
          </div>
          <label
            style={{ color: color }}
            htmlFor="favcolor">
            Select your favorite color:
          </label>
          <input
            type="color"
            id="favcolor"
            name="favcolor"
            value={color}
            required
            onChange={(e) => setColor(e.target.value)}
          />
          <div className={Styles.rating}>
            <label htmlFor="terms">Terms and conditions</label>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
            />
          </div>
        </div>

        <input
          type="submit"
          value="Submit"></input>
      </form>
    </>
  );
}
