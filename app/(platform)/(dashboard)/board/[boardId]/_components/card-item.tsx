"use client";

import { Card } from "@prisma/client";
import { Draggable } from "@hello-pangea/dnd";
import { useCardModal } from "@/hooks/use-card-modal";
import { CardOptions } from "./card-options";

interface CardItemProps {
  data: Card;
  index: number;
}

const CardItem = ({ data, index }: CardItemProps) => {
  const cardModel = useCardModal();
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div>
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            role="button"
            onClick={() => {
              cardModel.open(data.id);
            }}
            className="truncate border-0 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm flex justify-between items-center"
          >
            {data.title}
            <CardOptions data={data} />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default CardItem;
