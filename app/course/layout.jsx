import React from "react";
import DashboardHeader from "../dashboard/_components/DashboardHeader";
import Header from "../dashboard/_components/Header";

function CourseViewLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="mx-10 md:mx-36 lg:px-60 mt-10">
      {children}
      </div>
    </div>
  );
}

export default CourseViewLayout;
