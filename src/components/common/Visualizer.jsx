import React from "react";
import { useEditorContext } from "../../contexts/EditorContext";

const Visualizer = () => {
  const { visualizations, theme } = useEditorContext();
  if (!visualizations || visualizations.length === 0) {
    return <p>No arrays visualized yet.</p>;
  }

  return (
    <div className={`visualizer ${theme}`}>
      {visualizations.map((viz, index) => (
        <div
          key={index}
          className='matrix-block'
          style={{
            border: `2px solid ${viz.color || "#ccc"}`,
          }}
        >
          <div className={`headings ${theme}`}>
            {viz.type === 1
              ? `1D Array i = ${viz.heading}`
              : `2D Array (i,j) = ${viz.heading}`}
          </div>
          <table className='matrix-table'>
            <tbody>
              {viz.type === 1 ? (
                <tr>
                  {viz.data.map((val, j) => (
                    <td
                      key={j}
                      className={`${
                        viz.heading === [j].join(",") ? "curr-cell" : ""
                      }`}
                    >
                      {val}
                      <br />
                      <span className='dp-cell-indexes'> i: {j}</span>
                    </td>
                  ))}
                </tr>
              ) : (
                viz.data.map((row, i) => (
                  <tr key={i}>
                    {row.map((val, j) => (
                      <td
                        key={j}
                        className={`${
                          viz.heading === [i, j].join(",") ? "curr-cell" : ""
                        }`}
                        style={{ border: "1px solid #ccc" }}
                      >
                        {val === true ? "T" : val === false ? "F" : val}
                        <br />
                        <span className='dp-cell-indexes'>
                          {i}, {j}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Visualizer;
