import { StatusComponent } from "@types";

const StatusBlock: StatusComponent = ({ title, current, max, desc }) => {
  let flag = "-active";

  if (current >= max) {
    flag = "-full";
  }

  return (
    <>
      <div className="status-block">
        <div className={`flag ${flag}`}></div>
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="description">
          <p>{desc}</p>
        </div>
        <div className="count">
          {current}/{max}
        </div>
      </div>
    </>
  );
};

export default StatusBlock;
