import { StatusComponent } from "src/@types";

const StatusBlock: StatusComponent = ({ title, current, max, desc }) => {
  let flag = "status__flag--active";

  if (current >= max) {
    flag = "status__flag--full";
  }

  return (
    <>
      <div className="status">
        <div className={`status__flag ${flag}`}></div>
        <div className="status__title">
          <h2>{title}</h2>
        </div>
        <div className="status__description">
          <p>{desc}</p>
        </div>
        <div className="status__count">
          {current}/{max}
        </div>
      </div>
    </>
  );
};

export default StatusBlock;
