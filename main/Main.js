import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Main.css";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Degoption from "./Maincomponent/Degoption";
import RegulationOption from "./Maincomponent/RegulationOption";
import SemesterOption from "./Maincomponent/SemesterOption";
import Semnum from "./Maincomponent/Semnum";
import Tables from "./Maincomponent/Tables";

const Main = () => {
  const [deg, setDeg] = useState([]);
  const [sem, setSem] = useState([]);
  const [sub, setSub] = useState([]);
  const [fac, setFac] = useState([]);

  const [firstsem, setFirstsem] = useState([]);
  const [secondsem, setSecondsem] = useState([]);
  const [thirdsem, setThirdsem] = useState([]);
  const [firstsub, setFirstsub] = useState([]);

  const API_DEG = "http://localhost:3500/deg_prog";
  const API_SEM = "http://localhost:3500/semester";
  const API_SUB = "http://localhost:3500/subject";
  const API_FAC = "http://localhost:3500/faculty";

  useEffect(() => {
    Axios.get(API_DEG).then((res) => setDeg(res.data));
    Axios.get(API_SEM).then((res) => setSem(res.data));
    Axios.get(API_SUB).then((res) => setSub(res.data));
    Axios.get(API_FAC).then((res) => setFac(res.data));

    /*Axios.get("http://127.0.0.1:8000/api/").then((res) =>
      console.log(res.data)
    );*/
  }, []);

  const handlesubmit = (e) => {
    const data = sem.filter((d) => d.deg_name === e);
    setFirstsem(data);
  };

  const handlereq_year = (e) => {
    const data = firstsem.filter((d) => d.req_year === e);
    setSecondsem(data);
  };

  const handlesemester = (e) => {
    const data = secondsem.filter((d) => d.sem === e);
    setThirdsem(data);
  };

  const handlesubject = (e) => {
    const a = Number(e.slice(3, 4));
    const data = sub.filter((d) => d.sem_id === a);
    setFirstsub(data);
  };

  return (
    <div className="main">
      <Degoption handlesubmit={handlesubmit} deg={deg} />
      <RegulationOption handlereq_year={handlereq_year} />
      <SemesterOption handlesemester={handlesemester} />
      <Semnum handlesubject={handlesubject} thirdsem={thirdsem} />
      <Tables fac={fac} firstsub={firstsub} setFirstsub={setFirstsub} />
      {}
    </div>
  );
};

export default Main;
