"use client";

import React, { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout";
import getContactSchema, { ContactData } from "../schemas/contact";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "../actions/contact";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const t = useTranslations("contact");
  const form = useForm<ContactData>({
    resolver: zodResolver(getContactSchema(t)),
    defaultValues: {
      email: "",
      message: "",
    },
  });
  const { toast } = useToast();

  async function onSubmit(
    values: z.infer<ReturnType<typeof getContactSchema>>
  ) {
    try {
      const result = await sendEmail(values);

      if (result.success) {
        toast({
          title: "Success",
          description: t("success"),
        });
        form.reset();
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: t("error"),
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full md:w-[400px]"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("email.label")}</FormLabel>
              <FormControl>
                <Input placeholder={t("email.placeholder")} {...field} />
              </FormControl>
              <FormDescription className="text-sm text-muted-foreground">
                {t("email.description")}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("message.label")}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("message.placeholder")}
                  className="resize-none min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {t("submit")}
        </Button>
      </form>
    </Form>
  );
}

export default function Contact() {
  const t = useTranslations("contact");
  const schema = getContactSchema(t);

  const form = useForm<ContactData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  return (
    <Layout id="contact">
      <div className="grid place-content-center py-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">{t("title")}</h2>
          <p className="text-muted-foreground">{t("description")}</p>
        </div>
        <ContactForm />
      </div>
    </Layout>
  );
}
