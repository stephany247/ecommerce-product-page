import { useQuantity } from "@/context/QuantityContext";
import React from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";

function QuantityInput() {
  const { quantity, increase, decrease } = useQuantity();
  return (
    <div className="flex justify-between items-center gap-4 bg-light-grayish-blue p-2 rounded-lg w-full">
      <Button
        onClick={decrease}
        className="text-orange-400 hover:bg-orange-200 font-extrabold bg-transparent"
      >
        <Minus />
      </Button>
      <p>{quantity}</p>
      <Button
        onClick={increase}
        className="text-orange-400 hover:bg-orange-200 font-extrabold bg-transparent"
      >
        <Plus />
      </Button>
    </div>
  );
}

export default QuantityInput;
