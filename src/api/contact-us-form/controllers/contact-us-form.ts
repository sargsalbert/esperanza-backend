// /**
//  * contact-us-form controller
//  */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::contact-us-form.contact-us-form');

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::contact-us-form.contact-us-form",
  ({ strapi }) => ({
    async create(ctx) {
      const {
        name,
        formSurname,
        formPhone,
        formEmail,
        formDates,
        formNumberGuests,
        formMessage,
      } = ctx.request.body.data;

      try {
        const formattedDates = formDates.map((date) => ({
          formDates: date,
        }));

        // 1. Send email using Resend SMTP
        // await strapi.plugins.email.services.email.send({
        //   to: "sargsyan.abet@gmail.com",
        //   from: process.env.SMTP_USER,
        //   subject: `New Contact Form Submission from ${name}`,
        //   text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
        // });

        // 2. Store in database
        const entry = await strapi.entityService.create(
          "api::contact-us-form.contact-us-form",
          {
            data: {
              name,
              formSurname,
              formPhone,
              formEmail,
              formDatesItem: formattedDates,
              formNumberGuests,
              formMessage,
            },
          }
        );

        return ctx.send({ success: true, data: entry });
      } catch (err) {
        console.error("Error sending email:", err);
        return ctx.send({ success: false, error: "Failed to send email" }, 500);
      }
    },
  })
);
