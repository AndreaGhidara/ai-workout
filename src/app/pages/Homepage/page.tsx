"use client"

import Navbar from "@/components/custom/Navbar";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import React from "react";
import Card from "@/components/custom/Card";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

export default function Homepage() {
    const [exercises] = React.useState([]);
    const [modality, setModality] = React.useState<null | string>(null);
    const [hours, setHours] = React.useState(0.5);
    const formattedTime = `${Math.floor(hours)}:${hours % 1 === 0 ? "00" : "30"}`;


    function onClick(adjustment: number) {
        setHours(prev => Math.max(0.5, Math.min(12, prev + adjustment)));
    }

    function setModalityOfExercises(mod: string) {
        setModality(mod);
    }

    function resetTime() {
        setHours(0.5)
    }

    function handleSubmit() {
        if (!modality || !hours) {
            return;
        }

        const data = {
            "modality": modality,
            "time": formattedTime
        }

        console.log(data);

    }


    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
            </main>
            <div className="container px-2 md:mx-auto py-10">
                <div className="text-center pb-5">
                    <h1 className="text-white text-2xl font-mono">Dove ti vuoi allenare?</h1>
                </div>
                <div className="flex justify-evenly gap-3 ">
                    <Button onClick={() => setModalityOfExercises("home")} className={"flex flex-col bg-[var(--neutralPc)] hover:bg-[var(--accentPc)] md:flex-1 py-10 shadow-2xl shadow-green-400 ${}"}>
                        <p className={`w-[100px] text-wrap text-base ${modality === "home" ? "bg-[var(--backgroundPc)] border " : "bg-[var(--neutralPc)] "} p-1 rounded`}>Home</p>
                        <Image
                            src="/icon/home.png"
                            width={50}
                            height={50}
                            className={`${modality === "home" ? "invert " : ""}`}
                            alt="Picture of the author"
                        />
                    </Button>
                    <Button onClick={() => setModalityOfExercises("gym")} className="flex flex-col bg-[var(--neutralPc)] hover:bg-[var(--accentPc)] md:flex-1 py-10 shadow-2xl shadow-green-400">
                        <p className={`w-[100px] text-wrap text-base font-bold ${modality === "gym" ? "bg-[var(--backgroundPc)] border" : "bg-[var(--neutralPc)]"} p-1 rounded`} >Gym</p>
                        <Image
                            src="/icon/dumbbell.png"
                            width={50}
                            height={50}
                            className={`${modality === "gym" ? "invert" : ""}`}
                            alt="Picture of the author"
                        />
                    </Button>
                </div>
            </div>
            <div className="container px-2 md:mx-auto">
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button className="w-full text-md font-medium text-black bg-[var(--neutralPc)] hover:bg-[var(--accentPc)]">Quanto tempo ci vuoi dedicare?</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="mx-auto w-full max-w-sm">
                            <DrawerHeader>
                                <DrawerTitle>Time</DrawerTitle>
                                <DrawerDescription>Imposta il tempo che ci puoi dedicare.</DrawerDescription>
                            </DrawerHeader>
                            <div className="p-4 pb-0">
                                <div className="flex items-center justify-center space-x-2">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 shrink-0 rounded-full"
                                        onClick={() => onClick(-0.5)}
                                        disabled={hours <= 0.5}
                                    >
                                        <Minus />
                                        <span className="sr-only">Decrease</span>
                                    </Button>
                                    <div className="flex-1 text-center">
                                        <div className="text-7xl font-bold tracking-tighter">
                                            {formattedTime}
                                        </div>
                                        <div className="text-[0.70rem] uppercase text-muted-foreground">
                                            Hours/day
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8 shrink-0 rounded-full"
                                        onClick={() => onClick(0.5)}
                                        disabled={hours >= 12}
                                    >
                                        <Plus />
                                        <span className="sr-only">Increase</span>
                                    </Button>
                                </div>
                            </div>
                            <DrawerFooter>
                                <DrawerClose asChild>
                                    <Button>Submit</Button>
                                </DrawerClose>
                                <DrawerClose asChild>
                                    <Button onClick={resetTime} variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>

            {exercises && exercises.length > 0 ? (
                <div className="container px-2 md:mx-auto md:px-0 py-5">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <Card />
                    </div>
                </div>
            ) : (
                <div className="container px-2 md:mx-auto py-5 text-white">
                    <div className="flex flex-col justify-between items-center">
                        <div className="flex flex-col justify-center items-center">
                            {modality && modality.length > 0 ? (
                                <>
                                    <Image
                                        src={`${modality === "home" ? "/icon/home.png" : "/icon/dumbbell.png"}`}
                                        width={80}
                                        height={80}
                                        className="invert"
                                        alt="Picture of the author"
                                    />
                                </>
                            ) : (
                                <>
                                    <div>
                                        <div className="flex flex-col space-y-3 ">
                                            <Skeleton className="h-[80px] w-[80px] bg-red-400 rounded-xl" />
                                        </div>
                                    </div>
                                </>
                            )}
                            <p className="pt-1">
                                {formattedTime} h
                            </p>
                        </div>
                        <Button onClick={handleSubmit} disabled={modality ? false : true} className="fixed bottom-0 mb-3 uppercase font-bold bg-green-400"> Send </Button>
                    </div>
                </div>
            )}
        </div>
    )
}
