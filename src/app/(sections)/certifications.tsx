import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CalendarIcon, CircleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

interface Certification {
  id: number;
  name: string;
  date: string;
  instructor: string;
  imageUrl: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    name: "Advanced React with TypeScript",
    date: "2024-08-25",
    instructor: "Matt Pocock",
    imageUrl: "/certifications/advanced-react-with-typescript.png",
  },
  {
    id: 1,
    name: "Zod Workshop",
    date: "2024-07-10",
    instructor: "Matt Pocock",
    imageUrl: "/certifications/zod.png",
  },
];

export default function Component() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">My Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} certification={cert} />
        ))}
      </div>
    </div>
  );
}

function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>{certification.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-2">
          <CalendarIcon className="inline-block mr-1 h-4 w-4" />
          {new Date(certification.date).toLocaleDateString()}
        </p>
        <p className="text-sm">Instructor: {certification.instructor}</p>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">View Certificate</Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <AnimatePresence>
              <div className="flex cursor-pointer items-center justify-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur">
                <motion.div
                  initial={{ scale: 0, rotate: "180deg" }}
                  animate={{
                    scale: 1,
                    rotate: "0deg",
                    transition: {
                      type: "spring",
                      bounce: 0.25,
                    },
                  }}
                  exit={{ scale: 0, rotate: "180deg" }}
                >
                  <div className="flex flex-col gap-3">
                    <CircleAlert className="mx-auto text-white" size={48} />
                    <h3 className={cn("text-center text-3xl font-bold", {})}>
                      Welcome to the modal!
                    </h3>
                    <img
                      src={certification.imageUrl}
                      alt={`${certification.name} Certificate`}
                      className="w-full h-auto"
                    />
                    <div className="flex gap-2">
                      <button className="w-full rounded bg-transparent py-2 font-semibold text-white transition-colors hover:bg-white/30">
                        Close!
                      </button>
                      <button className="w-full rounded bg-white py-2 font-semibold text-indigo-600 transition-opacity hover:opacity-80">
                        Understood!
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatePresence>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
