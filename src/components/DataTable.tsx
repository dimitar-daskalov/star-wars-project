import { useState } from "react";
import { StarWarsCharacter, StarWarsResponse } from "../interfaces";
import TableModal from "./TableModal";

interface TableDataProps {
  tableData: StarWarsResponse;
}

const DataTable = ({ tableData }: TableDataProps) => {
  const { results } = tableData;

  const infoTableHeadings = ["mass", "height", "hair color", "skin color"];

  const [selectedResult, setSelectedResult] =
    useState<StarWarsCharacter | null>(null);

  const handleModalOpen = (result: StarWarsCharacter) => {
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
            {infoTableHeadings.map((heading) => (
              <th scope="col" className="hidden sm:table-cell px-6 py-3">
                {heading}
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
              <td className="table-data-cell">{result.mass}</td>
              <td className="table-data-cell">{result.height}</td>
              <td className="table-data-cell">{result.hair_color}</td>
              <td className="table-data-cell">{result.skin_color}</td>
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
              <div className="table-data-item">
                <p>Mass: </p>
                <p>{selectedResult.mass}</p>
              </div>
              <div className="table-data-item">
                <p>Height: </p>
                <p>{selectedResult.height}</p>
              </div>
              <div className="table-data-item">
                <p>Hair Color: </p>
                <p>{selectedResult.hair_color}</p>
              </div>
              <div className="table-data-item">
                <p>Skin Color: </p>
                <p>{selectedResult.skin_color}</p>
              </div>
            </div>
          }
        />
      )}
    </>
  );
};

export default DataTable;
