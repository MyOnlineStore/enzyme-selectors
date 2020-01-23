const path = require("path");
const parse = require("comment-parser");

parse.file(path.resolve(__dirname, "./src/index.d.ts"), (err, parsed) => {
  const doc = "";

  console.log(
    parsed
      .map(line => {
        const docline = {};
        docline["description"] = line.description;

        line.tags.forEach(tag => {
          docline[tag.tag] = `${
            tag.tag === "param" ? "`" + tag.name + "`: " : tag.name
          } ${tag.description}`;
        });

        return `
### \`${docline.name}\`\n
${docline.description}\n
Params:\n
${docline.param}
\`\`\`jsx
${docline.example}
\`\`\`
`;
      })
      .join("\n")
  );
});
