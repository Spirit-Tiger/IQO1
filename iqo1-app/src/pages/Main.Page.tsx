import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import InfoFrame from "../components/InfoFrame";

import WorkWithUs from '../components/WorkWithUs'
import DropdownFrame from "../components/DropdownFrame";
import MainFrame from "../components/MainFrame";

const MainPage = () => {
  return (
    <div>
        <MainFrame />
        <WorkWithUs />
        <InfoFrame />
        <DropdownFrame />
    </div>

  );
};

export default MainPage;

