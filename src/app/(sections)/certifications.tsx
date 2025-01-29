"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import certifications from "@/config/certificates";
import Layout from "@/components/layout";
import { breakpoints, useMediaQuery } from "@/hooks/useMediaQuery";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import ImagesWithBlur from "@/components/images-with-blur";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import React from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export default function Certifications() {
  return (
    <Layout id="certifications">
      <div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Professional Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my professional certifications in software
            engineering.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="initial"
          animate="animate"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              variants={fadeInUp}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <CertificationCard certification={cert} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
}

function CertificateDialog({
  certification,
}: {
  certification: (typeof certifications)[number];
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full transition-all hover:scale-105 hover:shadow-lg"
        >
          <Icons.award className="mr-2 h-4 w-4" />
          View Certificate
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <AnimatePresence>
          <motion.div
            className="relative backdrop-blur p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="bg-card rounded-xl overflow-hidden shadow-2xl">
              {certification.type === "specialization" &&
              Array.isArray(certification.imageUrl) ? (
                <Carousel setApi={setApi} className="w-full relative">
                  <CarouselContent>
                    {certification.imageUrl.map((image, index) => (
                      <CarouselItem key={index}>
                        <ImagesWithBlur
                          src={image}
                          alt={`${certification.name} Certificate - Part ${
                            index + 1
                          }`}
                          className="w-full h-auto transition-transform hover:scale-[1.02]"
                          width={1200}
                          height={800}
                          priority
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {current > 0 && (
                    <CarouselPrevious className="transition-transform absolute left-4 hover:scale-105" />
                  )}
                  {current < count - 1 && (
                    <CarouselNext className="transition-transform absolute right-4 hover:scale-105" />
                  )}
                </Carousel>
              ) : (
                <ImagesWithBlur
                  src={certification.imageUrl as string}
                  alt={`${certification.name} Certificate`}
                  className="w-full h-auto transition-transform hover:scale-[1.02]"
                  width={1200}
                  height={800}
                  priority
                />
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

function CertificateDrawer({
  certification,
}: {
  certification: (typeof certifications)[number];
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="w-full transition-all hover:scale-105 hover:shadow-lg"
        >
          <Icons.award className="mr-2 h-4 w-4" />
          View Certificate
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col items-center p-4 h-full overflow-y-auto">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                duration: 0.4,
              },
            }}
            className="w-full max-w-2xl mx-auto"
          >
            <div className="bg-card rounded-xl overflow-hidden shadow-2xl">
              {certification.type === "specialization" &&
              Array.isArray(certification.imageUrl) ? (
                <Carousel setApi={setApi} className="w-full relative">
                  <CarouselContent>
                    {certification.imageUrl.map((image, index) => (
                      <CarouselItem key={index}>
                        <ImagesWithBlur
                          src={image}
                          alt={`${certification.name} Certificate - Part ${
                            index + 1
                          }`}
                          className="w-full h-auto"
                          width={1200}
                          height={800}
                          priority
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {current > 0 && (
                    <CarouselPrevious className="transition-transform absolute left-4 hover:scale-105" />
                  )}
                  {current < count - 1 && (
                    <CarouselNext className="transition-transform absolute right-4 hover:scale-105" />
                  )}
                </Carousel>
              ) : (
                <ImagesWithBlur
                  src={certification.imageUrl as string}
                  alt={`${certification.name} Certificate`}
                  className="w-full h-auto"
                  width={1200}
                  height={800}
                  priority
                />
              )}
            </div>
          </motion.div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function CertificationCard({
  certification,
}: {
  certification: (typeof certifications)[number];
}) {
  const isMobile = !useMediaQuery(breakpoints.md);

  return (
    <Card className="group h-full transition-all hover:shadow-lg dark:hover:shadow-primary/5 hover:scale-[1.02] border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          {certification.type === "specialization" ? (
            <Icons.medal className="h-5 w-5 text-primary" />
          ) : (
            <Icons.award className="h-5 w-5 text-primary" />
          )}
          {certification.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <Icons.calendar className="mr-2 h-4 w-4" />
          {new Date(certification.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">
            Instructor: {certification.instructor}
          </p>
          <Link
            href={certification.websiteUrl}
            className="inline-flex items-center text-sm text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Course
            <Icons.externalLink className="ml-1 h-3 w-3" />
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {certification.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        {isMobile ? (
          <CertificateDrawer certification={certification} />
        ) : (
          <CertificateDialog certification={certification} />
        )}
      </CardFooter>
    </Card>
  );
}
