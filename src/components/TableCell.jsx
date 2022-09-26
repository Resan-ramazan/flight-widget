import { useState } from "react";

const TableCell = ({ word, index }) => {
  const [flip, setFlip] = useState(false);

  setTimeout(() => {
    setFlip(true);
  }, 100 * index);

  return (
    <td>
      {Array.from(word).map((letter, index) => (
        <div className={flip ? 'flip' : null}>
          {flip? letter : null}
        </div>
      ))}
    </td>
  );
};

export default TableCell;
