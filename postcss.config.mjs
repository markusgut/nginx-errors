/** @type {import("postcss").ProcessOptions} */
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

export default {
  plugins: [
    autoprefixer({
      overrideBrowserslist: ["cover 98%"]
    }),
    cssnano({
      preset: "advanced"
    })
  ]
};

