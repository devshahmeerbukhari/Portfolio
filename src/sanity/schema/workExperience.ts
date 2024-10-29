import { defineField, defineType } from "sanity";

export const WorkExperience = defineType({
    name: "workExperience",
    title: "workExperience",
    type:"document",
    fields:[
        defineField({
            name: "PlaceOfWork",
            type: "string",
        }),
        defineField({
            name: "jobDiscription",
            type: "array",
            of: [{type: "string"}]
        }),
        defineField({
            name: "logo",
            type: "image",
        }),
    ]
})