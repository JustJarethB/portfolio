import React from "react";
import { Link } from "react-router-dom";
import { Section, Panel } from "../components";
export default () => (
  <span>
    <p>
      This website was built using React by myself in order to show off my
      skills and compentency. The source code can be found on my{" "}
      <Link to={"github"}>Github</Link>
    </p>
    <Section title="Employment History">
      <WorkHistory title="Existence" startDate={0} endDate={0}>
        During the summer break after finishing college I took a summer job
        working at Existence (now Aydon Murison [09/2018]). There I began my
        journey learning PHP and JS, and greatly improving CSS and HTML. A
        showcase of my work is the map integration for{" "}
        <a href="http://www.travelalconburyweald.co.uk/map">Alconbury Weald </a>
      </WorkHistory>
      <WorkHistory
        title="TUI UK&I"
        startDate={"12/09/2016"}
        endDate={"21/06/2018"}>
        I spend a little under 2 years working at TUI where I was doing an
        apprenticeship. This awarded me a L3 City & Guilds qualification. A
        showcase of work is the <a href="https://www.tui.co.uk/">TUI Website</a>,
        which I worked on as part of a large team
      </WorkHistory>
      <WorkHistory title="Xanda" startDate={"25/06/2018"} endDate={"Present"}>
        I was initially hired as a ReactJS developer for Xanda, however, long
        story short, I ended up being put on a game development team. My work
        involved a C-Sharp Unity project for Android and iOS. This was great
        experience and has allowed me to widen my skill set.
      </WorkHistory>
    </Section>
  </span>
);

const WorkHistory = ({ title, children, startDate, endDate }) => (
  <Panel title={title} subTitle={`${startDate} - ${endDate}`}>
    {children}
  </Panel>
);
