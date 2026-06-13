import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

const eslintConfig = [
  {
    ignores: [".next/**", "dist/**", "node_modules/**", "out/**", "public/**", "next-env.d.ts"]
  },
  ...nextVitals,
  ...nextTypescript,
  prettier
];

export default eslintConfig;
