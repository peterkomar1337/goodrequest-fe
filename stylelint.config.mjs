/**
 * Stylelint checks meaning, Prettier checks looks. Since Stylelint 16 dropped
 * its stylistic rules there is no overlap between the two, so no extra
 * compatibility package is needed.
 *
 * @type {import("stylelint").Config}
 */
const config = {
  extends: "stylelint-config-standard-scss",
  rules: {
    // CSS Modules classes are read back as `styles.sectionTitle`, so they are
    // camelCase here while global helpers stay kebab-case. The default
    // kebab-only pattern would reject half the codebase either way.
    "selector-class-pattern": null,
  },
};

export default config;
