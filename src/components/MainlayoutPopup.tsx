import React from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";

import { ImagePlus } from "lucide-react";

interface Props {
  children?: React.ReactNode;
}

const MainLayoutPopUp: React.FC<Props> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[750px] gap-0 ">
        <p className="bg-[#32363f] text-orange px-8 py-4 uppercase mb-2 font-semibold text-sm ">
          Add Menu
        </p>
        <div className="bg-[#32363f] p-8 flex  items-center gap-12">
          <div className=" flex flex-col gap-3 w-[180px] h-[180px] justify-center items-center   ">
            <p className="w-[120px] h-[120px] bg-[#2B2E36] p-4 flex justify-center items-center rounded-full ">
              <ImagePlus className="w-14 h-12" />
            </p>
            <p className="text-orange font-bold text-sm">Add Product Image</p>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-4">
              <Label className="min-w-[160px] text-white text-lg">
                Product name:
              </Label>
              <input
                type="text"
                className="bg-transparent border outline-none rounded py-2 w-full px-2 border-gray-100"
                placeholder="Items"
              />
            </div>
            <div className="flex gap-4">
              <Label className="min-w-[160px] text-white text-lg">
                Product Price:
              </Label>
              <input
                type="text"
                className="bg-transparent border outline-none rounded py-2 w-full px-2 border-gray-100"
                placeholder="$ 0.00"
              />
            </div>
            <div className="flex gap-4">
              <Label className="min-w-[160px] text-white text-lg">
                Product Category:
              </Label>
              <select
                name="cars"
                id="Items"
                className="w-full py-2 bg-transparent px-2 border rounded border-gray-100"
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="flex gap-4">
              <Label className="min-w-[160px] text-white text-lg">
                Product Details:
              </Label>
              <textarea
                rows={2}
                className="bg-transparent border outline-none rounded py-2 w-full px-2 border-gray-100"
                placeholder="Descriptions"
              />
            </div>
          </div>
        </div>
        <div className=" flex justify-end bg-[#32363f] p-8">
          <Button>Menu Upload</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MainLayoutPopUp;
