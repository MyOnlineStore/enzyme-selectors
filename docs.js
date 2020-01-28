const path = require("path");
const parse = require("comment-parser");
const prettier = require("prettier");

prettier.resolveConfigFile();

parse.file(path.resolve(__dirname, "./src/index.d.ts"), (err, parsed) => {
  const doc = parsed
    .map(line => {
      let doc = "";
      const docline = { params: [] };
      docline["description"] = line.description;

      line.tags.forEach(tag => {
        if (tag.tag === "param") {
          docline.params.push(`\`${tag.name}\`: ${tag.type}\n`);
        } else {
          docline[tag.tag] = `${tag.name} ${tag.description}`;
        }
        console.log(docline);
      });

      doc += `
### \`${docline.name}\`\n
${docline.description}\n
#### Params:\n
${docline.params.join("\n")}\n\n
`;

      if (docline.example) {
        doc += `#### Example:\n\`\`\`jsx\n${prettier.format(docline.example, {
          parser: "babel"
        })}\`\`\``;
      }

      return doc;
    })
    .join("\n");

  console.log(doc);
});
