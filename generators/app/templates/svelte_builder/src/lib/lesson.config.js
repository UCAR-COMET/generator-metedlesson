export const module = {
    metadata: {
      id: '<%= lessonID %>',
      meta_id: '<%= lessonID %>',
      title: '<%= lessonTitle %>',
      path: '<%= lessonPath %>',
      printVerURL: '<%= lessonPath %>print.php',
      languageText: "<% if (lessonLang === 'ES') { %>Español<% } else if (lessonLang === 'FR') { %>Français<% } else { %>English<% } %>",
      keywords: "<%= lessonKeys %>",
      description: "<%= lessonDesc %>"
    }
};

export const lesson = {
    // Development information
    devMode: true,

    // Basic lesson information
    title: module.metadata.title,
    subtitle: module.metadata.subtitle || "",
    originalPath: module.metadata.originalPath,
    id: module.metadata.id,
    printsCount: 1,
    description: module.description,
    keywords: module.metadata.keywords,
};