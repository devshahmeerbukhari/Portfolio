import { defineType, defineField } from "sanity";

export const AboutDomains = defineType({
    name: "domains",
    title: "domains",
    type: "document",
    fields: [
        defineField({
            name: "DomainName",
            type: "string",
        }),
        defineField({
            name: "logo",
            type: "image",
        }),
    ]
})