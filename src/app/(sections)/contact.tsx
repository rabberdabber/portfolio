"use client";
import React from "react";
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
import contactSchema, { ContactData } from "../schemas/contact";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const form = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      message: "hello there!",
    },
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-[400px]"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="your@email.com" {...field} />
              </FormControl>
              <FormDescription className="text-sm text-muted-foreground">
                We&apos;ll never share your email with anyone else.
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
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="How can we help you?"
                  className="resize-none min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </Form>
  );
}

export default function Home() {
  return (
    <Layout>
      <div className="h-dvh w-dvw grid place-content-center p-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have a question? We'd love to hear from you.
          </p>
        </div>
        <ContactForm />
      </div>
    </Layout>
  );
}
