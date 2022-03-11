/* eslint-disable react/prop-types */
import { useEffect } from "react";

const About = ({ setPage }) => {
  useEffect(() => {
    setPage("About");
  });

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>HW</div>
    </>
  );
};

export default About;
