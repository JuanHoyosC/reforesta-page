import { FC } from "react";
interface DashbaordCardProps{
    title:string;
    quantity: string | number;
    icon: any;
}

const DashbaordCard: FC<DashbaordCardProps> = ({title,quantity,icon}) => {
  return (
    <div className="shadow-md p-4">
      <div className="">
        <div className="flex flex-col">
          <div className="flex space-x-8 w-52 xl:w-64">
            <div className="">
              <div className="uppercase text-sm text-gray-400">{title}</div>
              <div className="mt-1">
                <div className="flex space-x-2 items-center">
                  <div className="text-2xl">{quantity}</div>
                </div>
              </div>
            </div>
            <div className="">
              {icon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashbaordCard;
