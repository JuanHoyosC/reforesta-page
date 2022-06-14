
const TableItem = ({ children }: { children: JSX.Element }) =>{
    return  <td className="text-center text-dark font-medium text-base py-5 px-2 bg-white border-l border-b border-[#E8E8E8]">
        {children}
    </td>
}

export default TableItem