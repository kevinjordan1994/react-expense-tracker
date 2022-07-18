import "./ChartBar.css";

function ChartBar(props) {
  let barFillAmount = "0%";
  if (props.maxValue > 0) {
    barFillAmount = (props.value / props.maxValue) * 100 + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillAmount }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
