"use client";

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
import { CalendarIcon, ExternalLink, Award, Images } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import certifications from "@/config/certificates";
import Layout from "@/components/layout";
import { breakpoints, useMediaQuery } from "@/hooks/useMediaQuery";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import ImagesWithBlur from "@/components/images-with-blur";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export default function Certifications() {
  return (
    <Layout id="certifications">
      <div className="min-h-screen">
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
              key={cert.id}
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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full transition-all hover:scale-105 hover:shadow-lg"
        >
          <Award className="mr-2 h-4 w-4" />
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
              <ImagesWithBlur
                src={certification.imageUrl}
                alt={`${certification.name} Certificate`}
                className="w-full h-auto transition-transform hover:scale-[1.02]"
                width={1200}
                height={800}
                priority
              />
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
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="w-full transition-all hover:scale-105 hover:shadow-lg"
        >
          <Award className="mr-2 h-4 w-4" />
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
              <ImagesWithBlur
                src={certification.imageUrl}
                alt={`${certification.name} Certificate`}
                className="w-full h-auto"
                width={1200}
                height={800}
                priority
              />
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
    <Card className="group h-full transition-all hover:shadow-lg dark:hover:shadow-primary/5 hover:scale-[1.02]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Award className="h-5 w-5 text-primary" />
          {certification.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarIcon className="mr-2 h-4 w-4" />
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
            <ExternalLink className="ml-1 h-3 w-3" />
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
