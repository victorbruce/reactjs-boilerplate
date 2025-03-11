import { defineType, defineField } from "sanity"

const about = defineType({
	name: "about",
	title: "About",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string"
		}),
		defineField({
			name: "content",
			title: "Content",
			type: "array",
			of: [{type: "block"}]
		})
	]
})

export default about