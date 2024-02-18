import { useState } from "react";
import { StarWarsCharacter, StarWarsResponse } from "../interfaces";
import TableModal from "./TableModal";

interface ITableData {
  tableData: StarWarsResponse;
}

const DataTable = ({ tableData }: ITableData) => {
  const { results } = tableData;

  const [selectedResult, setSelectedResult] =
    useState<StarWarsCharacter | null>(null);

  const handleModalOpen = (result: StarWarsCharacter) => {
    setSelectedResult(result);
  };

  const handleModalClose = () => {
    setSelectedResult(null);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-400">
        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              name
            </th>
            <th scope="col" className="sm:hidden px-6 py-3">
              details
            </th>
            <th scope="col" className="hidden sm:table-cell px-6 py-3">
              mass
            </th>
            <th scope="col" className="hidden sm:table-cell px-6 py-3">
              height
            </th>
            <th scope="col" className="hidden sm:table-cell px-6 py-3">
              hair color
            </th>
            <th scope="col" className="hidden sm:table-cell px-6 py-3">
              skin color
            </th>
          </tr>
        </thead>
        <tbody>
          {results?.map((result) => (
            <tr
              key={result.name}
              className="odd:bg-white even:bg-gray-800 border-b border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                {result.name}
              </th>
              <td scope="col" className="sm:hidden px-6 py-4">
                <button
                  type="button"
                  onClick={() => handleModalOpen(result)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Open
                </button>
              </td>
              <td className="px-6 py-4 hidden sm:table-cell">{result.mass}</td>
              <td className="px-6 py-4 hidden sm:table-cell">
                {result.height}
              </td>
              <td className="px-6 py-4 hidden sm:table-cell">
                {result.hair_color}
              </td>
              <td className="px-6 py-4 hidden sm:table-cell">
                {result.skin_color}
              </td>
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
              <div className="flex items-center justify-between">
                <p>Mass: </p>
                <p>{selectedResult.mass}</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Height: </p>
                <p>{selectedResult.height}</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Hair Color: </p>
                <p>{selectedResult.hair_color}</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Skin Color: </p>
                <p>{selectedResult.skin_color}</p>
              </div>
            </div>
          }
        />
      )}
    </div>
  );
};

export default DataTable;
