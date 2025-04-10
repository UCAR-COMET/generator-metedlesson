export const module = {
    type: 'RECIEVE_MODULE',
    json: {
      metadata: {
        id: '<%= lessonID %>',
        meta_id: '<%= lessonID %>',
        title: '<%= lessonTitle %>',
        path: '<%= lessonPath %>',
        printVerURL: '<%= lessonPath %>print.php',
        languageText: "<% if (lessonLang === 'ES') { %>Español<% } else if (lessonLang === 'FR') { %>Français<% } else { %>English<% } %>",
        description: "<%= lessonDesc %>",
        keywords: "<%= lessonKeys %>",
      },
      content: {},
      preassessment: null,
      booster: null
    }
  };

export const lesson = {
    // Development information
    devMode: false,

    // Basic lesson information
    title: module.json.metadata.title,
    subtitle: module.json.metadata.subtitle || "",
    originalPath: module.json.metadata.originalPath,
    id: module.json.metadata.id,
    printsCount: 1,
    description: module.json.descriptions[module.json.metadata.languageID],
    keywords: module.json.metadata.keywords,
    
    // Publication information
    publishDate: module.json.metadata.publishDate,
    lastUpdated: new Date().toISOString().split('T')[0],
    
    
    // Lesson settings
    language: module.json.metadata.languageID,
    interactivityLevel: module.json.metadata.interactivityLevel,
    contentLevel: module.json.metadata.contentLevel,
    topics: module.json.metadata.topics,
    learningResourceType: module.json.metadata.learningResourceType,
    estimatedTime: module.json.metadata.estimatedTime,
};