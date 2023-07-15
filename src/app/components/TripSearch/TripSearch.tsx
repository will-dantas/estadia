"use client";

import Button from "@/components/Button";
import CurrencyInput from "@/components/CurrencyInput";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { GrLocation } from "react-icons/gr"
import { LuCalendarDays } from "react-icons/lu"
import { PiCurrencyCircleDollarBold } from "react-icons/pi";

const TripSearch = () => {
  const router = useRouter();

  const {
    control,
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ITripSearchForm>();

  const onSubmit = (data: ITripSearchForm) => {
    router.push(`/trips/search?text=${data.text}&startDate=${data.startDate?.toISOString()}&budget=${data.budget}`);
  };

  return (
    <div className="container mx-auto bg-search-background bg-cover bg-center bg-no-repeat h-[92vh]">
      <div className="bg-black bg-opacity-60 lg:py-32 h-full p-5">
        <div className="lg:max-w-[1080px] lg:mx-auto mt-10 lg:mt-0">
          <h1 className="text-4xl md:text-6xl text-white text-start pt-4 pb-4 leading-20">
            Encontre os <br />melhores lugares <br />para ter sua <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block">
              <span className="relative text-white">estadia</span>
            </span>
          </h1>
        </div>
        <div className="lg:max-w-[1080px] lg:mx-auto mt-8">
          <p className="font-extralight text-white text-start">Bem vindo à nossa plataforma de reserva de hoteis, onde sua experiência de viagens se torna mais fácil e agradável.</p>
        </div>
        <div className="flex flex-col gap-4 h-auto mt-14 lg:flex-row lg:max-w-[1080px] lg:mx-auto p-4 bg-white lg:mt-12 rounded-lg">
          <div className="w-full">
            <div className="flex items-center gap-2 mb-2">
              <GrLocation />
              <p className="font-semibold text-black text-justify text-sm ">Localização</p>
            </div>
            <Input
              className="bg-grayLighter400 border-none"
              placeholder="Onde você quer ir?"
              error={!!errors.text}
              errorMessage={errors.text?.message}
              {...register("text", {
                required: {
                  value: true,
                  message: "Texto é obrigatório.",
                },
              })}
            />
          </div>
          <div className="flex gap-4 lg:w-full">
            <div className="w-full">
              <div className="flex items-center gap-2 mb-2">
                <LuCalendarDays />
                <p className="font-semibold text-black text-start text-sm">Check-in</p>
              </div>
              <Controller
                name="startDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    onChange={field.onChange}
                    selected={field.value}
                    placeholderText="Data Final"
                    className="w-full bg-grayLighter400 border-none"
                    minDate={new Date()}
                  />
                )}
              />
            </div>
            <div className="w-full">
              <div className="flex items-center gap-2 mb-2">
                <PiCurrencyCircleDollarBold />
                <p className="font-semibold text-black text-start text-sm">Orçamento</p>
              </div>
              <Controller
                name="budget"
                control={control}
                render={({ field }) => (
                  <CurrencyInput
                    className="bg-grayLighter400 border-none"
                    allowDecimals={false}
                    placeholder="Orçamento"
                    onValueChange={field.onChange as any}
                    value={field.value}
                    onBlur={field.onBlur}
                  />
                )}
              />
            </div>
          </div>
          <Button 
            onClick={() => handleSubmit(onSubmit)()} 
            className="w-full lg:w-1/3 h-full lg:mt-7"
          >
            Buscar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TripSearch;
