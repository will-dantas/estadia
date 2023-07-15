import React from "react";
import { Trip } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import Image from "next/image";
import Link from "next/link";
import { GrLocation } from "react-icons/gr"
import { NumberToCurrency } from "@/utils/formaters";

interface TripItemProps {
  trip: Trip;
}

const TripItem = ({ trip }: TripItemProps) => {
  return (
    <Link href={`/trips/${trip.id}`}>
      <div className="flex flex-col rounded-lg  shadow-xl shadow-black/20 hover:shadow-md hover:shadow-black/20 hover:border-primary duration-500">
        <div className="relative h-[280px] w-[300px]">
          <Image
            src={trip.coverImage}
            className="rounded-t-xl"
            style={{
              objectFit: "cover",
            }}
            fill
            alt={trip.name}
          />
        </div>
        <div className="ml-2 pl-2 pr-2 pb-4">
          <h3 className="text-primaryDarker font-semibold text-md mt-2">{trip.name}</h3>
          <div className="flex items-center gap-1 my-1">
            <GrLocation />
            <p className="text-xs text-grayPrimary">{trip.location}</p>
          </div>

          <p className="text-xs text-white mt-4">
            <span className="text-wthite text-[0.8rem] bg-primary rounded-lg p-1">
              {NumberToCurrency(trip.pricePerDay)}
            </span> <small className="text-black text-[0.7rem]">por dia</small>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TripItem;
