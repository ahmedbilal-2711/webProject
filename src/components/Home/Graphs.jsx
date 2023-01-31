import AttendanceGraph from "./AttendanceGraph";
import CgpaGraph from "./CgpaGraph";
const Graphs = () => {
  return (
    <div
      style={{
        padding: "3rem 0rem 3rem 0rem",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        display: "flex",
        gap: "4rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AttendanceGraph />
      <CgpaGraph />
    </div>
  );
};

export default Graphs;
