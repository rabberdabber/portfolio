import { z } from "zod";

const getContactSchema = (t: (key: string) => string) =>
  z.object({
    email: z
      .string()
      .min(1, t("validation.emailRequired"))
      .email(t("validation.emailInvalid")),
    message: z
      .string()
      .min(1, t("validation.messageRequired"))
      .min(10, t("validation.messageTooShort"))
      .max(1000, t("validation.messageTooLong")),
  });

export type ContactData = z.infer<ReturnType<typeof getContactSchema>>;

export default getContactSchema;
