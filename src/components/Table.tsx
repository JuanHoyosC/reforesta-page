import { FC } from "react";

interface TableProps {
  headers: string[];
  children?: React.ReactChild | React.ReactChild[];
}

const Table: FC<TableProps> = ({ headers, children }) => {
  return (
    <section className="bg-white py-2 lg:py-10">
      <div className="container">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 snap-x">
            <div className="w-auto overflow-auto">
              <table className="table-auto w-auto">
                <thead className="bg-blue-500 w-auto">
                  <tr className="w-auto">
                    {headers.map((header, index) => (
                      <th
                        key={header + index}
                        className="
                            w-1/6
                            min-w-[160px]
                            text-lg
                            font-semibold
                            text-white
                            py-4
                            lg:py-7
                            px-3
                            lg:px-4
                            "
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                {children}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
