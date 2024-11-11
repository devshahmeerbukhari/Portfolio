import { defineType, defineField } from "sanity";

export const CircleAnimation = defineType({
    name: "circleAnimation",
    title: "circleAnimation",
    type: "document",
    fields: [
        defineField({
            name: "technology",
            type: "string",
        }),
        defineField({
            name: "logo",
            type: "image",
        }),
    ]
})