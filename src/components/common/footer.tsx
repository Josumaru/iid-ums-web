import { NextPage } from "next";
import { useEffect, useState } from "react";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return <div className="text-center mb-10 mt-1 mx-5 md:text-base text-sm">© All rights reserved - {currentYear} | Created by Overlogic</div>;
};

export default Footer;
