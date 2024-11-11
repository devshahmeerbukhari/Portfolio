import { type SchemaTypeDefinition } from 'sanity'
import { AboutDomains } from '../schema/aboutDomains'
import { WorkExperience } from '../schema/workExperience'
import { CircleAnimation } from '../schema/circleAnimation'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [AboutDomains, WorkExperience, CircleAnimation],
}
