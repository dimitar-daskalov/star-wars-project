import { useState } from "react";
import { IStarWarsCharacter, IStarWarsResponse } from "../interfaces";
import TableModal from "./TableModal";

interface TableDataProps {
  tableData: IStarWarsResponse;
}

const propsToShow = [
  { name: "mass", key: "mass" },
  { name: "height", key: "height" },
  { name: "hair color", key: "hair_color" },
  { name: "skin color", key: "skin_color" },
];

const DataTable = ({ tableData }: TableDataProps) => {
  const { results } = tableData;

  const [selectedResult, setSelectedResult] =
    useState<IStarWarsCharacter | null>(null);

  const handleModalOpen = (result: IStarWarsCharacter) => {
    setSelectedResult(result);
  };

  const handleModalClose = () => {
    setSelectedResult(null);
  };

  return (
    <>
      <table className="table">
        <thead className="uppercase bg-secondary">
          <tr>
            <th scope="col" className="px-6 py-3">
              name
            </th>
            <th scope="col" className="sm:hidden px-6 py-3">
              details
            </th>
            {propsToShow.map(({ name }) => (
              <th
                key={name}
                scope="col"
                className="hidden sm:table-cell px-6 py-3 uppercase"
              >
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results?.map((result) => (
            <tr key={result.name} className="odd:bg-gray-400 even:bg-secondary">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-primary"
              >
                {result.name}
              </th>
              <td scope="col" className="sm:hidden px-6 py-4">
                <button
                  type="button"
                  onClick={() => handleModalOpen(result)}
                  className="button"
                >
                  Open
                </button>
              </td>
              {propsToShow.map(({ key }) => (
                <td key={key} className="table-data-cell">
                  {result?.[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {selectedResult && (
        <TableModal
          isModalOpen={!!selectedResult}
          onCloseModal={handleModalClose}
          data={
            <div className="gap-2">
              {propsToShow.map((prop) => (
                <div key={prop.key} className="table-data-item">
                  <p className="capitalize">{prop.name}: </p>
                  <p>{selectedResult?.[prop.key]}</p>
                </div>
              ))}
            </div>
          }
        />
      )}
    </>
  );
};

export default DataTable;
